package com.promist.logistics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Marlep;
import com.promist.logistics.model.Pam;

@Repository
public interface PamRepository extends JpaRepository<Pam, Long>{
	
	@Query(value = "select * from pam p where p.magacin_id = ?1 and p.pasadz_id = ?2",nativeQuery = true)
	Pam nadjiPam(Long m, Long p);	
	
	@Query(value = "select * from pam p where p.magacin_id = ?1",nativeQuery = true)
	List<Pam> nadjiPamovePoMagacinu(Long m);
}
