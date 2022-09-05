package com.promist.logistics.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class PromenaRepro {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

	private String smer;
	
	private double kolicina;
	
	private String datum;
	
	private double novoStanje;
	
	private String napomena;
	
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private Cemer cemer;
	
	@ManyToOne(optional = true, fetch = FetchType.LAZY)
	private Pam pam;
	

}
