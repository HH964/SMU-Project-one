$("#find-brewery").on("click", function(event) {


    event.preventDefault();
    
    
    var city = $("#brewery-input").val().trim();
    
       var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city;   
           
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
            $("#brewery-view").text(JSON.stringify(response));
          });
        
        });