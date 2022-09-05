package com.promist.logistics.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@AllArgsConstructor
@NoArgsConstructor
@Data
public class Marlep {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
	
	@ManyToOne
	private Sluzba magacin;
	
	@ManyToOne
	private RobaIliUsluga roba;
	
	@ManyToOne
	private Lot lot;
	
	@ManyToOne
	private Pakovanje pakovanje;
	
	@Column(columnDefinition="Decimal(10,2) default '0.00'")
	private double stanje = 0;	
	
	@OneToMany(mappedBy="marlep")
	private List<Promena> promene;

}
