package com.promist.logistics.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.promist.logistics.dto.SluzbaDTO;
import com.promist.logistics.model.Sluzba;
import com.promist.logistics.service.SluzbaService;


@RestController
@RequestMapping("/api/magacin/")
public class SluzbaController {
	
	@Autowired
	private SluzbaService sservice;
	
    @PostMapping("new")
	@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<Sluzba> addNewSluzba(@RequestBody Sluzba s) {
    		return new ResponseEntity<Sluzba>(sservice.addNewSluzba(s), HttpStatus.CREATED);
    }
    
    @GetMapping("all")
	@PreAuthorize("hasRole('ADMIN')")
    public ResponseEntity<List<SluzbaDTO>> getAllSluzba() {
    	List<SluzbaDTO> temp = new ArrayList<SluzbaDTO>();
    	sservice.getAllSluzba().forEach(sluzba -> {
    		temp.add((new SluzbaDTO(sluzba.getId(), sluzba.getNaziv().toString())));
    	});
    	return new ResponseEntity<List<SluzbaDTO>>(temp, HttpStatus.OK);
    }
	
}
