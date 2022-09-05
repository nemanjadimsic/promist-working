package com.promist.logistics.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.RobaIliUsluga;

@Repository
public interface RobaIliUslugaRepository extends JpaRepository<RobaIliUsluga, Long> {

}
