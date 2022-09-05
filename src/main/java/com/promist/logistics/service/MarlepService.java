package com.promist.logistics.service;

import java.text.ParseException;
import java.util.List;

import com.promist.logistics.dto.DodavanjeNapomeneDTO;
import com.promist.logistics.dto.IzvestajDetaljnoDTO;
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

public interface MarlepService {
	
	Promena obradiMiP(MiPDTO mip);
	List<Promena> nadjiPromenePoMerilu(MerilDTO meril) throws ParseException;
	List<Promena> nadjiPromenePoMarlepu(Marlep marlep);
	boolean imaNaStanju(Object marlepDTO);
	boolean imaNaStanjuRM(PakericaDTO p) throws NijeDeljivoException;
	List<Marlep> nadjiMarlepePoMagacinu(Long m);
	List<RobaIliUsluga> getujSveRobe();
	RobaIliUsluga napraviNovuRobu(String naziv);
	Promena dodajNapomenu(DodavanjeNapomeneDTO a);
	void unesiRepromaterijal(MarmekDTO m);
	Promena obradiPakericu(PakericaDTO p) throws NijeDeljivoException;
	List<Pam> nadjiPamovePoMagacinu(Long m);
	List<Cemer> nadjiCemerePoMagacinu(Long m);
	List<Pasadz> getujSvePasadze();
	List<Crevo> getujSvaCreva();
	Double izvestajDetaljno(IzvestajDetaljnoDTO iz);
	List<PromenaRepro> nadjiPromeneReproPoMerilu(MerilDTO meril) throws ParseException;
	PromenaRepro dodajNapomenuRepro(DodavanjeNapomeneDTO a);
}
