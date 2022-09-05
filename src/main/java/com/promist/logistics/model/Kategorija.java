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
@AllArgsConstructor
@NoArgsConstructor
@Data
/** @pdOid e19f30df-3d3d-4556-a121-2524544053f9 */
public class Kategorija {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;	
   /** @pdOid 73921346-0858-4bf0-9fb5-ef9bb999af04 */
   private int nazivKategorije;
   
   /** @pdRoleInfo migr=no name=RobaIliUsluga assc=association13 mult=* side=A */
   @OneToMany
   public List<RobaIliUsluga> robaIliUsluga;

}