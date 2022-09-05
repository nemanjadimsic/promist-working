package com.promist.logistics.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.promist.logistics.dto.RobaIliUslugaDTO;
import com.promist.logistics.service.RobaIliUslugaService;

@RestController
@RequestMapping("/api/roba/")
public class RobaIliUslugaController {

	@Autowired
	private RobaIliUslugaService rservice;
	
	@GetMapping("all")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<RobaIliUslugaDTO>> getAll() {
		List<RobaIliUslugaDTO> temp = new ArrayList<RobaIliUslugaDTO>();
		rservice.getAllRoba().forEach(r -> {
			temp.add(new RobaIliUslugaDTO(r.getId(), r.getVrsta().toString() ));
		});
		return new ResponseEntity<List<RobaIliUslugaDTO>>(temp, HttpStatus.OK);
	}
	
}
