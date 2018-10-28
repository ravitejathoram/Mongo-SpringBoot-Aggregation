var flag = 0;
var flag1 = 0;
var apiEndpoint = 'http://localhost:8090/getYelpBusiness';
var apiEndpoint1 = 'http://localhost:8090/getYelpBusinessAnalysis';
doIt(apiEndpoint);
doIt1(apiEndpoint1);
var val1 = "name";
//fucntion to handle filter selection
function filterChange(select){

var val = select.selectedIndex;
val1 = select.options[val].value;

var temp = parseInt(document.getElementsByClassName("page active")[0].textContent);
apiEndpoint = "http://localhost:8090/getYelpBusiness"+ "?sort=" + val1 + "&skip=" + (temp-1)*30;

document.getElementById("tableElem").remove();
//console.log(apiEndpoint);
doIt(apiEndpoint);

}

//function to handle table present in Introduction section
function doIt(apiEndpoint){
  //console.log("here!!!!");
  if (document.getElementById("tableElem")){document.getElementById("tableElem").remove();}

  var request = new XMLHttpRequest();
  var table = document.createElement('table');
  table.setAttribute("id", "tableElem");


  document.getElementById("display").appendChild(table);
  request.open('GET', apiEndpoint, true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    var tr = document.createElement('tr');

    var td1 = document.createElement('th');
    var td2 = document.createElement('th');
    var td3 = document.createElement('th');
    var td4 = document.createElement('th');

    var text1 = document.createTextNode("NAME");
    var text2 = document.createTextNode("CITY");
    var text3 = document.createTextNode("RATING");
    var text4 = document.createTextNode("No OF REVIEWS");

    td1.appendChild(text1);
    td2.appendChild(text2);
    td3.appendChild(text3);
    td4.appendChild(text4);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);

    table.appendChild(tr);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(record => {
        //console.log(record.name);
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');
        var td3 = document.createElement('td');
        var td4 = document.createElement('td');

        var text1 = document.createTextNode(record.name);
        var text2 = document.createTextNode(record.city);
        var text3 = document.createTextNode(record.stars);
        var text4 = document.createTextNode(record.reviewCount);

        td1.appendChild(text1);
        td2.appendChild(text2);
        td3.appendChild(text3);
        td4.appendChild(text4);
        tr.appendChild(td1);
        tr.appendChild(td2);
        tr.appendChild(td3);
        tr.appendChild(td4);

        table.appendChild(tr);
      });
    } else {
      console.log('error');
    }
  }
  request.send();

}
//function to handle table present in Analysis section
function doIt1(apiEndpoint1){
  //console.log("here!!!!");
  if (document.getElementById("tableElem1")){document.getElementById("tableElem1").remove();}

  var request = new XMLHttpRequest();
  var table = document.createElement('table');
  table.setAttribute("id", "tableElem1");


  document.getElementById("display1").appendChild(table);
  request.open('GET', apiEndpoint1, true);
  request.onload = function () {
    // Begin accessing JSON data here
    var data = JSON.parse(this.response);
    var tr = document.createElement('tr');

    var td1 = document.createElement('th');
    var td2 = document.createElement('th');

    var text1 = document.createTextNode("CITY");
    var text2 = document.createTextNode("No. OF BUSINESSES");

    td1.appendChild(text1);
    td2.appendChild(text2);

    tr.appendChild(td1);
    tr.appendChild(td2);


    table.appendChild(tr);
    if (request.status >= 200 && request.status < 400) {
      data.forEach(record => {
        // console.log(record.city);
        // console.log(record.noOfBusinesses);
        var tr = document.createElement('tr');

        var td1 = document.createElement('td');
        var td2 = document.createElement('td');

        var text1 = document.createTextNode(record.city);
        var text2 = document.createTextNode(record.noOfBusinesses);

        td1.appendChild(text1);
        td2.appendChild(text2);

        tr.appendChild(td1);
        tr.appendChild(td2);

        table.appendChild(tr);
      });
    } else {
      console.log('error');
    }
  }
  request.send();
}
//pagination tabs
$('#pagination-demo').twbsPagination({
  totalPages: 100,
  // the current page that show on start
  startPage: 1,

  // maximum visible pages
  visiblePages: 9,

  initiateStartPageClick: true,

  // template for pagination links
  href: false,

  // variable name in href template for page number
  hrefVariable: '{{number}}',

  // Text labels
  first: 'First',
  prev: 'Previous',
  next: 'Next',
  last: 'Last',

  // carousel-style pagination
  loop: false,

  // callback function
  onPageClick: function (event, page) {
    if (flag!=0){

    apiEndpoint = "http://localhost:8090/getYelpBusiness?skip="+(page-1)*30 + "&sort=" + val1;
    //console.log(apiEndpoint);
    doIt(apiEndpoint);

    $('.page-active').removeClass('page-active');
    $('#page'+page).addClass('page-active');
  }
  flag = 1;
  },

  // pagination Classes
  paginationClass: 'pagination',
  nextClass: 'next',
  prevClass: 'prev',
  lastClass: 'last',
  firstClass: 'first',
  pageClass: 'page',
  activeClass: 'active',
  disabledClass: 'disabled'

});

$('#pagination-demo1').twbsPagination({
  totalPages: 50,
  // the current page that show on start
  startPage: 1,

  // maximum visible pages
  visiblePages: 9,

  initiateStartPageClick: true,

  // template for pagination links
  href: false,

  // variable name in href template for page number
  hrefVariable: '{{number}}',

  // Text labels
  first: 'First',
  prev: 'Previous',
  next: 'Next',
  last: 'Last',

  // carousel-style pagination
  loop: false,

  // callback function
  onPageClick: function (event, page) {
    if (flag1!=0){

    apiEndpoint = "http://localhost:8090/getYelpBusinessAnalysis?skip="+(page-1)*30;

    doIt1(apiEndpoint);

    $('.page-active').removeClass('page-active');
    $('#page'+page).addClass('page-active');
  }
  flag1 = 1;
  },


  paginationClass: 'pagination',
  nextClass: 'next',
  prevClass: 'prev',
  lastClass: 'last',
  firstClass: 'first',
  pageClass: 'page',
  activeClass: 'active',
  disabledClass: 'disabled'

});
