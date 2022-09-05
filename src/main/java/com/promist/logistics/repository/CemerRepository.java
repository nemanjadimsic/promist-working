package com.promist.logistics.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Cemer;

@Repository
public interface CemerRepository extends JpaRepository<Cemer, Long> {
	
	@Query(value = "select * from cemer c where c.magacin_id = ?1 and c.roba_id = ?2 and c.crevo_id = ?3",nativeQuery = true)
	Cemer nadjiCemer(Long m, Long r, Long c);
	
	@Query(value = "select * from cemer c where c.magacin_id = ?1",nativeQuery = true)
	List<Cemer> nadjiCemerePoMagacinu(Long m);
	
	@Modifying
	@Transactional
	@Query(value = "insert into cemer (magacin_id, roba_id, crevo_id) select s.id, r.id, c.id  from sluzba s, roba_ili_usluga r, crevo c where r.id = ?1", nativeQuery =true)
	void kreirajCemere(Long robaid);
}
