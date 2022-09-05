package com.promist.logistics.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
/** @pdOid 3dad24bc-2277-4250-a95e-a852f43a8d6d */
public class JedinicaMere {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;	
   /** @pdOid 677b924e-2eb7-4d66-8b21-09e4a57ef8e1 */
   private String naziv;
   /** @pdOid aa7af4f0-97a6-4814-91ef-ca601221f0bb */
   private String skraceniNaziv;
   
   /** @pdRoleInfo migr=no name=RobaIliUsluga assc=association20 mult=* side=A */
   @OneToMany
   public List<RobaIliUsluga> robaIliUsluga;

}