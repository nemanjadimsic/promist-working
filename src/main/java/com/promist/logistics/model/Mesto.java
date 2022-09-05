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
/** @pdOid 0c8e1284-3bd8-4eea-9dd1-05c473e9b1fe */
public class Mesto {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 3c3c232d-1d2b-4fab-86e9-7ac228c6a2a4 */
   private String pttBroj;
   /** @pdOid 7f6823e9-44b0-4bf2-8aa5-c4be62b967f2 */
   private String nazivMesta;
   /** @pdRoleInfo migr=no name=Preduzece assc=association4 coll=java.util.Collection impl=java.util.HashSet mult=0..* */
   @OneToMany
   public List<Preduzece> preduzece;
   @OneToMany
   public List<Radnik> radnici;


}