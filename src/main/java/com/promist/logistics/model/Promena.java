package com.promist.logistics.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
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
public class Promena {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;

	private String smer;
	
	private double kolicina;
	
	private String datum;
	
	private double novoStanje;
	
	@ManyToOne
	private Marlep marlep;
	
	private String napomena;

}
