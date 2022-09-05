package com.promist.logistics.model;

import java.util.Date;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
/** @pdOid a2174c80-5807-459f-acf0-902bc0789e95 */
public class AnalitikaMagacinskeKartice {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
	
   /** @pdOid 7191f990-68de-4621-8f46-e80ce3b4cc86 */
   private Smer smer;
   /** @pdOid d9c5d34b-fdda-4189-b8e3-0e3a353a94d1 */
   private float kolicina;
   /** @pdOid aecb1db2-8d76-451a-8309-a8b3cd60492e */
   private VrstaPrometnogDokumenta vrstaPrometa;
   private Date datum;
   /** @pdRoleInfo migr=no name=MagacinskaKartica assc=association39 mult=1 side=A */
   @ManyToOne
   public MagacinskaKartica magacinskaKartica;

}