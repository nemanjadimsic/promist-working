package com.promist.logistics.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.validation.Valid;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.promist.logistics.dto.ChangePasswordDTO;
import com.promist.logistics.dto.LoginForm;
import com.promist.logistics.dto.SignUpForm;
import com.promist.logistics.dto.UserDTO;
import com.promist.logistics.model.Role;
import com.promist.logistics.model.RoleName;
import com.promist.logistics.model.User;
import com.promist.logistics.repository.RoleRepository;
import com.promist.logistics.repository.UserRepository;
import com.promist.logistics.security.JwtProvider;
import com.promist.logistics.security.JwtResponse;


@RestController
@RequestMapping("/api/auth")
public class AuthController {

    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    UserRepository userRepository;

    @Autowired
    RoleRepository roleRepository;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtProvider jwtProvider;

    @PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@Valid @RequestBody LoginForm loginRequest,HttpServletRequest request) {
    	System.out.println(loginRequest.getEmail() + " = " + loginRequest.getPassword());
		Authentication authentication = authenticationManager.authenticate(
				new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));
 
		SecurityContextHolder.getContext().setAuthentication(authentication);
 
		String jwt = jwtProvider.generateJwtToken(authentication);
		UserDetails userDetails = (UserDetails) authentication.getPrincipal();
		request.getSession().setAttribute("logged", userDetails);
		
		return ResponseEntity.ok(new JwtResponse(jwt, userDetails.getUsername(), userDetails.getAuthorities()));
	}
    
    @PostMapping("/changePassword")	
    public ResponseEntity<?> changePass(@RequestBody ChangePasswordDTO password) {
    	User user = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
    	System.out.print(password.toString());
    	if(encoder.matches(password.getNewPassword(), user.getPassword())) {
    		System.out.println("isti su");
    	} else {
    		System.out.println("nisu");
    	}
    	String hashed = encoder.encode(password.getOldPassword());
    	System.out.println("hash: " + hashed + " baza hash: " + user.getPassword());
    	//if(hashed.equals(user.getPassword())) {
    		if(password.getNewPassword().equals(password.getNewPasswordAgain())) {
        		user.setPassword(encoder.encode(password.getNewPassword()));
        		userRepository.save(user);
        		return new ResponseEntity<User>(user, HttpStatus.OK);
        	} else {
        		return new ResponseEntity<Exception>(new Exception("Pasvordi se ne poklapaju."), HttpStatus.NOT_ACCEPTABLE);
        	}
    		
    	//} else {
    	//	return new ResponseEntity<Exception>(new Exception("Pogresan trenutni pasvord."), HttpStatus.NOT_ACCEPTABLE);
    	//}
    }
    
    @PostMapping("/signup")
    public ResponseEntity<UserDTO> registerUser(@Valid @RequestBody SignUpForm signUpRequest) {
        

        // Creating user's account
        User user = new User();
        
        user.setEmail(signUpRequest.getEmail());
        user.setPassword(encoder.encode(signUpRequest.getPassword()));
        user.setName(signUpRequest.getName());
        
        List<Role> roles = new ArrayList<>();
        
        Role userRole = roleRepository.findByName(RoleName.ROLE_ADMIN)
        		.orElseThrow(() -> new RuntimeException("Fail! -> Cause: User Role not find."));
        		roles.add(userRole);   

        user.getRoles().add(userRole);
        userRepository.save(user);

        return new ResponseEntity<UserDTO>(new UserDTO(user), HttpStatus.CREATED);
    }
    
    @GetMapping("/getLogged")
    public ResponseEntity<?> getLogged() {
    	System.out.println(SecurityContextHolder.getContext().getAuthentication().getName());
    	if(userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).isPresent()) {
    		User logged = userRepository.findByEmail(SecurityContextHolder.getContext().getAuthentication().getName()).get();
    		return new ResponseEntity<UserDTO>(new UserDTO(logged), HttpStatus.OK);
    	} else {
    		 return new ResponseEntity<>("Fail ->No logged user",
                     HttpStatus.BAD_REQUEST);
    	}   	
    	
    }
}