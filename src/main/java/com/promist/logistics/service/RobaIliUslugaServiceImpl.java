package com.promist.logistics.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.promist.logistics.model.RobaIliUsluga;
import com.promist.logistics.repository.RobaIliUslugaRepository;

@Service
public class RobaIliUslugaServiceImpl implements RobaIliUslugaService {

	@Autowired
	private RobaIliUslugaRepository rrepo;
	
	@Override
	public List<RobaIliUsluga> getAllRoba() {
		return rrepo.findAll();
	}

}
