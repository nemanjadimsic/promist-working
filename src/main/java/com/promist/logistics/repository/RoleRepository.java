package com.promist.logistics.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.promist.logistics.model.Role;
import com.promist.logistics.model.RoleName;


@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
	 Optional<Role> findByName(RoleName roleName);
}
