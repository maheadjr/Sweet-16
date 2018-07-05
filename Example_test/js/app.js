var input = "";
var videoArray = [];
var url = "";
var test="";

$("#submit").on("click", function (event) {

   $("#showAPI").empty();
   $(".resultVideo").remove();
   input="";
   videoArray=[];
   url = "";
   test="";

   

    event.preventDefault();
    input = $("#userInput").val().trim();
    console.log(input);

   

    var query2 = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=9e19b48478f4603393892c6669180774&q=" + input + "&count=5&sort=r";
    $.ajax({
        url: query2,
        method: "get"
    }).then(function (response) {

        response = JSON.parse(response);

        console.log(response);

        for (var i = 0; i < 5; i++) {
            // $("#showAPI").text(response.recipes[i].title);

            var newImg = $("<img>");
            newImg.attr({
                src: response.recipes[i].image_url,
                id: "img" + i,
                height: "200",
                width: "350",
            });

            console.log(response.recipes[i].image_url);


            var newDiv = $("<div>");
            newDiv.attr({
                data: response.recipes[i].title,
                id: "recipes" + i

            }).text(response.recipes[i].title);

            $("#showAPI").append(newDiv, newImg);


             test = $("#recipes"+i).attr("data");
         //    console.log(test.length);
            for(var j=0 ; j< test.length ; j++){
             test = test.replace(" ","+");
            }
            videoArray.push(test);
         
         // console.log("this is a vidoe Array;",videoArray);

            
        

            url =
            "https://www.googleapis.com/youtube/v3/search" +
         //    "?id=7lCDEYXw3mM" +
            "?key=AIzaSyAa5bkvvpgp54UKa9W_Tf5OIgoB9HT1l5E" +
            "&part=snippet" +
            "&q=how+to+make+" + videoArray[i] +
            "&type=video" +
            "&maxResults=3"+
            "&order=relevance" +
            "&videoCaption=closedCaption";
        
             console.log("the query Url", url);
        
                 var xhr = new XMLHttpRequest();
               xhr.open('GET', url);
               xhr.onload = function () {
                   // do something
                   var response = JSON.parse(this.responseText);
                   console.log("the youtube search:",response);
        
        
                   for (var k = 0; k < response.items.length; k++) {
                       var item = response.items[k];
                       var title = item.snippet.title;
                       var desc = item.snippet.description;
                       var imgUrl = item.snippet.thumbnails.default.url;
                       var videID = response.items[k].id.videoId;
        
                       var newFrame = $("<iframe>");
                       newFrame.attr({
                           src: "https://www.youtube.com/v/" + videID,
                           frameborder: "0",
                           height: "300",
                           width: "450",
                           class:"resultVideo"
                       });
        
                       $("#showVide").append(newFrame);
        
        
        
                       console.log(title, desc, imgUrl, videID);
                       console.log("https://www.youtube.com/watch?v=" + videID);
                   }
        
               }
               xhr.send();
        
         // console.log("this is a vidoe Array;",videoArray);

     }



    });
   


});