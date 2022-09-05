package com.promist.logistics.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ChangePasswordDTO {

	String oldPassword;
	String newPassword;
	String newPasswordAgain;
	
}
