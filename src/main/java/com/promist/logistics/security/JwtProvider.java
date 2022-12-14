package com.promist.logistics.security;

import java.util.Date;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.SignatureException;
import io.jsonwebtoken.UnsupportedJwtException;

@Component
public class JwtProvider {
 
 
    @Value("jwtDimsicSecretKey")
    private String jwtSecret;
 
    @Value("86400")
    private int jwtExpiration;
 
    public String generateJwtToken(Authentication authentication) {
 
        UserPrinciple userPrincipal = (UserPrinciple) authentication.getPrincipal();
 
        return Jwts.builder()
		                .setSubject((userPrincipal.getUsername()))
		                .setIssuedAt(new Date())
		                //.setExpiration(new Date((new Date()).getTime() + jwtExpiration))
		                .signWith(SignatureAlgorithm.HS512, jwtSecret)
		                .compact();
    }
 
    public String getUserNameFromJwtToken(String token) {
        return Jwts.parser()
			                .setSigningKey(jwtSecret)
			                .parseClaimsJws(token)
			                .getBody().getSubject();
    }
 
    public boolean validateJwtToken(String authToken) {
        try {
            Jwts.parser().setSigningKey(jwtSecret).parseClaimsJws(authToken);
            return true;
        } catch (SignatureException e) {
           
        } catch (MalformedJwtException e) {
            
        } catch (ExpiredJwtException e) {
            
        } catch (UnsupportedJwtException e) {
            
        } catch (IllegalArgumentException e) {
            
        }
        
        return false;
    }
}