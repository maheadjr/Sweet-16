
//USE THIS AS EXAMPLE FOR AJAX CALL - USE YOUR OWN API KEY! That way we can all have 500 requests/day
//----------------------------------------------
var userSearch = "potato,onion,celery,chicken"

var queryURL = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=9e19b48478f4603393892c6669180774&q="+ userSearch + "&count=5&sort=r"

$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response){
    response = JSON.parse(response);

    console.log(response);

    console.log(response.recipes[0].title);
    
})
// --------------------------------------------