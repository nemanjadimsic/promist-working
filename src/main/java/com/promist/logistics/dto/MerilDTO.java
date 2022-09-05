package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


public class MerilDTO {		// Magacin Roba Lot
	
	private long magacinId;
	
	private long robaId;
	
	private long lotId;
	
	private String pDatum;
	
	private String kDatum;
	
	private long pakovanjeId;
	
	private String smer;

	public MerilDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public MerilDTO(long magacinId, long robaId, long lotId, String pDatum, String kDatum, long pakovanjeId,
			String smer) {
		super();
		this.magacinId = magacinId;
		this.robaId = robaId;
		this.lotId = lotId;
		this.pDatum = pDatum;
		this.kDatum = kDatum;
		this.pakovanjeId = pakovanjeId;
		this.smer = smer;
	}

	public long getMagacinId() {
		return magacinId;
	}

	public void setMagacinId(long magacinId) {
		this.magacinId = magacinId;
	}

	public long getRobaId() {
		return robaId;
	}

	public void setRobaId(long robaId) {
		this.robaId = robaId;
	}

	public long getLotId() {
		return lotId;
	}

	public void setLotId(long lotId) {
		this.lotId = lotId;
	}

	public String getpDatum() {
		return pDatum;
	}

	public void setpDatum(String pDatum) {
		this.pDatum = pDatum;
	}

	public String getkDatum() {
		return kDatum;
	}

	public void setkDatum(String kDatum) {
		this.kDatum = kDatum;
	}

	public long getPakovanjeId() {
		return pakovanjeId;
	}

	public void setPakovanjeId(long pakovanjeId) {
		this.pakovanjeId = pakovanjeId;
	}

	public String getSmer() {
		return smer;
	}

	public void setSmer(String smer) {
		this.smer = smer;
	}

}
