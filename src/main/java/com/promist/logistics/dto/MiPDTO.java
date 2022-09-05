package com.promist.logistics.dto;

import com.promist.logistics.model.Smer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MiPDTO {	// Marlep i Promena
	
	private long magacinId;
	
	private long robaId;
	
	private long lotId;
	
	private long pakovanjeId;
	
	private double kolicina;
	
	private String smer;
	
	private String podsmer;
	
	private String napomena;
	
	private String datum;

}
