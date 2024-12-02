package com.example.beans;

import java.io.Serializable;

import jakarta.enterprise.context.SessionScoped;
import jakarta.inject.Named;

@Named("userBean")
@SessionScoped
public class UserBean implements Serializable {
	private static final long serialVersionUID = 1L;

	private String name;

	private boolean loggedIn;

	public UserBean() {
		this.setName("invité");
		this.setLoggedIn(false);
	}

	public boolean isLoggedIn() {
		return loggedIn;
	}

	public void setLoggedIn(boolean loggedIn) {
		this.loggedIn = loggedIn;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

}
