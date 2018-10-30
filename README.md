# Mongo-SpringBoot-Aggregation
This is a Demo project that demonstrates a Spring aggregate query on to Mongo DB.
### Tech
The technologies/Concepts/tools used in this project are: (list implicitly specifies the requirements for project also)
- Import a HTML file and watch it magically convert to Markdown
- Drag and drop images (requires your Dropbox account be linked)
- Spring Boot
- Mongo DB
- AJAX
- Static Pagination
- MVC architectural pattern
- Maven
- Postman
- Spring Initializer (online project initializer)
- Python
- JS and HTML
- YELP Business Data (data source to populate DB)
### Installation

Populating Mongo DB with Yelp Business Data
Open Terminal and enter following command:
```sh
$ mongoimport --db <DB_Name> --collection <Collection_Name> --file yelp_academic_dataset_business.json
```

For Maven building spring boot project, 
```sh
$ cd mongoAggregation
$ mvn clean install -DskipTests
```

Configure Eclipse with Spring Boot and run "MongoAggregationApplication.java" file

For starting front end

```sh
$  cd frontend
$  python3 -m http.server 8000 --bind localhost
```
Now, you can find the front end at "http://localhost:8000/"

### Development
- Populated Yelp Business Data on to Mongo DB
- Developed Two RESTful APIs in Spring
    - getYelpBusiness (normal GET API) : to display Yelp Business data  
    - getYelpBusinessAnalysis (Aggregate Query GET API): to get information about cities and the corresponding total no.of business organizations present in city.
- Developed a Simple Responsive Web Application in HTML and JS. Displayed content using the developed RESTful APIs. 

### Note:
#### I have changed the default port of my Spring Boot(in the application.properties file). So this application starts TomCat embedded in Spring at port 8090(rather than at 8080).

