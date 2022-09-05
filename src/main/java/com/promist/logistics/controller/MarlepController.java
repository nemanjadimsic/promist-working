package com.promist.logistics.controller;

import java.io.File;
import java.io.IOException;
import java.math.BigDecimal;
import java.math.RoundingMode;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.text.ParseException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;

import org.apache.poi.EncryptedDocumentException;
import org.apache.poi.openxml4j.exceptions.InvalidFormatException;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.DataFormatter;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.ss.usermodel.WorkbookFactory;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.promist.logistics.dto.AzuriranjeCrevaDTO;
import com.promist.logistics.dto.AzuriranjePaleteDTO;
import com.promist.logistics.dto.CiRPDTO;
import com.promist.logistics.dto.DodavanjeNapomeneDTO;
import com.promist.logistics.dto.ExcelIzvozDTO;
import com.promist.logistics.dto.IzmenaStanjaDTO;
import com.promist.logistics.dto.IzvestajDetaljnoDTO;
import com.promist.logistics.dto.MarlepDTO;
import com.promist.logistics.dto.MarmekDTO;
import com.promist.logistics.dto.MerilDTO;
import com.promist.logistics.dto.MiPDTO;
import com.promist.logistics.dto.PakericaDTO;
import com.promist.logistics.dto.PromenaDTO;
import com.promist.logistics.dto.PromenaPoMeriluDTO;
import com.promist.logistics.dto.PromenaReproDTO;
import com.promist.logistics.dto.RiPDTO;
import com.promist.logistics.dto.RobaIliUslugaDTO;
import com.promist.logistics.dto.SluzbaDTO;
import com.promist.logistics.dto.TrenutnoStanjeDTO;
import com.promist.logistics.exception.NijeDeljivoException;
import com.promist.logistics.model.Cemer;
import com.promist.logistics.model.Crevo;
import com.promist.logistics.model.Marlep;
import com.promist.logistics.model.Pam;
import com.promist.logistics.model.Promena;
import com.promist.logistics.model.PromenaRepro;
import com.promist.logistics.model.RobaIliUsluga;
import com.promist.logistics.model.Sluzba;
import com.promist.logistics.model.User;
import com.promist.logistics.model.VrstaPakovanja;
import com.promist.logistics.repository.CemerRepository;
import com.promist.logistics.repository.MarlepRepository;
import com.promist.logistics.repository.PamRepository;
import com.promist.logistics.repository.RobaIliUslugaRepository;
import com.promist.logistics.repository.SluzbaRepository;
import com.promist.logistics.repository.UserRepository;
import com.promist.logistics.service.MarlepService;

@RestController
@RequestMapping("/api/marlep/")
public class MarlepController {
	
	private static final Logger logger = LoggerFactory.getLogger(MarlepController.class);
	
	@Autowired
	private MarlepService mservice;	
	
	@Autowired
	private SluzbaRepository sluzbarepo;
	
	@Autowired
	private MarlepRepository marleprepo;
	
	@Autowired
	private CemerRepository crepo;
	
	@Autowired
	private PamRepository prepo;
	
	@Autowired
	private UserRepository urepo;
	
	@Autowired
	private RobaIliUslugaRepository rurepo;
	
	@PostMapping("unesiPromenu")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> unesiPromene(@RequestBody MarlepDTO marlepDTO) throws NijeDeljivoException {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		List<PromenaDTO> promene = new ArrayList<>();
		if(marlepDTO != null) {
			if(mservice.imaNaStanju(marlepDTO)) {
				for(Long i : marlepDTO.getPromet().keySet()) {
					if(marlepDTO.getPromet().get(i) > 0) {
						MiPDTO mip = new MiPDTO();
						mip.setMagacinId(marlepDTO.getMagacinId());
						mip.setRobaId(marlepDTO.getRobaId());
						mip.setLotId(marlepDTO.getLotId());
						mip.setPakovanjeId(i);
						mip.setKolicina(marlepDTO.getPromet().get(i));
						mip.setSmer(marlepDTO.getSmer());
						mip.setNapomena(marlepDTO.getNapomena());
						mip.setDatum(marlepDTO.getDatum());
						mip.setPodsmer(marlepDTO.getPodsmer());
//						System.out.println("USERCINA: " + u.getEmail() + " " + u.getName() + " " + u.getId());
						Promena p = mservice.obradiMiP(mip);
						logger.info("USPESNO->Datum:"+p.getDatum()+
								"Smer:"+p.getSmer()+" Kolicina"+p.getKolicina()+ 
								" Novo stanje:"+p.getNovoStanje()+ 
								" Magacin:"+p.getMarlep().getMagacin().getNaziv().toString() +
								" Pakovanje:" + p.getMarlep().getPakovanje().getVrsta().toString()+ 
								" Roba:"+p.getMarlep().getRoba().getVrsta()+
								" Lot:"+p.getMarlep().getLot().getNaziv().toString()+
								" Korisnik:"+u.getId());
						promene.add(new PromenaDTO(p));
					}					
				}
				
				return new ResponseEntity<List<PromenaDTO>>(promene, HttpStatus.OK);
			} else {
				throw new NijeDeljivoException("Nema dovoljno robe na stanju za odabrane parametre.");
			}
		}
		
		return null;
	}
	
	@PostMapping("ulazRepromaterijala")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<MarmekDTO> ulazRMaterijala(@RequestBody MarmekDTO mDTO) {
		if(mDTO != null) {
			mservice.unesiRepromaterijal(mDTO);
			
			return new ResponseEntity<MarmekDTO>(mDTO, HttpStatus.OK);
		}
		
		return null;
	}
	
	@PostMapping("pakovanje")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<?> pakovanje(@RequestBody PakericaDTO pDTO) throws NijeDeljivoException {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		if(pDTO != null) {
			if(mservice.imaNaStanju(pDTO)) {
				try {
					boolean ima = mservice.imaNaStanjuRM(pDTO);
					if(ima) {
						Promena p;
						try {
							p = mservice.obradiPakericu(pDTO);
							logger.info("USPESNO->Datum:"+p.getDatum()+
									"Smer:"+p.getSmer()+" Kolicina"+p.getKolicina()+ 
									" Novo stanje:"+p.getNovoStanje()+ 
									" Magacin:"+p.getMarlep().getMagacin().getNaziv().toString() +
									" Pakovanje:" + p.getMarlep().getPakovanje().getVrsta().toString()+ 
									" Roba:"+p.getMarlep().getRoba().getVrsta()+
									" Lot:"+p.getMarlep().getLot().getNaziv().toString()+
									" Korisnik:"+u.getId());
							
							return new ResponseEntity<PromenaDTO>(new PromenaDTO(p), HttpStatus.OK);
						} catch (NijeDeljivoException e) {
							// TODO Auto-generated catch block
							e.printStackTrace();
							return new ResponseEntity<Exception>(e, HttpStatus.BAD_REQUEST);
							
						}
				
						
					} else {
						throw new NijeDeljivoException("Nema dovoljno repromaterijala za pakovanje.");
					}
				} catch(NijeDeljivoException e) {
					e.printStackTrace();
					return new ResponseEntity<Exception>(e, HttpStatus.BAD_REQUEST);
				}
			
			} else {
				throw new NijeDeljivoException("Nema dovoljno robe na stanju za pakovanje.");
			}
		}
		
		return null;
	}
	
	@PostMapping("izvestajDetaljno")
	@PreAuthorize("hasRole('ADMIN')")
	public Double izvestajDetaljno(@RequestBody IzvestajDetaljnoDTO iz) {
		if(iz != null) {
			return mservice.izvestajDetaljno(iz);
		} return null;
	}
	
	@PostMapping("dobavistanje")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<IzmenaStanjaDTO> dobaviStanje(@RequestBody TrenutnoStanjeDTO o) {
		Marlep m = marleprepo.nadjiMarlep(o.getMagacinId(), o.getRobaId(), o.getLotId(), o.getPakovanjeId());
		IzmenaStanjaDTO iz = new IzmenaStanjaDTO(m.getId(), m.getStanje());
		return new ResponseEntity<IzmenaStanjaDTO>(iz, HttpStatus.OK);
	}
	
	@PostMapping("azurirajstanje")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<Object> azurirajStanje(@RequestBody IzmenaStanjaDTO o) {
		Marlep m = marleprepo.getOne(o.getId());
		m.setStanje(o.getNovostanje());
		marleprepo.save(m);

		return new ResponseEntity<Object>(null, HttpStatus.OK);
	}
	
	@PostMapping("promeneMeril")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<PromenaPoMeriluDTO>> dobaviPromenePoMerilu(@RequestBody MerilDTO meril) throws ParseException {
		if(meril != null) {
			List<PromenaPoMeriluDTO> ppmDTO = new ArrayList<>();
			List<Promena> promene = mservice.nadjiPromenePoMerilu(meril);
			
			for(Promena p : promene) {
				PromenaPoMeriluDTO ppm = new PromenaPoMeriluDTO();
				ppm.setMagacinNaziv(p.getMarlep().getMagacin().getNaziv().toString());
				ppm.setId(p.getId());
				ppm.setRobaNaziv(p.getMarlep().getRoba().getVrsta());
				ppm.setLotNaziv(p.getMarlep().getLot().getNaziv().toString());
				ppm.setPakovanjeNaziv(p.getMarlep().getPakovanje().getVrsta().toString());
				ppm.setKolicina(round(p.getKolicina(),2));
				ppm.setSmer(p.getSmer());
				ppm.setDatum(p.getDatum());
				ppm.setNovoStanje(round(p.getNovoStanje(),2));
				ppm.setNapomena(p.getNapomena());
				ppmDTO.add(ppm);
			}
			
			return new ResponseEntity<List<PromenaPoMeriluDTO>>(ppmDTO, HttpStatus.OK);
		}
		
		return null;
	}
	
	@PostMapping("promeneRepro")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<PromenaReproDTO>> dobaviPromeneRepro(@RequestBody MerilDTO meril) throws ParseException {
		if(meril != null) {
			List<PromenaReproDTO> prDTO = new ArrayList<>();
			List<PromenaRepro> promene = mservice.nadjiPromeneReproPoMerilu(meril);
			
			for(PromenaRepro p : promene) {
				PromenaReproDTO pr = new PromenaReproDTO();
				if(p.getCemer() != null) {
					pr.setMagacinNaziv(p.getCemer().getMagacin().getNaziv().toString());
					pr.setRobaNaziv(p.getCemer().getRoba().getVrsta().toString());
					pr.setMaterijalNaziv(p.getCemer().getCrevo().toString());
				} else if(p.getPam() != null){
					pr.setMagacinNaziv(p.getPam().getMagacin().getNaziv().toString());
					pr.setMaterijalNaziv(p.getPam().getPasadz().toString());
				}
				pr.setDatum(p.getDatum());
				pr.setId(p.getId());
				pr.setKolicina(p.getKolicina());
				pr.setNovoStanje(p.getNovoStanje());
				pr.setSmer(p.getSmer());
				prDTO.add(pr);
			}
			
			return new ResponseEntity<List<PromenaReproDTO>>(prDTO, HttpStatus.OK);
		}
		
		return null;
	}
	
	@PostMapping("azuriranjecreva")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> azuriranjecreva(@RequestBody AzuriranjeCrevaDTO ob) {
		Cemer c = crepo.nadjiCemer(ob.getMagacinId(), ob.getRobaId(), ob.getCrevoId());
		c.setStanje(ob.getNovostanje());
		crepo.save(c);
		return new ResponseEntity<String>(new String("Uspesno"), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("azuriranjepalete")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<String> azuriranjepalete(@RequestBody AzuriranjePaleteDTO ob) {
		Pam p = prepo.nadjiPam(ob.getMagacinId(), ob.getPaletaId());
		p.setStanje(ob.getNovostanje());
		prepo.save(p);
		return new ResponseEntity<String>(new String("Uspesno"), HttpStatus.ACCEPTED);
	}
	
	@PostMapping("lagersvimagacini")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<RiPDTO>> prikazZaSveMagacine(@RequestBody List<SluzbaDTO> sluzbasdto) {
		List<Sluzba> sviMagacini = new ArrayList<Sluzba>();
		for(SluzbaDTO sdto : sluzbasdto) {
			Sluzba s2add = sluzbarepo.getOne(sdto.getItem_id());
			sviMagacini.add(s2add);
		}
		List<RiPDTO> ripovi2return = new ArrayList<>();
		for(Sluzba sluzba : sviMagacini) {
			List<Marlep> marlepi = mservice.nadjiMarlepePoMagacinu(sluzba.getId());
			if(marlepi != null) {
				List<RiPDTO> ripovi = new ArrayList<>();
				
				for(RobaIliUsluga vdj : mservice.getujSveRobe()) {
					RiPDTO rip = new RiPDTO();
					rip.setMagacin(sluzbarepo.getOne(sluzba.getId()).getNaziv().toString());
					rip.setRobaNaziv(vdj.getVrsta());
					for(VrstaPakovanja vp : VrstaPakovanja.values()) {
						rip.getPakovanjaKolicine().put(vp.toString(), (double) 0);
					}
					ripovi.add(rip);
				}			
				
				for(Marlep m : marlepi) {
					for(RiPDTO r : ripovi) {
						if(r.getRobaNaziv().equals(m.getRoba().getVrsta().toString())) {
							for(String s : r.getPakovanjaKolicine().keySet()) {
								if(s.equals(m.getPakovanje().getVrsta().toString())) {
									r.getPakovanjaKolicine().put(s, round(r.getPakovanjaKolicine().get(s) + m.getStanje(), 2));
								}
							}
						}
					}
				}
				
				for(RiPDTO rip2add : ripovi) {
					ripovi2return.add(rip2add);	
				}
			}
		}
		return new ResponseEntity<List<RiPDTO>>(ripovi2return, HttpStatus.OK);
		}
	
	@GetMapping("lager/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<RiPDTO>> prikaziLagerMagacina(@PathVariable Long id) {
		List<Marlep> marlepi = mservice.nadjiMarlepePoMagacinu(id);
		if(marlepi != null) {
			List<RiPDTO> ripovi = new ArrayList<>();
			
			for(RobaIliUsluga vdj : mservice.getujSveRobe()) {
				RiPDTO rip = new RiPDTO();
				rip.setMagacin(sluzbarepo.getOne(id).getNaziv().toString());
				rip.setRobaNaziv(vdj.getVrsta());
				for(VrstaPakovanja vp : VrstaPakovanja.values()) {
					rip.getPakovanjaKolicine().put(vp.toString(), (double) 0);
				}
				ripovi.add(rip);
			}			
			
			for(Marlep m : marlepi) {
				for(RiPDTO r : ripovi) {
					if(r.getRobaNaziv().equals(m.getRoba().getVrsta().toString())) {
						for(String s : r.getPakovanjaKolicine().keySet()) {
							if(s.equals(m.getPakovanje().getVrsta().toString())) {
								r.getPakovanjaKolicine().put(s, round(r.getPakovanjaKolicine().get(s) + m.getStanje(), 2));
							}
						}
					}
				}
			}
			
			
			return new ResponseEntity<List<RiPDTO>>(ripovi, HttpStatus.OK);
		}
		
		return null;
	}
	
	@GetMapping("lagerMaterijala/{id}")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<CiRPDTO>> prikaziLagerRMaterijala(@PathVariable Long id) {
		List<Pam> pamovi = mservice.nadjiPamovePoMagacinu(id);
		List<Cemer> cemeri = mservice.nadjiCemerePoMagacinu(id);
		if(pamovi != null && cemeri != null) {
			List<CiRPDTO> cirpovi = new ArrayList<>();
			
			CiRPDTO c1 = new CiRPDTO();
			c1.setCrevo("");			
			
			for(Pam p : pamovi) {
				c1.getPasadzStanja().put(p.getPasadz().getNaziv(), p.getStanje());
			}
			cirpovi.add(c1);
			
			for(Crevo cr : mservice.getujSvaCreva()) {
				CiRPDTO cirp = new CiRPDTO();
				cirp.setCrevo(cr.getNaziv());
				for(Cemer c : cemeri) {
					if(c.getCrevo().getNaziv().equals(cirp.getCrevo())) {
						cirp.getRobeStanja().put(c.getRoba().getVrsta(), round(c.getStanje(),2));
					}					
				}
				cirpovi.add(cirp);
			}			
			
			return new ResponseEntity<List<CiRPDTO>>(cirpovi, HttpStatus.OK);
		}
		
		return null;
	}
	
	@GetMapping("lager")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<RiPDTO>> prikaziLager() {
		List<Marlep> marlepi = marleprepo.findAll();
		if(marlepi != null) {
			List<RiPDTO> ripovi = new ArrayList<>();
			
			for(RobaIliUsluga vdj : mservice.getujSveRobe()) {
				RiPDTO rip = new RiPDTO();
				rip.setMagacin("");
				rip.setRobaNaziv(vdj.getVrsta());
				for(VrstaPakovanja vp : VrstaPakovanja.values()) {
					rip.getPakovanjaKolicine().put(vp.toString(), (double) 0);
				}
				ripovi.add(rip);
			}			
			
			for(Marlep m : marlepi) {
				for(RiPDTO r : ripovi) {
					if(r.getRobaNaziv().equals(m.getRoba().getVrsta().toString())) {
						for(String s : r.getPakovanjaKolicine().keySet()) {
							if(s.equals(m.getPakovanje().getVrsta().toString())) {
								r.getPakovanjaKolicine().put(s, round(r.getPakovanjaKolicine().get(s) + m.getStanje(),2));
							}
						}
					}
				}
			}
			ArrayList<RiPDTO> toRemove = new ArrayList<RiPDTO>();
			for(RiPDTO rips : ripovi) {
				System.out.println(rips.getRobaNaziv());
				double sumica = 0;
				Iterator it = rips.getPakovanjaKolicine().entrySet().iterator();
			    while (it.hasNext()) {
			        Map.Entry pair = (Map.Entry)it.next();
			        System.out.println(pair.getKey().toString() + " : " + pair.getValue().toString());
			        sumica += (double) pair.getValue();
			       // it.remove();
			    }
			    System.out.println("suma: " + sumica);
			    System.out.println("==============");
			    if(sumica == 0) {
			    	ripovi.remove(rips);
			    }
			}
			System.out.println(ripovi.size() +  "size posle");
			
			
			return new ResponseEntity<List<RiPDTO>>(ripovi, HttpStatus.OK);
		}
		
		return null;
	}
	
	public static double round(double value, int places) {
	    if (places < 0) throw new IllegalArgumentException();

	    BigDecimal bd = BigDecimal.valueOf(value);
	    bd = bd.setScale(places, RoundingMode.HALF_UP);
	    return bd.doubleValue();
	}
	
	@PostMapping("dodajDjubrivo")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<RobaIliUslugaDTO> napraviNovuRobu(@RequestBody String naziv) {
		if(naziv != "") {
			RobaIliUsluga roba = mservice.napraviNovuRobu(naziv);
			crepo.kreirajCemere(roba.getId());
			logger.info("USPESNO DODATO Novo Djubrivo sa Nazivom: " + naziv);
			RobaIliUslugaDTO rDTO = new RobaIliUslugaDTO();
			rDTO.setId(roba.getId());
			rDTO.setNaziv(roba.getVrsta());
			
			return new ResponseEntity<RobaIliUslugaDTO>(rDTO, HttpStatus.OK);
		}
		
		return null;
	}
	
	
	@PostMapping("dodajNapomenu")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<PromenaPoMeriluDTO> dodajNapomenu(@RequestBody DodavanjeNapomeneDTO a) {
		
		Promena p = mservice.dodajNapomenu(a);
		PromenaPoMeriluDTO ppm = new PromenaPoMeriluDTO();
		ppm.setMagacinNaziv(p.getMarlep().getMagacin().getNaziv().toString());
		ppm.setId(p.getId());
		ppm.setRobaNaziv(p.getMarlep().getRoba().getVrsta());
		ppm.setLotNaziv(p.getMarlep().getLot().getNaziv().toString());
		ppm.setPakovanjeNaziv(p.getMarlep().getPakovanje().getVrsta().toString());
		ppm.setKolicina(p.getKolicina());
		ppm.setSmer(p.getSmer());
		ppm.setDatum(p.getDatum());
		ppm.setNovoStanje(p.getNovoStanje());
		ppm.setNapomena(p.getNapomena());
		
		
		return new ResponseEntity<PromenaPoMeriluDTO>(ppm, HttpStatus.OK);
	}
	
	@PostMapping("dodajNapomenuRepro")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<PromenaPoMeriluDTO> dodajNapomenuRepro(@RequestBody DodavanjeNapomeneDTO a) {
		
		Promena p = mservice.dodajNapomenu(a);
		PromenaPoMeriluDTO ppm = new PromenaPoMeriluDTO();
		ppm.setMagacinNaziv(p.getMarlep().getMagacin().getNaziv().toString());
		ppm.setId(p.getId());
		ppm.setRobaNaziv(p.getMarlep().getRoba().getVrsta());
		ppm.setLotNaziv(p.getMarlep().getLot().getNaziv().toString());
		ppm.setPakovanjeNaziv(p.getMarlep().getPakovanje().getVrsta().toString());
		ppm.setKolicina(p.getKolicina());
		ppm.setSmer(p.getSmer());
		ppm.setDatum(p.getDatum());
		ppm.setNovoStanje(p.getNovoStanje());
		ppm.setNapomena(p.getNapomena());
		
		
		return new ResponseEntity<PromenaPoMeriluDTO>(ppm, HttpStatus.OK);
	}
	
	
	private String fileLocation;
	
	@PostMapping("parseExcel")
	public ResponseEntity<List<ExcelIzvozDTO>> uploadFile(@RequestParam("file") MultipartFile file) throws IOException, EncryptedDocumentException, InvalidFormatException, ParseException {
		User u = urepo.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
		Path filepath = Paths.get("src/main/resources/", file.getOriginalFilename());
		file.transferTo(filepath);
		 List<ExcelIzvozDTO> promene = new ArrayList<>();
		File f = new File("src/main/resources/"+file.getOriginalFilename());
	    Workbook workbook = WorkbookFactory.create(f);
	    

        Sheet sheet = workbook.getSheetAt(0);
        long magaid = -1;

        DataFormatter dataFormatter = new DataFormatter();
        RobaIliUsluga r = null;
        long iddrobe = -1;
        System.out.println("\n\nIteracije\n");
        Iterator<Row> rowIterator = sheet.rowIterator();
        while (rowIterator.hasNext()) {
            Row row = rowIterator.next();
            MarlepDTO marlepDTO = new MarlepDTO();
            
            Iterator<Cell> cellIterator = row.cellIterator();
            String napomena = dataFormatter.formatCellValue((Cell)cellIterator.next());
            String nazivRobe = dataFormatter.formatCellValue((Cell)cellIterator.next());
            String kolicina = dataFormatter.formatCellValue((Cell)cellIterator.next());
            String pakovanje = dataFormatter.formatCellValue((Cell)cellIterator.next());
            String lot = dataFormatter.formatCellValue((Cell)cellIterator.next());
            String magacin =dataFormatter.formatCellValue((Cell)cellIterator.next());
            marlepDTO.setNapomena(napomena);
            marlepDTO.setLotId(Integer.parseInt(lot));
            marlepDTO.setSmer("izlaz");
            
            ExcelIzvozDTO a = new ExcelIzvozDTO();
            a.setKolicina(kolicina);
            a.setLot(lot);
            a.setMagacin(magacin);
            a.setNazivRobe(nazivRobe);
            a.setNapomena(napomena);
            a.setSmer("izlaz");
            a.setPakovanje(pakovanje);
            promene.add(a);
            mservice.getujSveRobe().forEach(roba-> {
            	if(roba.getVrsta().toString().equals(nazivRobe)) {
            		marlepDTO.setRobaId(roba.getId());

            	}
            });
            long pid = -1;
            switch(pakovanje) {
            case "25/1":
              pid = 1;
              break;
            case "50/1":
              pid = 2;
              break;
            case "500/1":
              pid = 3;
              break;
            case "600/1":
              pid = 4;
              break;
            case "1000/1":
              pid = 5;
              break;
            case "rinfuza":
              pid = 6;
              break;
            case "VANSTANDARDNO":
              pid = 7;
              break;
            default:
              // code block
          }
            HashMap<Long,Double > promet = new HashMap<Long, Double>();
            promet.put(pid,(double) Integer.parseInt(kolicina));
            marlepDTO.setPromet(promet);
            iddrobe = marlepDTO.getRobaId();
            switch(magacin) {
            case "Privrednikova 6, Novi Sad":
            	magaid = 1;
            	break;
            case "Ribarska 3, Novi Sad":
            	magaid = 2;
            	break;
            case "Kulski put 2, Vrbas":
            	magaid = 3;
            	break;
            case "Prvomajska 10, Pančevo":
            	magaid = 4;
            	break;
            case "Donji Matej bb, Sremski Karlovci":
            	magaid = 5;
            	break;
            case "Uslužni magacin, Novi Sad":
            	magaid = 6;
            	break;
            case "Uslužni magacin, Pančevo":
            	magaid = 7;
            	break;
            default: 
            	// code blok
            }
            marlepDTO.setMagacinId(magaid);
            System.out.println(marlepDTO.toString());
           
    		if(marlepDTO != null) {
    			if(mservice.imaNaStanju(marlepDTO)) {
    				for(Long i : marlepDTO.getPromet().keySet()) {
    					if(marlepDTO.getPromet().get(i) > 0) {
    						MiPDTO mip = new MiPDTO();
    						mip.setMagacinId(marlepDTO.getMagacinId());
    						mip.setRobaId(marlepDTO.getRobaId());
    						mip.setLotId(marlepDTO.getLotId());
    						mip.setPakovanjeId(i);
    						mip.setKolicina(marlepDTO.getPromet().get(i));
    						mip.setSmer(marlepDTO.getSmer());
    						mip.setNapomena(marlepDTO.getNapomena());
    						
    						Promena p = mservice.obradiMiP(mip);
    						logger.info("USPESNO->Datum:"+p.getDatum()+
    								"Smer:"+p.getSmer()+" Kolicina"+p.getKolicina()+ 
    								" Novo stanje:"+p.getNovoStanje()+ 
    								" Magacin:"+p.getMarlep().getMagacin().getNaziv().toString() +
    								" Pakovanje:" + p.getMarlep().getPakovanje().getVrsta().toString()+ 
    								" Roba:"+p.getMarlep().getRoba().getVrsta()+
    								" Lot:"+p.getMarlep().getLot().getNaziv().toString()+
    								" Korisnik:"+u.getId());
    						    					}					
    				}
    				
    				
    			}
    		}
    		
        }
        workbook.close();
        
		return new ResponseEntity<List<ExcelIzvozDTO>>(promene,HttpStatus.OK);
	}
	

}
