package com.jervisApp.SpringBootsSignup.service;

import com.jervisApp.SpringBootsSignup.entity.User;

public interface UserService {
	public User findUserByEmail(String email);
	
	public void saveUser(User user);
	
}
