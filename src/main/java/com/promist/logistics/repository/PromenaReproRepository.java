package com.promist.logistics.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.PromenaRepro;

@Repository
public interface PromenaReproRepository extends JpaRepository<PromenaRepro, Long> {
	
	@Query(value = "select * from promena_repro p where p.cemer_id = ?1",nativeQuery = true)
	List<PromenaRepro> nadjiPromenePoCemeru(Long m);
	
	@Query(value = "select * from promena_repro p where p.pam_id = ?1",nativeQuery = true)
	List<PromenaRepro> nadjiPromenePoPamu(Long m);

}
