package com.promist.logistics.service;

import java.text.DecimalFormat;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;

import com.promist.logistics.dto.DodavanjeNapomeneDTO;
import com.promist.logistics.dto.IzvestajDetaljnoDTO;
import com.promist.logistics.dto.MarlepDTO;
import com.promist.logistics.dto.MarmekDTO;
import com.promist.logistics.dto.MerilDTO;
import com.promist.logistics.dto.MiPDTO;
import com.promist.logistics.dto.PakericaDTO;
import com.promist.logistics.exception.NijeDeljivoException;
import com.promist.logistics.model.Cemer;
import com.promist.logistics.model.Crevo;
import com.promist.logistics.model.Marlep;
import com.promist.logistics.model.Pam;
import com.promist.logistics.model.Pasadz;
import com.promist.logistics.model.Promena;
import com.promist.logistics.model.PromenaRepro;
import com.promist.logistics.model.RobaIliUsluga;
import com.promist.logistics.model.User;
import com.promist.logistics.repository.CemerRepository;
import com.promist.logistics.repository.CrevoRepository;
import com.promist.logistics.repository.MarlepRepository;
import com.promist.logistics.repository.PamRepository;
import com.promist.logistics.repository.PasadzRepository;
import com.promist.logistics.repository.PromenaRepository;
import com.promist.logistics.repository.PromenaReproRepository;
import com.promist.logistics.repository.RobaIliUslugaRepository;
import com.promist.logistics.repository.UserRepository;

@Service
public class MarlepServiceImpl implements MarlepService {
	
	private static final Logger logger = LoggerFactory.getLogger(MarlepServiceImpl.class);
	
	@Autowired
	private MarlepRepository mrepo;
	
	@Autowired
	private PromenaRepository prepo;	
	
	@Autowired
	private RobaIliUslugaRepository riurepo;
	
	@Autowired
	private PamRepository pamrepo;
	
	@Autowired
	private CemerRepository crepo;
	
	@Autowired
	private PasadzRepository pasrepo;
	
	@Autowired
	private CrevoRepository crevorepo;
	
	@Autowired
	private UserRepository urepo;
	
	@Autowired
	private PromenaReproRepository preprorepo;
	
	private static DecimalFormat df2 = new DecimalFormat("#.######");
	
	@Override
	public boolean imaNaStanju(Object marlepDTO) {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		if(marlepDTO instanceof MarlepDTO) {
			if(((MarlepDTO) marlepDTO).getSmer().equals("izlaz")) {  
				for(Long i : ((MarlepDTO) marlepDTO).getPromet().keySet()) {
					Marlep marlep = mrepo.nadjiMarlep(((MarlepDTO) marlepDTO).getMagacinId(), ((MarlepDTO) marlepDTO).getRobaId(), ((MarlepDTO) marlepDTO).getLotId(), i);
					if(marlep.getStanje() < ((MarlepDTO) marlepDTO).getPromet().get(i)) {
						logger.info("NEUSPESNO->Datum:"+new SimpleDateFormat("dd-MM-yyyy").format(new Date())+
								"Smer:"+((MarlepDTO) marlepDTO).getSmer()+" Kolicina"+((MarlepDTO) marlepDTO).getPromet().get(i)+ 
								" Stanje:"+marlep.getStanje()+ 
								" Magacin:"+marlep.getMagacin().getNaziv().toString() +
								" Pakovanje:" + marlep.getPakovanje().getVrsta().toString()+ 
								" Roba:"+marlep.getRoba().getVrsta().toString()+
								" Lot:"+marlep.getLot().getNaziv().toString()+
								" Korisnik:"+u.getId());
	
						return false;
					}
				}						
			} else if(((MarlepDTO) marlepDTO).getSmer().equals("pakovanje")) {
				int potrebno = 0;
				for(Long i : ((MarlepDTO) marlepDTO).getPromet().keySet()) {
					potrebno += ((MarlepDTO) marlepDTO).getPromet().get(i);
				}
				Marlep marlep = mrepo.nadjiRinfuz(((MarlepDTO) marlepDTO).getMagacinId(), ((MarlepDTO) marlepDTO).getRobaId(), ((MarlepDTO) marlepDTO).getLotId());
				if(marlep.getStanje() < potrebno) {
					logger.info("NEUSPESNO->Datum:"+new SimpleDateFormat("dd-MM-yyyy").format(new Date())+
							"Smer:"+((MarlepDTO) marlepDTO).getSmer()+" Potrebna Kolicina"+potrebno+ 
							" Stanje:"+marlep.getStanje()+ 
							" Magacin:"+marlep.getMagacin().getNaziv().toString() +
							" Pakovanje:" + marlep.getPakovanje().getVrsta().toString()+ 
							" Roba:"+marlep.getRoba().getVrsta().toString()+
							" Lot:"+marlep.getLot().getNaziv().toString()+
							" Korisnik:"+u.getId());
	
					return false;
				}
			}
		} else if(marlepDTO instanceof PakericaDTO) {
			Marlep marlep = mrepo.nadjiMarlep(((PakericaDTO) marlepDTO).getMagacinId(), ((PakericaDTO) marlepDTO).getRobaId(), ((PakericaDTO) marlepDTO).getLotId(), ((PakericaDTO) marlepDTO).getIzvorId());
			if(marlep.getStanje() < ((PakericaDTO) marlepDTO).getKolicina()) {
				logger.info("NEUSPESNO->Datum:"+new SimpleDateFormat("dd-MM-yyyy").format(new Date())+
						"Smer: pakovanje" +" Potrebna Kolicina"+((PakericaDTO) marlepDTO).getKolicina()+ 
						" Stanje:"+marlep.getStanje()+ 
						" Magacin:"+marlep.getMagacin().getNaziv().toString() +
						" Pakovanje:" + marlep.getPakovanje().getVrsta().toString()+ 
						" Roba:"+marlep.getRoba().getVrsta().toString()+
						" Lot:"+marlep.getLot().getNaziv().toString()+
						" Korisnik:"+u.getId());
				
				return false;
			}
			
		}
		
		
		return true;
	}
	
	@Override
	public boolean imaNaStanjuRM(PakericaDTO p) throws NijeDeljivoException {
		if(p.getPakovanjeId() == 1) {							// da li je 25/1, onda imas jebade sa paletama, crevima i strecom
			double paleta = 0;
			double creva = 0;
			double streca = 0;
			if(p.getRobaId() >= 5 && p.getRobaId() <= 8) {		// 1.25t, 120*100
				paleta = p.getKolicina() / 1.25;
				if(paleta % 1 != 0)
					throw new NijeDeljivoException("%d nije deljivo sa 1,25. Molim Vas promenite količinu.");
				if(pamrepo.nadjiPam(p.getMagacinId(), (long) 1).getStanje() < paleta)
					return false;
				streca = paleta * 0.8;
				if(pamrepo.nadjiPam(p.getMagacinId(), (long) 3).getStanje() < streca)
					return false;
				if(p.getCrevoId() == 1) {						// 100 mikrona
					creva = paleta * 3.12;
				} else {										// 120 mikrona
					creva = paleta * 3.64;
				}
				if(crepo.nadjiCemer(p.getMagacinId(), p.getRobaId(), p.getCrevoId()).getStanje() < creva)
					return false;
			} else {											// 1.5t, 115*95
				paleta = p.getKolicina() / 1.5;
				if(paleta % 1 != 0)
					throw new NijeDeljivoException("%d nije deljivo sa 1,5. Molim Vas promenite količinu.");
				if(pamrepo.nadjiPam(p.getMagacinId(), (long) 2).getStanje() < paleta)
					return false;
				streca = paleta * 0.8;
				if(pamrepo.nadjiPam(p.getMagacinId(), (long) 3).getStanje() < streca)
					return false;
				if(p.getCrevoId() == 1) {						// 100 mikrona
					creva = paleta * 3.72;
				} else {										// 120 mikrona
					creva = paleta * 4.34;
				}
				if(crepo.nadjiCemer(p.getMagacinId(), p.getRobaId(), p.getCrevoId()).getStanje() < creva)
					return false;
			}
		} else if(p.getPakovanjeId() <= 5) {					// pakuj u dzakove
			Pam pam = pamrepo.nadjiPam(p.getMagacinId(), p.getPakovanjeId() + 2);
			double komada = 0.00;
			if(p.getPakovanjeId() == 2) {						// 50/1
				komada = (p.getKolicina()*1000) /50;				
			} else if(p.getPakovanjeId() == 3) {				// 500/1
				komada = (p.getKolicina()*1000) /500;	
			} else if(p.getPakovanjeId() == 4) {				// 600/1
				komada = (p.getKolicina()*1000) /600;	
			} else if (p.getPakovanjeId() == 5) {				// 1000/1
				komada = p.getKolicina();	
			}
			//komada = BigDecimal.valueOf(komada).setScale(4, RoundingMode.FLOOR).doubleValue();
			Double kom = new Double(df2.format(komada));
			if(kom.doubleValue() % 1 != 0) {
				return false;
			}
			if(pam.getStanje() < kom.doubleValue()) {
				return false;
			}
		}		
		
		return true;
	}
	
	@Override
	public Promena obradiPakericu(PakericaDTO p) throws NijeDeljivoException {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		Marlep izvorniMarlep = mrepo.nadjiMarlep(p.getMagacinId(), p.getRobaId(), p.getLotId(), p.getIzvorId());
		izvorniMarlep.setStanje(izvorniMarlep.getStanje() - p.getKolicina());
		
		Promena prome = new Promena();
		prome.setMarlep(izvorniMarlep);
		prome.setKolicina(p.getKolicina());
		prome.setSmer("pakovanje izlaz");
		if(p.getDatum().equals("")) {
			prome.setDatum(new SimpleDateFormat("dd-MM-yyyy").format(new Date()));	
		} else {
			prome.setDatum(p.getDatum());	
		}			
		prome.setNovoStanje(izvorniMarlep.getStanje());
		prome.setNapomena("");
		mrepo.save(izvorniMarlep);
		logger.info("USPESNO->Datum:"+new SimpleDateFormat("dd-MM-yyyy").format(new Date())+
				"Smer:"+prome.getSmer()+" Kolicina"+prome.getKolicina()+ 
				" Novo stanje:"+izvorniMarlep.getStanje()+ 
				" Magacin:"+prome.getMarlep().getMagacin().getNaziv().toString() +
				" Pakovanje:" + prome.getMarlep().getPakovanje().getVrsta().toString()+ 
				" Roba:"+prome.getMarlep().getRoba().getVrsta().toString()+
				" Lot:"+prome.getMarlep().getLot().getNaziv().toString()+
				" Korisnik:"+u.getId());

		prepo.save(prome);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		Marlep marlep = mrepo.nadjiMarlep(p.getMagacinId(), p.getRobaId(), p.getLotId(), p.getPakovanjeId());
		marlep.setStanje(marlep.getStanje() + p.getKolicina());	
		
		Promena prom = new Promena();		
		prom.setMarlep(marlep);
		prom.setKolicina(p.getKolicina());		
		prom.setSmer("pakovanje ulaz");
		if(p.getDatum().equals("")) {
			prom.setDatum(new SimpleDateFormat("dd-MM-yyyy").format(new Date()));	
		} else {
			prom.setDatum(p.getDatum());	
		}
		prom.setNovoStanje(marlep.getStanje());
		prom.setNapomena("");
		mrepo.save(marlep);
		logger.info("USPESNO->Datum:"+new SimpleDateFormat("dd-MM-yyyy").format(new Date())+
				" Smer:"+prom.getSmer()+" Kolicina"+prom.getKolicina()+ 
				" Novo stanje:"+prom.getNovoStanje()+ 
				" Magacin:"+prom.getMarlep().getMagacin().getNaziv().toString() +
				" Pakovanje:" + prom.getMarlep().getPakovanje().getVrsta().toString()+ 
				" Roba:"+prom.getMarlep().getRoba().getVrsta().toString()+
				" Lot:"+prom.getMarlep().getLot().getNaziv().toString()+
				" Korisnik:"+u.getId());

		prepo.save(prom);
		
		//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
		if(p.getPakovanjeId() == 1) {		// PAKOVANJE U 25/1 DZAKOVE => TROSI SE I CREVO I STREC
			double paleta = 0;
			double creva = 0;
			double streca = 0;
			int check = 0;
			if(p.getRobaId() >= 5 && p.getRobaId() <= 8) {		// 1.25t, 120*100
				paleta = p.getKolicina() / 1.25;
				if(paleta % 1 != 0) {
					throw new NijeDeljivoException("%d nije deljivo sa 1,25. Molim Vas promenite količinu.");
				}
				Pam pam1 = pamrepo.nadjiPam(p.getMagacinId(), (long) 1);
				pam1.setStanje(pam1.getStanje() - paleta);
				
				PromenaRepro promrepro1 = new PromenaRepro();
				promrepro1.setPam(pam1);
				promrepro1.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro1.setSmer("pakovanje");
				promrepro1.setKolicina(paleta);
				promrepro1.setNovoStanje(pam1.getStanje());
				
				preprorepo.save(promrepro1);
				pamrepo.save(pam1);
				
				if(p.getCrevoId() == 1) {						// 100 mikrona
					creva = paleta * 3.12;
				} else {										// 120 mikrona
					creva = paleta * 3.64;
				}
				System.out.println("CREVA: " + creva + " KOLICINA: " + p.getKolicina());
				Cemer cemer = crepo.nadjiCemer(p.getMagacinId(), p.getRobaId(), p.getCrevoId());
				cemer.setStanje(cemer.getStanje() - creva);
				
				PromenaRepro promrepro2 = new PromenaRepro();
				promrepro2.setCemer(cemer);
				promrepro2.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro2.setSmer("pakovanje");
				promrepro2.setKolicina(creva);
				promrepro2.setNovoStanje(cemer.getStanje());
				
				preprorepo.save(promrepro2);
				crepo.save(cemer);
				
				streca = paleta * 0.8;
				Pam pam3 = pamrepo.nadjiPam(p.getMagacinId(), (long) 3);
				pam3.setStanje(pam3.getStanje() - streca);
				
				PromenaRepro promrepro3 = new PromenaRepro();
				promrepro3.setPam(pam3);
				promrepro3.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro3.setSmer("pakovanje");
				promrepro3.setKolicina(streca);
				promrepro3.setNovoStanje(pam3.getStanje());
				
				preprorepo.save(promrepro3);
				pamrepo.save(pam3);
			} else {											// 1.5t, 115*95
				paleta = p.getKolicina() / 1.5;
				if(paleta % 1 != 0) {
					throw new NijeDeljivoException("%d nije deljivo sa 1,5. Molim Vas promenite količinu.");
				}
				Pam pam2 = pamrepo.nadjiPam(p.getMagacinId(), (long) 2);
				pam2.setStanje(pam2.getStanje() - paleta);
				
				PromenaRepro promrepro1 = new PromenaRepro();
				promrepro1.setPam(pam2);
				promrepro1.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro1.setSmer("pakovanje");
				promrepro1.setKolicina(paleta);
				promrepro1.setNovoStanje(pam2.getStanje());
				
				preprorepo.save(promrepro1);
				pamrepo.save(pam2);
				
				if(p.getCrevoId() == 1) {						// 100 mikrona
					creva = paleta * 3.72;
				} else {										// 120 mikrona
					creva = paleta * 4.34;
				}
				System.out.println("CREVA: " + creva + " KOLICINA: " + p.getKolicina());
				Cemer cemer = crepo.nadjiCemer(p.getMagacinId(), p.getRobaId(), p.getCrevoId());
				cemer.setStanje(cemer.getStanje() - creva);
				
				PromenaRepro promrepro2 = new PromenaRepro();
				promrepro2.setCemer(cemer);
				promrepro2.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro2.setSmer("pakovanje");
				promrepro2.setKolicina(creva);
				promrepro2.setNovoStanje(cemer.getStanje());
				
				preprorepo.save(promrepro2);
				crepo.save(cemer);
				
				streca = paleta * 0.8;
				Pam pam3 = pamrepo.nadjiPam(p.getMagacinId(), (long) 3);
				pam3.setStanje(pam3.getStanje() - streca);
				
				PromenaRepro promrepro3 = new PromenaRepro();
				promrepro3.setPam(pam3);
				promrepro3.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				promrepro3.setSmer("pakovanje");
				promrepro3.setKolicina(streca);
				promrepro3.setNovoStanje(pam3.getStanje());
				
				preprorepo.save(promrepro3);
				pamrepo.save(pam3);
			}
		} else if(p.getPakovanjeId() <= 5) {		// PAKOVANJE U VECE DZAKOVE => TROSE SE SAMO DZAKOVI
			Pam pam = pamrepo.nadjiPam(p.getMagacinId(), p.getPakovanjeId() + 2);
			
			
			double komada = 0;
			if(p.getPakovanjeId() == 2) {						// 50/1
				komada = (p.getKolicina()*1000) /50;				
			} else if(p.getPakovanjeId() == 3) {				// 500/1
				komada = (p.getKolicina()*1000) /500;	
			} else if(p.getPakovanjeId() == 4) {				// 600/1
				komada = (p.getKolicina()*1000) /600;	
			} else if (p.getPakovanjeId() == 5) {				// 1000/1
				komada = p.getKolicina();	
			}
			
			pam.setStanje(pam.getStanje() - komada);
			
			PromenaRepro promrepro = new PromenaRepro();
			promrepro.setPam(pam);
			promrepro.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
			promrepro.setSmer("pakovanje");
			promrepro.setKolicina(komada);
			promrepro.setNovoStanje(pam.getStanje());
			
			preprorepo.save(promrepro);
			pamrepo.save(pam);
		}
		
		
		
		return prom;
	}

	@Override
	public Promena obradiMiP(MiPDTO mip) {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		Marlep marlep = mrepo.nadjiMarlep(mip.getMagacinId(), mip.getRobaId(), mip.getLotId(), mip.getPakovanjeId());
		Promena prom = new Promena();
		System.out.println("MARLEP: " + marlep.getMagacin().getId() + marlep.getRoba().getId() + marlep.getLot().getId() + marlep.getPakovanje().getId());
		if(mip.getSmer().equals("ulaz")) {
			marlep.setStanje(marlep.getStanje() + mip.getKolicina());
			if(mip.getPodsmer() != null) {
				prom.setSmer(mip.getSmer() + " " + mip.getPodsmer());
			} else {
				prom.setSmer(mip.getSmer());
			}
		} else if(mip.getSmer().equals("izlaz")) {
			marlep.setStanje(marlep.getStanje() - mip.getKolicina());
			if(mip.getPodsmer() != null) {
				prom.setSmer(mip.getSmer() + " " + mip.getPodsmer());
			} else {
				prom.setSmer(mip.getSmer());	
			}
		} else if(mip.getSmer().equals("pakovanje")) {
			marlep.setStanje(marlep.getStanje() + mip.getKolicina());
			prom.setSmer(mip.getSmer() + " ulaz");
			
			Marlep rinfuzniMarlep = mrepo.nadjiRinfuz(marlep.getMagacin().getId(), marlep.getRoba().getId(), marlep.getLot().getId());
			rinfuzniMarlep.setStanje(rinfuzniMarlep.getStanje() - mip.getKolicina());
			
			Promena prome = new Promena();
			prome.setMarlep(rinfuzniMarlep);
			prome.setKolicina(mip.getKolicina());
			prome.setSmer(mip.getSmer() + " izlaz");
			if(mip.getDatum().equals("")) {
				prome.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));	
			} else {
				prome.setDatum(mip.getDatum());	
			}
			prome.setNovoStanje(rinfuzniMarlep.getStanje());
			prome.setNapomena(mip.getNapomena());
			mrepo.save(rinfuzniMarlep);
			logger.info("USPESNO->Datum:"+new SimpleDateFormat("yyyy-MM-dd").format(new Date())+
					"Smer:"+prome.getSmer()+" Kolicina"+prome.getKolicina()+ 
					" Novo stanje:"+rinfuzniMarlep.getStanje()+ 
					" Magacin:"+prome.getMarlep().getMagacin().getNaziv().toString() +
					" Pakovanje:" + prome.getMarlep().getPakovanje().getVrsta().toString()+ 
					" Roba:"+prome.getMarlep().getRoba().getVrsta().toString()+
					" Lot:"+prome.getMarlep().getLot().getNaziv().toString()+
					" Korisnik:"+u.getId());

			prepo.save(prome);
		}
		
		
		prom.setMarlep(marlep);
		prom.setKolicina(mip.getKolicina());		
		if(mip.getDatum().equals("")) {
			prom.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));	
		} else {
			prom.setDatum(mip.getDatum());	
		}
		prom.setNovoStanje(marlep.getStanje());
		prom.setNapomena(mip.getNapomena());
		mrepo.save(marlep);
		logger.info("USPESNO->Datum:"+new SimpleDateFormat("yyyy-MM-dd").format(new Date())+
				" Smer:"+prom.getSmer()+" Kolicina"+prom.getKolicina()+ 
				" Novo stanje:"+prom.getNovoStanje()+ 
				" Magacin:"+prom.getMarlep().getMagacin().getNaziv().toString() +
				" Pakovanje:" + prom.getMarlep().getPakovanje().getVrsta().toString()+ 
				" Roba:"+prom.getMarlep().getRoba().getVrsta().toString()+
				" Lot:"+prom.getMarlep().getLot().getNaziv().toString()+
				" Korisnik:"+u.getId());

		prepo.save(prom);
		
		return prom;
	}

	@Override
	public List<Promena> nadjiPromenePoMerilu(MerilDTO meril) throws ParseException {
		System.out.println("usao u service");
		List<Marlep> marlepi = new ArrayList<>();
		if(meril.getLotId() == 0) {
			if(meril.getPakovanjeId() == 0) {
				marlepi = mrepo.nadjiMarlepPoMeriluBezLota(meril.getMagacinId(), meril.getRobaId());
			} else {
				marlepi = mrepo.nadjiMarlepPoMeriluBezLotaSaPakovanjem(meril.getMagacinId(), meril.getRobaId(), meril.getPakovanjeId());
			}			
		} else {
			if(meril.getPakovanjeId() == 0) {
				marlepi = mrepo.nadjiMarlepPoMerilu(meril.getMagacinId(), meril.getRobaId(), meril.getLotId());
			} else {
				marlepi = mrepo.nadjiMarlepPoMeriluSaPakovanjem(meril.getMagacinId(), meril.getRobaId(), meril.getLotId(), meril.getPakovanjeId());
			}			
		}		
		
		List<Promena> promene = new ArrayList<>();
		System.out.println("meril PD" + meril.getpDatum()+"MERIL KDAT " + meril.getkDatum() + " M: " + meril.getMagacinId() + " R " + meril.getRobaId() + " L " + meril.getLotId());
		System.out.println("pred if");
		if(meril.getpDatum().equals("") && meril.getkDatum().equals("")) {
			System.out.println("NEMA DATUMA");
			for(Marlep m : marlepi) {
				List<Promena> prom = prepo.nadjiPromenePoMarlepu(m.getId());
				
				for(Promena p : prom) {
					if(meril.getSmer().equals("")) {
						promene.add(p);
					}else {
						if(p.getSmer().contains(meril.getSmer())) {
							promene.add(p);
						}
					}
				}
			}
		} else if(!meril.getpDatum().equals("") && meril.getkDatum().equals("")) {
			System.out.println("NEMA KDATUMA");
			Date pocetak = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getpDatum());
			for(Marlep m : marlepi) {
				List<Promena> prom = prepo.nadjiPromenePoMarlepu(m.getId());
				
				for(Promena p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0) {
						if(meril.getSmer().equals("")) {
							promene.add(p);
						}else {
							if(p.getSmer().contains(meril.getSmer())) {
								promene.add(p);
							}
						}
					}
				}
			}
		} else if(meril.getpDatum().equals("") && !meril.getkDatum().equals("")) {
			System.out.println("NEMA PATUMA");
			Date kraj = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getkDatum());
			for(Marlep m : marlepi) {
				List<Promena> prom = prepo.nadjiPromenePoMarlepu(m.getId());
				
				for(Promena p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(kraj.compareTo(pd) >= 0) {
						if(meril.getSmer().equals("")) {
							promene.add(p);
						}else {
							if(p.getSmer().contains(meril.getSmer())) {
								promene.add(p);
							}
						}
					}
				}
			}
		} else if(!meril.getpDatum().equals("") && !meril.getkDatum().equals("")) {
			System.out.println("IMA DATUMA");
			Date pocetak = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getpDatum());
			Date kraj = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getkDatum());
			for(Marlep m : marlepi) {
				List<Promena> prom = prepo.nadjiPromenePoMarlepu(m.getId());
				
				for(Promena p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0 && kraj.compareTo(pd) >= 0) {
						if(meril.getSmer().equals("")) {
							promene.add(p);
						}else {
							if(p.getSmer().contains(meril.getSmer())) {
								promene.add(p);
							}
						}
					}
				}
			}
		} else {
			System.out.println("ELSEEE`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		}
		
		
		return promene;
	}
	
	@Override
	public List<PromenaRepro> nadjiPromeneReproPoMerilu(MerilDTO meril) throws ParseException {
		System.out.println("usao u service");
		List<Marlep> marlepi = new ArrayList<>();
		List<Cemer> cemeri = new ArrayList<>();
		List<Pam> pamovi = new ArrayList<>();
		
		cemeri = crepo.nadjiCemerePoMagacinu(meril.getMagacinId());
		pamovi = pamrepo.nadjiPamovePoMagacinu(meril.getMagacinId());
		
		List<PromenaRepro> promene = new ArrayList<>();
		
		System.out.println("pred if");
		
		if(meril.getpDatum().equals("") && meril.getkDatum().equals("")) {
			System.out.println("NEMA DATUMA");
			for(Cemer c : cemeri) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoCemeru(c.getId());
				for(PromenaRepro p : prom) {
					promene.add(p);
				}
			}
			
			for(Pam c : pamovi) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoPamu(c.getId());
				for(PromenaRepro p : prom) {
					promene.add(p);
				}
			}
		} else if(!meril.getpDatum().equals("") && meril.getkDatum().equals("")) {
			System.out.println("NEMA KDATUMA");
			Date pocetak = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getpDatum());
			for(Cemer c : cemeri) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoCemeru(c.getId());				
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0) {
						promene.add(p);
					}
				}
			}
			
			for(Pam c : pamovi) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoPamu(c.getId());				
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0) {
						promene.add(p);
					}
				}
			}
		} else if(meril.getpDatum().equals("") && !meril.getkDatum().equals("")) {
			System.out.println("NEMA PATUMA");
			Date kraj = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getkDatum());
			for(Cemer c : cemeri) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoCemeru(c.getId());
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(kraj.compareTo(pd) >= 0) {
						promene.add(p);
					}
				}
			}
			
			for(Pam c : pamovi) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoPamu(c.getId());
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(kraj.compareTo(pd) >= 0) {
						promene.add(p);
					}
				}
			}
		} else if(!meril.getpDatum().equals("") && !meril.getkDatum().equals("")) {
			System.out.println("IMA DATUMA");
			Date pocetak = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getpDatum());
			Date kraj = new SimpleDateFormat("yyyy-MM-dd").parse(meril.getkDatum());
			for(Cemer c : cemeri) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoCemeru(c.getId());
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0 && kraj.compareTo(pd) >= 0) {
						promene.add(p);
					}
				}
			}
			
			for(Pam c : pamovi) {
				List<PromenaRepro> prom = preprorepo.nadjiPromenePoPamu(c.getId());
				for(PromenaRepro p : prom) {
					Date pd = new SimpleDateFormat("yyyy-MM-dd").parse(p.getDatum());
					if(pocetak.compareTo(pd) <= 0 && kraj.compareTo(pd) >= 0) {
						promene.add(p);
					}
				}
			}
		} else {
			System.out.println("ELSEEE`~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
		}
		
		
		return promene;
	}
	
	

	@Override
	public List<Promena> nadjiPromenePoMarlepu(Marlep marlep) {
		return prepo.nadjiPromenePoMarlepu(marlep.getId());
	}

	@Override
	public List<Marlep> nadjiMarlepePoMagacinu(Long m) {
		return mrepo.nadjiMarlepePoMagacinu(m);
	}

	@Override
	public List<RobaIliUsluga> getujSveRobe() {
		return riurepo.findAll();
	}

	@Override
	public RobaIliUsluga napraviNovuRobu(String naziv) {
		RobaIliUsluga nr = new RobaIliUsluga();
		nr.setVrsta(naziv);
		riurepo.save(nr);
		System.out.println("IDDD " + nr.getId());
		mrepo.dodajNoveMarlepe(nr.getId());
		return nr;
	}

	@Override
	public Promena dodajNapomenu(DodavanjeNapomeneDTO a) {
		// TODO Auto-generated method stub
		Promena p = prepo.getOne(a.getId());
		p.setNapomena(a.getNapomena());
		return prepo.save(p);
		
	}
	
	@Override
	public PromenaRepro dodajNapomenuRepro(DodavanjeNapomeneDTO a) {
		// TODO Auto-generated method stub
		PromenaRepro p = preprorepo.getOne(a.getId());
		p.setNapomena(a.getNapomena());
		return preprorepo.save(p);
		
	}

	@Override
	public void unesiRepromaterijal(MarmekDTO m) {
		if(m.getMagacinPrenosId() == 0) {
			//ne radi se prenos	
			PromenaRepro prom = new PromenaRepro();
			prom.setKolicina(m.getKolicina());
			prom.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
			if(m.getOperacija().equals("plus")) {
				//radi se plus
				prom.setSmer("ulaz");
				if(m.getRobaId() == 0) {						// pam
					Pam pam = pamrepo.nadjiPam(m.getMagacinId(), m.getMaterijalId());
					if(m.getMaterijalId() >= 4) 				// mora biti int
						if(m.getKolicina() % 1 != 0)
							return;
					
					pam.setStanje(pam.getStanje() + m.getKolicina());
					
					prom.setPam(pam);
					prom.setNovoStanje(pam.getStanje());
					preprorepo.save(prom);
					
					pamrepo.save(pam);
				} else {										// cemer
					Cemer cemer = crepo.nadjiCemer(m.getMagacinId(), m.getRobaId(), m.getMaterijalId());
					cemer.setStanje(cemer.getStanje() + m.getKolicina());
					
					prom.setCemer(cemer);
					prom.setNovoStanje(cemer.getStanje());
					preprorepo.save(prom);
					
					crepo.save(cemer);
				}
				
			} else if(m.getOperacija().equals("minus")) {
				//radi se minus
				prom.setSmer("izlaz");
				if(m.getRobaId() == 0) {						// pam
					Pam pam = pamrepo.nadjiPam(m.getMagacinId(), m.getMaterijalId());
					if(m.getMaterijalId() >= 4) 				// mora biti int
						if(m.getKolicina() % 1 != 0)
							return;
					
					pam.setStanje(pam.getStanje() - m.getKolicina());
					
					prom.setPam(pam);
					prom.setNovoStanje(pam.getStanje());
					preprorepo.save(prom);
					
					pamrepo.save(pam);
				} else {										// cemer
					Cemer cemer = crepo.nadjiCemer(m.getMagacinId(), m.getRobaId(), m.getMaterijalId());
					cemer.setStanje(cemer.getStanje() - m.getKolicina());
					
					prom.setCemer(cemer);
					prom.setNovoStanje(cemer.getStanje());
					preprorepo.save(prom);
					
					crepo.save(cemer);
				}
			}
		} else {
			//radi se prenos
			if(m.getOperacija().equals("prenos")) {
				PromenaRepro prom = new PromenaRepro();
				prom.setKolicina(m.getKolicina());
				prom.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				prom.setSmer("prenos izlaz");
				
				PromenaRepro prome = new PromenaRepro();
				prome.setKolicina(m.getKolicina());
				prome.setDatum(new SimpleDateFormat("yyyy-MM-dd").format(new Date()));
				prome.setSmer("prenos ulaz");
				//radi se prenos
				if(m.getRobaId() == 0) {						// pam
					Pam pam = pamrepo.nadjiPam(m.getMagacinId(), m.getMaterijalId());
					Pam pam2 = pamrepo.nadjiPam(m.getMagacinPrenosId(), m.getMaterijalId());
					if(m.getMaterijalId() >= 4) 				// mora biti int
						if(m.getKolicina() % 1 != 0)
							return;
					
					pam.setStanje(pam.getStanje() - m.getKolicina());
					pam2.setStanje(pam2.getStanje() + m.getKolicina());
					
					prom.setPam(pam);
					prom.setNovoStanje(pam.getStanje());
					prome.setPam(pam2);
					prome.setNovoStanje(pam2.getStanje());
					preprorepo.save(prom);
					preprorepo.save(prome);
					
					pamrepo.save(pam);
					pamrepo.save(pam2);
				} else {										// cemer
					Cemer cemer = crepo.nadjiCemer(m.getMagacinId(), m.getRobaId(), m.getMaterijalId());
					Cemer cemer2 = crepo.nadjiCemer(m.getMagacinPrenosId(), m.getRobaId(), m.getMaterijalId());
					cemer.setStanje(cemer.getStanje() - m.getKolicina());
					cemer2.setStanje(cemer2.getStanje() + m.getKolicina());
					
					prom.setCemer(cemer);
					prom.setNovoStanje(cemer.getStanje());
					prome.setCemer(cemer2);
					prome.setNovoStanje(cemer2.getStanje());
					preprorepo.save(prom);
					preprorepo.save(prome);
					
					crepo.save(cemer);
					crepo.save(cemer2);
				}
			} 
		}
		
		
		
		return;
	}

	@Override
	public List<Pam> nadjiPamovePoMagacinu(Long m) {
		return pamrepo.nadjiPamovePoMagacinu(m);
	}

	@Override
	public List<Cemer> nadjiCemerePoMagacinu(Long m) {
		return crepo.nadjiCemerePoMagacinu(m);
	}

	@Override
	public List<Pasadz> getujSvePasadze() {
		return pasrepo.findAll();
	}
	
	@Override
	public List<Crevo> getujSvaCreva() {
		return crevorepo.findAll();
	}

	@Override
	public Double izvestajDetaljno(IzvestajDetaljnoDTO iz) {
		// TODO Auto-generated method stub
		return mrepo.izvestajDetaljno(iz.getMagacinId(), iz.getSmer()+ " ", iz.getDatum());
	}
	

}
