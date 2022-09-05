package com.promist.logistics.dto;

import com.promist.logistics.model.Smer;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PromenaPoMeriluDTO {
	
	private Long id;

	private String magacinNaziv;
	
	private String robaNaziv;
	
	private String lotNaziv;
	
	private String pakovanjeNaziv;
	
	private String smer;
	
	private double kolicina;
	
	private String datum;
	
	private double novoStanje;
	
	private String napomena;
	
	
	
}
