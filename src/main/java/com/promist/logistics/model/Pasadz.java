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
public class Pasadz {
	
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
    protected long id;
	
	private String naziv; 
	
	@OneToMany(mappedBy="pasadz")
	private List<Pam> pamovi;

	@Override
	public String toString() {
		if(id == 1 || id == 2) {
			return "paleta " + naziv;
		} else if (id >= 4) {
			return "dzak " + naziv;
		} else {
			return naziv;
		}
		
	}
	
}
