package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class TrenutnoStanjeDTO {

	private long magacinId;
	
	private long robaId;
	
	private long lotId;
	
	private long pakovanjeId;
	
}
