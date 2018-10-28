package com.example.mongoAggreagtion.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.mongoAggreagtion.models.DisplayAggregationModel;
import com.example.mongoAggreagtion.models.DisplayModel;
import com.example.mongoAggreagtion.query.DisplayQuery;

@CrossOrigin(maxAge = 3600)
@RestController
public class DisplayController {
	@Autowired
	DisplayQuery dispQuery;
	
	@RequestMapping(method = RequestMethod.GET, value = "getYelpBusiness")
	public List<DisplayModel> getDisplayData(
			@RequestParam(value = "limit", required=false)Integer limit,
			@RequestParam(value = "skip", required=false)Integer skip,
			@RequestParam(value = "city", required=false)String city,
			@RequestParam(value="sort", required=false)String sort
			){
		
		if(limit == null)
			limit = 30;
	
		return dispQuery.getResults(limit, skip, city, sort) ;
	}
	
	@RequestMapping(method = RequestMethod.GET, value = "getYelpBusinessAnalysis")
	public List<DisplayAggregationModel> getAnalysisData(
			@RequestParam(value = "limit", required=false)Integer limit,
			@RequestParam(value = "skip", required=false)Long skip,
			@RequestParam(value = "city", required=false)String city,
			@RequestParam(value="sort", required=false)String sort
			){
		
		if(limit == null)
			limit = 10;
	
		return dispQuery.getAnalysisResults(limit, skip) ;
	}
}
