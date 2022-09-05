package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PromenaReproDTO {
	
	private Long id;

	private String magacinNaziv;
	
	private String robaNaziv;
	
	private String materijalNaziv;
	
	private String smer;
	
	private double kolicina;
	
	private String datum;
	
	private double novoStanje;

}
