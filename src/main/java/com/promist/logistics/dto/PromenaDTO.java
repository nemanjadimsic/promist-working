package com.promist.logistics.dto;

import com.promist.logistics.model.Promena;
import com.promist.logistics.model.Smer;

public class PromenaDTO {
	
	private long id;
	
	private String smer;
	
	private double kolicina;
	
	private long marlepId;
	
	private double novoStanje;
	
	private String datum;
	
	private String napomena;

	public PromenaDTO() {
		super();
		// TODO Auto-generated constructor stub
	}

	public PromenaDTO(long id, String smer, double kolicina, long marlepId, String datum, double ns, String nap) {
		super();
		this.id = id;
		this.smer = smer;
		this.kolicina = kolicina;
		this.marlepId = marlepId;
		this.datum = datum;
		this.novoStanje = ns;
		this.napomena = nap;
	}
	
	public PromenaDTO(Promena prom) {
		this.id = prom.getId();
		this.smer = prom.getSmer();
		this.kolicina = prom.getKolicina();
		this.marlepId = prom.getMarlep().getId();
		this.datum = prom.getDatum();
		this.novoStanje = prom.getNovoStanje();
		this.napomena = prom.getNapomena();
	}

	public String getDatum() {
		return datum;
	}

	public void setDatum(String datum) {
		this.datum = datum;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getSmer() {
		return smer;
	}

	public void setSmer(String smer) {
		this.smer = smer;
	}

	public double getKolicina() {
		return kolicina;
	}

	public void setKolicina(double kolicina) {
		this.kolicina = kolicina;
	}

	public long getMarlepId() {
		return marlepId;
	}

	public void setMarlepId(long marlepId) {
		this.marlepId = marlepId;
	}

	public double getNovoStanje() {
		return novoStanje;
	}

	public void setNovoStanje(double novoStanje) {
		this.novoStanje = novoStanje;
	}

	public String getNapomena() {
		return napomena;
	}

	public void setNapomena(String napomena) {
		this.napomena = napomena;
	}
	
	

}
