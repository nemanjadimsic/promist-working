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

import com.promist.logistics.dto.LotDTO;
import com.promist.logistics.model.Lot;
import com.promist.logistics.repository.LOTRepository;

@RestController
@RequestMapping("/api/lot/")
public class LOTController {
	
	@Autowired
	private LOTRepository lrepo;
	
	@GetMapping("all")
	@PreAuthorize("hasRole('ADMIN')")
	public ResponseEntity<List<LotDTO>> getAll() {
		List<LotDTO> temp = new ArrayList<LotDTO>();
		lrepo.findAll().forEach(l -> {
			temp.add(new LotDTO(l.getId(), l.getNaziv().toString()));
		});
		return new ResponseEntity<List<LotDTO>>(temp, HttpStatus.OK);
	}

}
