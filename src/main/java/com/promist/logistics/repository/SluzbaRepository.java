package com.promist.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Sluzba;

@Repository
public interface SluzbaRepository extends JpaRepository<Sluzba, Long> {

	
	
}
