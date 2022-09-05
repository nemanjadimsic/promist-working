package com.promist.logistics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Promena;

@Repository
public interface PromenaRepository extends JpaRepository<Promena, Long> {
	
	@Query(value = "select * from promena p where p.marlep_id = ?1",nativeQuery = true)
	List<Promena> nadjiPromenePoMarlepu(Long m);

}
