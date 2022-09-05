package com.promist.logistics.repository;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.promist.logistics.dto.IzvestajDetaljnoDTO;
import com.promist.logistics.model.Marlep;

@Repository
public interface MarlepRepository extends JpaRepository<Marlep, Long> {

	//@Modifying	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2 and m.lot_id = ?3 and m.pakovanje_id = ?4",nativeQuery = true)
	Marlep nadjiMarlep(Long m, Long r, Long l, Long p);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2 and m.lot_id = ?3",nativeQuery = true)
	List<Marlep> nadjiMarlepPoMerilu(Long m, Long r, Long l);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2 and m.lot_id = ?3 and m.pakovanje_id = ?4",nativeQuery = true)
	List<Marlep> nadjiMarlepPoMeriluSaPakovanjem(Long m, Long r, Long l, Long p);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2",nativeQuery = true)
	List<Marlep> nadjiMarlepPoMeriluBezLota(Long m, Long r);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2 and m.pakovanje_id = ?3",nativeQuery = true)
	List<Marlep> nadjiMarlepPoMeriluBezLotaSaPakovanjem(Long m, Long r, Long p);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1 and m.roba_id = ?2 and m.lot_id = ?3 and m.pakovanje_id = 6",nativeQuery = true)
	Marlep nadjiRinfuz(Long m, Long r, Long l);
	
	@Query(value = "select * from marlep m where m.magacin_id = ?1",nativeQuery = true)
	List<Marlep> nadjiMarlepePoMagacinu(Long m);
	
	@Modifying
	@Transactional
	@Query(value = "insert into marlep (magacin_id, roba_id, lot_id, pakovanje_id) SELECT  s.id, r.id, l.id, p.id from sluzba s, roba_ili_usluga r, lot l, pakovanje p where r.id = ?1",nativeQuery = true)
	void dodajNoveMarlepe(Long r);
	
	@Query(value = "SELECT SUM(p.kolicina) FROM promena p, marlep m WHERE p.smer LIKE %:smer% AND p.datum = :datum AND p.smer NOT LIKE '%pakovanje%' AND p.marlep_id = m.id AND m.magacin_id = :magacinId", nativeQuery = true)
	Double izvestajDetaljno(@Param("magacinId") long magacinId, @Param("smer") String smer, @Param("datum") String datum);
	
}
