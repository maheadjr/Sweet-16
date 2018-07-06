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
    // console.log(input);

   

    var query2 = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=9e19b48478f4603393892c6669180774&q=" + input + "&count=5&sort=r";
    $.ajax({
        url: query2,
        method: "get"
    }).then(function (response) {

        response = JSON.parse(response);

        // console.log(response);

        for (var i = 0; i < 5; i++) {
            // $("#showAPI").text(response.recipes[i].title);

            var newImg = $("<img>");
            newImg.attr({
                src: response.recipes[i].image_url,
                id: "img" + i,
                height: "200",
                width: "350",
            });

            // console.log(response.recipes[i].image_url);


            var newDiv = $("<div>");
            newDiv.attr({
                "data-name": response.recipes[i].title,
                id: "recipes" + i,
                class: "recipeName",
            }).text(response.recipes[i].title);

            $("#showAPI").append(newDiv, newImg);


             test = $("#recipes"+i).attr("data-name");
         //    console.log(test.length);
            for(var j=0 ; j< test.length ; j++){
             test = test.replace(" ","+");
            }
            videoArray.push(test);
            // console.log(videoArray);
         
         // console.log("this is a vidoe Array;",videoArray);


        }

       

        


    });
   
    setTimeout(function() {
        $(".recipeName").each(function(index, element){
            console.log("===============================");
            console.log(index)
            var searchName = $(this).text().replace(" ","+");;
            console.log(searchName);
    
            var queryURL =
            "https://www.googleapis.com/youtube/v3/search" +
            "?key=AIzaSyAa5bkvvpgp54UKa9W_Tf5OIgoB9HT1l5E" +
            "&part=snippet" +
            "&q=how+to+make+" + searchName +
            "&type=video" +
            "&maxResults=1"+
            "&order=relevance" +
            "&videoCaption=closedCaption";
    
            $.ajax({
                url: queryURL,
                method: "GET",
    
            }).then(function(response){
                var videoID = response.items[0].id.videoId;
                var youtubeURL = "https://www.youtube.com/embed/" + videoID;
    
                var newFrame = $("<object>");
                newFrame.attr({
                    data: youtubeURL,
                    frameborder: "0",
                    height: "300",
                    width: "450",
                    class:"resultVideo",
                });
    
                $(".row-" + index).append(newFrame);
    
            })
    
        })
    }, 800);

    

});