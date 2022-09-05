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
/** @pdOid b4a28773-90ed-4aef-8ae9-161071860b2f */
public class MagacinskaKartica {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 86634d25-c15b-432e-9679-197e647e35f8 */
   private float poceetnoStanjeKolicina;
   /** @pdOid f4927957-35d4-4b0f-8fdb-7efa96cb7b20 */
   private float prometUlazaKolicina;
   /** @pdOid fc0051f6-9fd6-4adc-916d-b471fda0246e */
   private float prometIzlazaKolicina;
   /** @pdOid d02b74f1-26ce-42df-9ee0-54b327aad479 */
   private float ukupnaKolicina;
   /** @pdRoleInfo migr=no name=RobaIliUsluga assc=association36 mult=1 */
   @ManyToOne
   public RobaIliUsluga robaIliUsluga;
   /** @pdRoleInfo migr=no name=Sluzba assc=association37 mult=1 */
   @ManyToOne
   public Sluzba magacin;
   /** @pdRoleInfo migr=no name=AnalitikaMagacinskeKartice assc=association39 coll=java.util.Collection impl=java.util.HashSet mult=1..* type=Composition */
   @OneToMany
   public List<AnalitikaMagacinskeKartice> analitikaMagacinskeKartice;
   
}