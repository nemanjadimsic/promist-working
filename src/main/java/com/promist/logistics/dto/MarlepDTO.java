package com.promist.logistics.dto;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class MarlepDTO {
	
	private long magacinId;
	
	private long robaId;
	
	private long lotId;
	
	private String smer;
	
	private HashMap<Long, Double> promet = new HashMap<Long, Double>();
	
	private String napomena;
	
	private String datum;
	
	private String podsmer;

}
