package de.akquinet.rest.service;

import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;

import de.akquinet.address.model.Address;
import de.akquinet.address.model.Anreden;

@Path("address")
public class AdressService {
	
	ThreadLocal<List<Address>> liste = new ThreadLocal<List<Address>>() {

		@Override
		protected List<Address> initialValue() {
			List<Address> adressListe = new ArrayList<Address>();
			Address address = new Address(Anreden.Herr, "Günter", "Wand",
					"guenter.wand@test.de");
			address.setId(1);
			adressListe.add(address);
			address = new Address(Anreden.Frau, "Cecelia", "Bartoli",
					"cb@test.de");
			address.setId(2);
			adressListe.add(address);
			address = new Address(Anreden.Frau, "Amy", "Winehouse",
					"awinehouse@test.de");
			address.setId(3);
			adressListe.add(address);
			address = new Address(Anreden.Herr, "Mischa", "Maisky",
					"mm@test.de");
			address.setId(4);
			adressListe.add(address);
			address = new Address(Anreden.Herr, "Ludwig", "van Beethoven",
					"vonBeethoven@test.de");
			address.setId(5);
			adressListe.add(address);
			return adressListe;
		}
	};

	public AdressService() {
		System.err.println("Initialisierung AdressService");
	}

	@GET
	@Path("element/{addressId}")
	@Produces(MediaType.APPLICATION_JSON)
	public Address getAddress(@PathParam("addressId") long id) {
		System.err.println("java id= " + id);

		for (Address address : liste.get()) {
			if (address.getId() == id) {
				return address;
			}
		}
		return null;
	}

	@GET
	@Path("list")
	@Produces(MediaType.APPLICATION_JSON)
	public ArrayList<Address> getAddressListe() {
		return (ArrayList<Address>) liste.get();
	}

	@POST
	@Path("neu/{address}")
	@Produces(MediaType.APPLICATION_JSON)
	@Consumes(MediaType.APPLICATION_JSON)
	public void speichereAddresse(Address address) {
		if (address != null) {
			System.out.println(address);
			// System.out.println(address.getNachname());
		}
	}

}
