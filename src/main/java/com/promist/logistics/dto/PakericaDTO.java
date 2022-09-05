package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class PakericaDTO {

	private long magacinId;
	
	private long lotId;
	
	private long izvorId;
	
	private long robaId;
	
	private long crevoId;
	
	private long pakovanjeId;
	
	private double kolicina;
	
	private String datum;
	
}
