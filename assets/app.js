var queryTerm 	= "";
var numResults 	= 0;

var startYear 	= 0;
var endYear		= 0;



var apiKey = "1954e4326be7424191e171840d09aeb8";
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apiKey + "&q=";

function runSearch(numberarticles, queryURL){

$.ajax({
       url: queryURL,
       method: "GET"
        
       }).done(function(response) {

       console.log(response);
       });

}

$("#runSearch").on("click", function(){

	var searchTerm 	= $("#searchTerm").val().trim();
	console.log(searchTerm);
	numResults 	= $("#numberrecords").val();
	console.log(numResults);
	var queryURL = queryURLBase + searchTerm;
	startYear 	= $("#startYear").val();
	console.log(startYear);
	endYear		= $("#endYear").val();
	console.log(endYear);

	if (parseInt(startYear)) {
			queryURL = queryURL + "&begin_date=" + startYear + "0101";
		}
	if (parseInt(endYear)) {
			queryURL = queryURL + "&end_date=" + endYear + "1231";
		}

	runSearch(numResults, queryURL);	
});

