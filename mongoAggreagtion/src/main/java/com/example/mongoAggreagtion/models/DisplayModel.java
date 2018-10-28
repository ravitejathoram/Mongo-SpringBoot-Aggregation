package com.example.mongoAggreagtion.models;

import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.Field;

@Document(collection = "docs")
public class DisplayModel {
	@org.springframework.data.annotation.Id
	private String Id;
	
	@Field(value="name")
	private String name;
	@Field(value="city")
	private String city;
	@Field(value="stars")
	private Double stars;
	@Field(value="review_count")
	private Integer reviewCount;
	public String getId() {
		return Id;
	}
	public void setId(String id) {
		Id = id;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCity() {
		return city;
	}
	public void setCity(String city) {
		this.city = city;
	}
	public Double getStars() {
		return stars;
	}
	public void setStars(Double stars) {
		this.stars = stars;
	}
	public Integer getReviewCount() {
		return reviewCount;
	}
	public void setReviewCount(Integer reviewCount) {
		this.reviewCount = reviewCount;
	}
	
	
}
