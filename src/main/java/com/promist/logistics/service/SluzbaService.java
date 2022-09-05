package com.promist.logistics.service;

import java.util.List;

import com.promist.logistics.model.Sluzba;

public interface SluzbaService {
	
	Sluzba addNewSluzba(Sluzba s);

	List<Sluzba> getAllSluzba();
	
	

}
