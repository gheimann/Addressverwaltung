package de.gh.rest.service;

import java.util.ArrayList;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import de.gh.example.model.Address;
import de.gh.example.model.Anreden;

@Path("address")
public class AdressService {
	
	public AdressService() {
		System.err.println("Initialisierung AdressService");
	}
	
	@GET
	@Path("element/{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Address getAddress(@PathParam("id") long id)
	{
		System.err.println("id= " + id);
		return new Address(Anreden.Frau, "Gabi", "Testfrau", "gh@test.de");
	}
	
	@GET
	@Path("list")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Address> getAddressListe()
	{
		Address address = new Address(Anreden.Frau, "Gabi", "Testfrau", "gh@test.de");
		address.setId(1);
		Address address2 = new Address(Anreden.Herr, "Jürgen", "Langguth", "jl@test.de");
		address2.setId(2);
		
		ArrayList<Address> list = new ArrayList<Address>();
		list.add(address);
		list.add(address2);
		return list;
	}

}
