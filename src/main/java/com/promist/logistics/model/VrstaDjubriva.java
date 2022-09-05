package com.promist.logistics.model;

public enum VrstaDjubriva {
	
	NPK16("NPK 16:16:16"), NPK15("NPK 15:15:15"), MAP("MAP 12:52"), KCL("KCL"), 
	UREA("UREA 46%N"), GUREA("GRANULISANA UREA 46,2%N"), SAN("SAN 33%N"),
	KAN("KAN 27%N"), AMONIJUM("AMONIJUM NITRAT");
	
	private String name;
	VrstaDjubriva(String name) {
		this.name = name;
	}
	
	@Override 
	public String toString() {
		return name;
	}
}
