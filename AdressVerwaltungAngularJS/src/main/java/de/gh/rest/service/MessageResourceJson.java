package de.gh.rest.service;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

@Path("json")
public class MessageResourceJson {
	
	public MessageResourceJson() {
		System.err.println(" ######## Initalisiert");
	}
	
	
	@GET
	@Path("serverinfo")
	@Produces(MediaType.APPLICATION_JSON)
	public ServerInfo serverinfo()
	{
		ServerInfo info = new ServerInfo();
		info.server = System.getProperty("os.name") + " " + System.getProperty("os.version");
		return info;
	}


 }
