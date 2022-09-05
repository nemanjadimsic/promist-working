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
/** @pdOid 955219ac-7eb3-4b9a-97a7-c96f63fe38b8 */
public class RobaIliUsluga {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
	
	/*@Enumerated(EnumType.STRING)
	private VrstaDjubriva vrsta;*/
	private String vrsta;
   /** @pdRoleInfo migr=no name=Kategorija assc=association13 mult=1 */
  // @ManyToOne
 //  public Kategorija kategorija;
   /** @pdRoleInfo migr=no name=JedinicaMere assc=association20 mult=1 */
//   @ManyToOne
//   public JedinicaMere jedinicaMere;
//   /** @pdRoleInfo migr=no name=MagacinskaKartica assc=association36 mult=* side=A */
   @OneToMany
   public List<MagacinskaKartica> magacinskaKartica;
   /** @pdRoleInfo migr=no name=StavkaPrometnogDokumenta assc=association43 mult=* side=A */
   @OneToMany
   public List<StavkaPrometnogDokumenta> stavkaPrometnogDokumenta;
   
   @OneToMany(mappedBy="roba")
   private List<Marlep> marlepi;
   
   @OneToMany(mappedBy="roba")
   private List<Cemer> cemeri;

}