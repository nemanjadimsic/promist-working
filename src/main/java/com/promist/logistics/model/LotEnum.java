package com.promist.logistics.model;

public enum LotEnum {
	
	L1("1-2019"), L2("2-2019"), L3("3-2019"), L4("4-2019"), L5("5-2019"),
	L6("6-2019"), L7("7-2019"), L8("8-2019"), L9("9-2019"), L10("10-2019"),
	L11("11-2019"), L12("12-2019"), L13("13-2019"), L14("14-2019"), L15("15-2019"),
	L16("16-2019"), L17("17-2019"), L18("18-2019"), L19("19-2019"), L20("20-2019");
	
	private String name;
	LotEnum(String name) {
		this.name = name;
	}
	
	@Override 
	public String toString() {
		return name;
	}
}
