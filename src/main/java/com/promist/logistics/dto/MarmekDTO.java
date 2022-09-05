package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MarmekDTO {
	
	private long magacinId;
	
	private long magacinPrenosId;
	
	private String operacija;
	
	private long robaId;
	
	private long materijalId;
	
	private double kolicina;

}
