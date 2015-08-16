package de.gh.rest.service;

import javax.xml.bind.annotation.*;

@XmlRootElement
public class ServerInfo {
	
	
	String server;

	public String getServer() {
		return server;
	}

	public void setServer(String server) {
		this.server = server;
	}
	
	

}
