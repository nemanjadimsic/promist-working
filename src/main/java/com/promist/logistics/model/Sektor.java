package com.promist.logistics.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
/** @pdOid 3ba28111-f274-427e-8c41-d51856c07b24 */
public class Sektor {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 629cda93-b611-4c3b-aa35-a37152fa0070 */
   private String nazivSektora;
   
   /** @pdRoleInfo migr=no name=Sluzba assc=association35 coll=java.util.Collection impl=java.util.HashSet mult=0..* type=Composition */
   @OneToMany
   public List<Sluzba> sluzba;
   /** @pdRoleInfo migr=no name=Preduzece assc=association34 mult=1 side=A */
   @ManyToOne
   public Preduzece preduzece;

}