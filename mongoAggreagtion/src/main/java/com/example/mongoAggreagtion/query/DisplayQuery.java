package com.example.mongoAggreagtion.query;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.Aggregation;
import org.springframework.data.mongodb.core.aggregation.AggregationResults;

import static org.springframework.data.mongodb.core.aggregation.Aggregation.newAggregation;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.group;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.project;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.sort;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.limit;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.skip;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Repository;

import com.example.mongoAggreagtion.models.DisplayAggregationModel;
import com.example.mongoAggreagtion.models.DisplayModel;

@Repository
public class DisplayQuery {
	
	@Autowired
	MongoTemplate mongoTemplate;
	public List<DisplayModel> getResults(Integer limit, Integer skip, String city, String sort) {
		Query query = new Query();
		query.limit(limit);
		if (skip != null)
			query.skip(skip);
		if (city != null)
			query.addCriteria(Criteria.where("city").is(city));
		if (sort!=null && !sort.equals("name")) {
			if (sort == "reviewCount")
				sort = "review_count";
			query.with(new Sort(Sort.Direction.DESC, sort));
		}
		else
			query.with(new Sort(Sort.Direction.ASC, "name"));
		List<DisplayModel> result = mongoTemplate.find(query, DisplayModel.class, "docs");
		
		return result;
	}
	public List<DisplayAggregationModel> getAnalysisResults(Integer limit, Long skip) {
		Aggregation aggregate;
		if (skip!=null){
		aggregate = newAggregation(
				group("city").count().as("noOfBusinesses"),
				project("noOfBusinesses").and("city").previousOperation(),
				sort(Sort.Direction.DESC, "noOfBusinesses"),
				skip(skip),
				limit(limit)
				);
		}
		else {
			aggregate = newAggregation(
					group("city").count().as("noOfBusinesses"),
					project("noOfBusinesses").and("city").previousOperation(),
					sort(Sort.Direction.DESC, "noOfBusinesses"),
					limit(limit)
					);
		}
		AggregationResults<DisplayAggregationModel> groupResults = mongoTemplate.aggregate(aggregate, "docs", DisplayAggregationModel.class);
		List<DisplayAggregationModel> result = groupResults.getMappedResults();
		return result;
	}

}
