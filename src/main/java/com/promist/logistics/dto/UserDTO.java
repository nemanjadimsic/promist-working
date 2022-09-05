package com.promist.logistics.dto;

import java.util.ArrayList;
import java.util.List;

import com.promist.logistics.model.Role;
import com.promist.logistics.model.User;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDTO {
	
	private Long id;
	
	
	private String name;
	
	private String email;
	

	private String password;
		
	private boolean verified = false;
	
	private List<RoleDTO> rolesDTO;
	
	public UserDTO(Long id, String email, String password, String name, boolean verified) {
		this.id = id;
		this.email = email;
		this.password = password;
		this.name = name;
		this.verified = verified;
	}
	
	public UserDTO(User user) {
		
		this(user.getId(), user.getName(),user.getEmail(),user.getPassword(),user.isVerified());
		rolesDTO = new ArrayList<>();
		for(Role f : user.getRoles()) {
			rolesDTO.add(new RoleDTO(f.getName()));
		}

	}

	public UserDTO(Long id, String name, String email, String password, String surname, String city, String phone, boolean verified) {
		super();
		this.id = id;
		this.name = name;
		this.email = email;
		this.password = password;
		this.verified = verified;
		
	}	
}
