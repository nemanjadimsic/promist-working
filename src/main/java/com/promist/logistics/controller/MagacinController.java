package com.promist.logistics.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.promist.logistics.model.JedinicaMere;


@RestController
@RequestMapping("/api/magacin/")
public class MagacinController {
	
    @GetMapping("test")
    public ResponseEntity<JedinicaMere> test() {
    		return new ResponseEntity<JedinicaMere>(new JedinicaMere(1,"Nemanja","ND",null), HttpStatus.OK);
    }
	
}
