package com.promist.logistics.model;

import java.util.Date;
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
/** @pdOid e8db7389-2435-4a4c-bd8c-ad3931a7167f */
public class PrometniDokument {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid 0085b86e-b6b9-4599-a04a-6b1f5d1bc7f2 */
   private int broj;
   /** @pdOid 239fa9db-11b5-4db1-987c-426b52df7754 */
   private Date datumFormiranja;
   /** @pdOid 0165ca31-5f48-4f7d-90d2-d8c7b5ca96ac */
   private Date datumKnjizenja;
   /** @pdOid edcda34e-82a9-42a1-986b-8ffc14e4ae15 */
   private VrstaPrometnogDokumenta vrstaPrometa;
   /** @pdOid 01c9e71e-8afa-49eb-91d7-e0de45d970c5 */
   private StatusPrometnogDokumenta status;
   /** @pdRoleInfo migr=no name=StavkaPrometnogDokumenta assc=association42 coll=java.util.Collection impl=java.util.HashSet mult=* type=Composition */
   @OneToMany
   public List<StavkaPrometnogDokumenta> stavkaPrometnogDokumenta;
   /** @pdRoleInfo migr=no name=Sluzba assc=association45 mult=1 */
   @ManyToOne
   public Sluzba magacin;
}