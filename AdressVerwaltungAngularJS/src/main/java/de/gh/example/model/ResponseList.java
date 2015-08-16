package de.gh.example.model;

import java.util.List;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement(name="responseList")
public class ResponseList {
	
	private List<Object> list;
	
	public List<Object> getList()
	{
		return list;
	}
	
	public void setList(List<Object> list)
	{
		this.list = list;
		
	}

}
