$("#find-brewery").on("click", function(event) {


    event.preventDefault();
    
    $("#brewery-view").empty();
   var state = $("#brewery-input-state").val().trim();

   var city = $("#brewery-input-city").val().trim();
     
   $("#brewery-input-state").val("");
   $("#brewery-input-city").val("");

    //    var queryURL = "https://api.openbrewerydb.org/breweries?by_city=" + city;  
       
       var queryURL = "https://api.openbrewerydb.org/breweries?by_state=" + state +"&by_city=" + city; 
        
        //  console.log(queryURL)
           
          $.ajax({
            url: queryURL,
            method: "GET"
          }).then(function(response) {
              var result = response;
              for (var i = 0; i < result.length; i++){
              var location1 = result[i].latitude;
              var location2 = result[i].longitude;
              
            console.log("this is your location: " + location1,location2);
            if (location1 && location2) {
                $("#brewery-view").append("<p>" + location1 + " " + location2 + "</p>") 
            }
            
              }
              
          });
        
        });

