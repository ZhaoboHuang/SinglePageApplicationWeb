package com.jervisApp.service;

import com.jervisApp.model.User;

public interface UserService {
	public User findUserByEmail(String email);
	
	public void saveUser(User user);
	
}
