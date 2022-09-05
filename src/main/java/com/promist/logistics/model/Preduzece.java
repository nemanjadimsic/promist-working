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
//
@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
/** @pdOid b2c5557a-3f47-4d28-ac1a-975a54e8d251 */
public class Preduzece {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 3d5c6334-bfba-421f-aa55-1b6324dc9e20 */
   private String naziv;
   /** @pdOid a6f670a4-fac7-47ee-8056-54e6065baef9 */
   private String adresa;
   /** @pdOid cc089cb5-7a80-44f5-8b74-c576dc2e1b6f */
   private String eMail;
   /** @pdOid 7ae123d2-64e6-459d-9a93-82e3dd919b60 */
   private String telefon;
   /** @pdOid 0ba8c059-7023-4479-9a49-fb847e7c559d */
   private String fax;
   /** @pdOid d182b9ec-3b12-4583-a35b-e710687a1e96 */
   private int pib;
   /** @pdRoleInfo migr=no name=Radnik assc=radnici coll=java.util.Collection impl=java.util.HashSet mult=* */
   @OneToMany
   public List<Radnik> radnici;
   /** @pdRoleInfo migr=no name=Sektor assc=association34 coll=java.util.Collection impl=java.util.HashSet mult=0..* type=Composition */
}