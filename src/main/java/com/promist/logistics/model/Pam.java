package com.promist.logistics.model;

import java.util.List;

import javax.persistence.Column;
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
public class Pam {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
	
	@ManyToOne
	private Pasadz pasadz;
	
	@ManyToOne
	private Sluzba magacin;
	
	@Column(columnDefinition="Decimal(10,2) default '0.00'")
	private double stanje = 0;		

}
