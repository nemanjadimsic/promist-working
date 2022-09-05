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
/** @pdOid 79fefa1b-cb37-41f5-86b9-a2ac49da5430 */
public class Radnik {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
   /** @pdOid d3ad47f9-ca65-4c9b-a0f8-c192b21f5f85 */
   private String prezime;
   /** @pdOid 77ab9a6c-1db0-493d-bbc4-c02a92cfa7ed */
   private String imeRoditelja;
   /** @pdOid ed0a5a14-a311-4d76-85c2-8ffd4bbc4517 */
   private String adresa;
   /** @pdOid 4a946bda-bfef-4eda-b0a3-26c14ed617ba */
   private String telefon;
   /** @pdOid bc3055bd-f190-469a-9d5a-4710b8b82cc2 */
   private Date datumUgovora;
   /** @pdOid 2272eb31-ea31-4fa2-a987-277e8ad53c06 */
   private int brojUgovora;
   /** @pdOid 84fcdf42-edc0-46e6-bd80-1897643e244d */
   public String ime;
   /** @pdRoleInfo migr=no name=Preduzece assc=radnici mult=1..1 side=A */
   @ManyToOne
   public Preduzece preduzece;
   /** @pdRoleInfo migr=no name=Mesto assc=association3 mult=0..1 side=A */
   @ManyToOne
   public Mesto mestoStanovanja;
}