package com.promist.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Lot;

@Repository
public interface LOTRepository extends JpaRepository<Lot, Long>{

}
