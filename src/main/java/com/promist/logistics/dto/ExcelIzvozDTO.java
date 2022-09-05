package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class ExcelIzvozDTO {

	String napomena;
	String kolicina;
	String nazivRobe;
	String lot;
	String pakovanje;
	String magacin;
	String smer;
	
}
