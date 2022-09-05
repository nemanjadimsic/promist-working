package com.promist.logistics.dto;

import java.util.HashMap;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@AllArgsConstructor
@NoArgsConstructor
@Data
public class RiPDTO {
	
	private String magacin;
	
	private String robaNaziv;
	
	private HashMap<String, Double> pakovanjaKolicine = new HashMap<String, Double>();

}
