package com.promist.logistics.model;

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
/** @pdOid b71bd369-e9fe-498b-8758-3b8141ef4e47 */
public class StavkaPrometnogDokumenta {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid a7cf8712-8ee6-4b48-b59f-a1cd0730128c */
   private float kolicina;
   /** @pdOid 033d1ff1-48db-4e14-8755-ebaf14c137a5 */
   private float cena;
   /** @pdOid c3287370-ddbe-4928-bbec-9e6e2530c55e */
   private float vrednost;
   @ManyToOne
   public PrometniDokument prometniDokument;
   /** @pdRoleInfo migr=no name=RobaIliUsluga assc=association43 mult=1 */
   @ManyToOne
   public RobaIliUsluga robaIliUsluga;

}