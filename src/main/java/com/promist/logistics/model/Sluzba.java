package com.promist.logistics.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
/** @pdOid 4d2e7f39-70ae-4fdc-a0e0-5f5eda0103c2 */
public class Sluzba {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 5da76f47-f065-4a71-b060-5b4b256de73a */
	@Enumerated(EnumType.STRING)
   private MagacinEnum naziv;
   /** @pdOid ca09f943-ae14-4758-8fd1-913d67e965d0 */
//   private boolean magacin;
//   /** @pdRoleInfo migr=no name=MagacinskaKartica assc=association37 mult=* side=A */
   @OneToMany
   public List<MagacinskaKartica> magacinskaKartica;
   /** @pdRoleInfo migr=no name=PrometniDokument assc=association44 mult=* side=A */
   @OneToMany
   public List<PrometniDokument> prometniDokument;
   
   @OneToMany(mappedBy="magacin")
   private List<Marlep> marlepi;
   
   @OneToMany(mappedBy="magacin")
   private List<Pam> pamovi;
   
   @OneToMany(mappedBy="magacin")
   private List<Cemer> cemeri;
   
}