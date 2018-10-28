package com.example.mongoAggreagtion.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "docs")
public class DisplayAggregationModel {
	@Field(value="city")
	private String city;
	private Integer noOfBusinesses;
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Integer getNoOfBusinesses() {
		return noOfBusinesses;
	}
	public void setNoOfBusinesses(Integer noOfBusinesses) {
		this.noOfBusinesses = noOfBusinesses;
	}
	
}
