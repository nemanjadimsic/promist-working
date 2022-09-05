package com.promist.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.promist.logistics.model.Sluzba;
import com.promist.logistics.repository.SluzbaRepository;

@Service
public class SluzbaServiceImpl implements SluzbaService{
	
	@Autowired
	private SluzbaRepository srepo;

	@Override
	public Sluzba addNewSluzba(Sluzba s) {
		return srepo.save(s);
	}

	@Override
	public List<Sluzba> getAllSluzba() {
		return srepo.findAll();
	}

}
