package com.promist.logistics.dto;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class CiRPDTO {
	
	private String crevo;
	
	private HashMap<String, Double> robeStanja = new HashMap<String, Double>();
	
	private HashMap<String, Double> pasadzStanja = new HashMap<String, Double>();

}
