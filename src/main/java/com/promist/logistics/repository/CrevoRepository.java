package com.promist.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Crevo;

@Repository
public interface CrevoRepository extends JpaRepository<Crevo, Long> {

}
