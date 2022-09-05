package com.promist.logistics.model;

public enum VrstaPakovanja {
	
	P25("25/1"), P50("50/1"), P500("500/1"), P600("600/1"),
	P1000("1000/1"), PRINFUZ("rinfuz"), VANSTANDARDNO("VANSTANDARDNO"), P1000NEEGAL("1000/1 neegal");
	
	private String name;
	VrstaPakovanja(String name) {
		this.name = name;
	}
	
	@Override 
	public String toString() {
		return name;
	}

}
