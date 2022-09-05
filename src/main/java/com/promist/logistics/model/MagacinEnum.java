package com.promist.logistics.model;

public enum MagacinEnum {
	
	NSP("Novi Sad, Privrednikova 6"), NSR("Novi Sad, Ribarska 3"),
	VRB("Vrbas, Kulski put 2"), PAP("Pančevo, Prvomajska 10"),
	SRK("Sremski Karlovci, Donji Matej bb"), NSU("Novi Sad, Uslužni magacin"),
	PAU("Pančevo, Uslužni magacin");
	
	private String name;
	MagacinEnum(String name) {
		this.name = name;
	}
	
	@Override 
	public String toString() {
		return name;
	}

}
