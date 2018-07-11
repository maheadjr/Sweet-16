var input = "";
var videoArray = [];
var url = "";
var test="";
var saveArray=[];
var dHeight;
var clickToplus=false;
var clickToMinus=false;


var saveHeightFromP= JSON.parse(localStorage.getItem("saveHeight"));
if(saveHeightFromP > 400){
    console.log("more than 400");
    console.log(saveHeightFromP);
    dHeight = saveHeightFromP;
}else {
    dHeight = 400;
    console.log("==400");
}

localStorage.setItem("saveHeight", JSON.stringify(dHeight));

$(document).on("click" , '.savefor', function(event){

dHeight = JSON.parse(localStorage.getItem("saveHeight"));

    if(clickToplus){
        dHeight=dHeight+350;
    }

    event.preventDefault();
      $("#pTag").addClass("display");
      $("img.noShow").addClass("display");
        var saveTitle = $(this).attr("title");
        var saveImg   = $(this).attr("dataImg");
        var saveUrl   = $(this).attr("dataUrl");

        $("div.extend2").css({
            width:1000,
            height:dHeight,
            border: "solid",
            border: "0"
        });
     
       clickToplus=true;

localStorage.setItem("saveHeight", JSON.stringify(dHeight));

        console.log(saveTitle);
        console.log(saveImg);
        console.log(saveUrl);

            // Adding our new todo to our local list variable and adding it to local storage
            // list.push(saveTitle , saveImg ,saveUrl);
            // localStorage.setItem("savelist", JSON.stringify(list));
            localTitle.push(saveTitle);
            localImgSrc.push(saveImg);
            loalUrl.push(saveUrl);
            localStorage.setItem("savelistForTitle", JSON.stringify(localTitle));
            localStorage.setItem("savelistForImg", JSON.stringify(localImgSrc));
            localStorage.setItem("savelistForUrl", JSON.stringify(loalUrl));
           
  putOnPage();

});



// var list = JSON.parse(localStorage.getItem("savelist"));
var localTitle = JSON.parse(localStorage.getItem("savelistForTitle"));
var localImgSrc = JSON.parse(localStorage.getItem("savelistForImg"));
var loalUrl = JSON.parse(localStorage.getItem("savelistForUrl"));



if (!Array.isArray(localTitle)) {
    localTitle = [];
    localImgSrc =[];
    loalUrl=[];
    $("#pTag").removeClass("display");
    $("img.noShow").removeClass("display");
  }


  putOnPage();

function putOnPage() {

    $("#saveTable").empty(); // empties out the html

    var localTitle_2 = JSON.parse(localStorage.getItem("savelistForTitle"));
    var localImgSrc_2 = JSON.parse(localStorage.getItem("savelistForImg"));
    var loalUrl_2 = JSON.parse(localStorage.getItem("savelistForUrl"));

    // var insideList = JSON.parse(localStorage.getItem("savelist"));
  

    // Checks to see if we have any todos in localStorage
    // If we do, set the local insideList variable to our todos
    // Otherwise set the local insideList variable to an empty array
    if (!Array.isArray(localTitle_2)) {
        localTitle_2 = [];
        localImgSrc_2 =[];
        loalUrl_2 =[];
      $("#pTag").removeClass("display");
      $("img.noShow").removeClass("display");
    }

    // render our insideList todos to the page
    for (var i = 0; i < localTitle_2.length; i++) {
        var a =$("<a>");
        var img = $("<img>");
        var span = $("<span>");
        var b = $("<button class='delete'>");
    
        a.attr({
                href:loalUrl_2[i], 
                target: "_blank",
                title: localTitle_2[i]
            }).text(localTitle_2[i]);
        

       
        img.attr({
                src:localImgSrc_2[i],
                id: "SaveImg" + i,
                height: "200",
                width: "350",
                class: "cloudzoom imgFood",
                "data-cloudzoom":"zoomImage: '"+localImgSrc_2[i]+"'"
            });
        

     
        // p.text(localTitle_2[i]);
           
        
           
        b.text("x").attr("data-index", i);
       
        span.prepend(b);
      $("#saveTable").append(span ,a,img);
      $("#pTag").addClass("display");
      $("img.noShow").addClass("display");
    }
  }




  $(document).on("click", "button.delete", function() {
    dHeight = JSON.parse(localStorage.getItem("saveHeight"));

    if(clickToMinus){
        dHeight = dHeight - 355;
    }

    var localTitle_3 = JSON.parse(localStorage.getItem("savelistForTitle"));
    var localImgSrc_3 = JSON.parse(localStorage.getItem("savelistForImg"));
    var loalUrl_3 = JSON.parse(localStorage.getItem("savelistForUrl"));

    if (!Array.isArray(localTitle_3)) {
        localTitle_3 = [];
        localImgSrc_3 =[];
        loalUrl_3 =[];
        $("#pTag").removeClass("display");
        $("img.noShow").removeClass("display");
      }


      if (Array.isArray(localTitle_3)) {
        localTitle_3 = [];
        localImgSrc_3 =[];
        loalUrl_3 =[];
        $("#pTag").removeClass("display");
        $("img.noShow").removeClass("display");
      }


    var localTitle_4 = JSON.parse(localStorage.getItem("savelistForTitle"));
    var localImgSrc_4 = JSON.parse(localStorage.getItem("savelistForImg"));
    var loalUrl_4 = JSON.parse(localStorage.getItem("savelistForUrl"));


    var currentIndex = $(this).attr("data-index");

    // Deletes the item marked for deletion
    localTitle_4.splice(currentIndex, 1);
    localImgSrc_4.splice(currentIndex, 1);
    loalUrl_4.splice(currentIndex, 1);

    localTitle = localTitle_4;
    localImgSrc = localImgSrc_4;
    loalUrl = loalUrl_4;

    localStorage.setItem("savelistForTitle", JSON.stringify(localTitle));
    localStorage.setItem("savelistForImg", JSON.stringify(localImgSrc));
    localStorage.setItem("savelistForUrl", JSON.stringify(loalUrl));
    

    $("div.extend2").css({
        width:1000,
        height:dHeight,
        border: "solid",
        border: "0"
    });
    clickToMinus=true;
    localStorage.setItem("saveHeight", JSON.stringify(dHeight));

    putOnPage();
  });

  




$("#submit").on("click", function (event) {

    event.preventDefault();
   $("#showAPI").empty();
   $(".resultVideo").remove();
   input="";
   videoArray=[];
   url = "";
   test="";

   $("#secondTab").removeClass('active');
   $("#tab-2").removeClass('active');
   $("#firstTab").addClass("active");
   $("#tab-1").addClass("active")

   

    input = $("#userInput").val().trim();
    // console.log(input);

   $(".display").removeClass("display");
   $(".forSpace").removeClass("forSpace");

    var query2 = "https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=9e19b48478f4603393892c6669180774&q=" + input + "&count=5&sort=r";
    $.ajax({
        url: query2,
        method: "get"
    }).then(function (response) {

        response = JSON.parse(response);

        console.log(response);

        for (var i = 0; i < 5; i++) {
            // $("#showAPI").text(response.recipes[i].title);
            console.log(i);
            var newImg = $("<img>");
            newImg.attr({
                src: response.recipes[i].image_url,
                id: "img" + i,
                height: "200",
                width: "350",
                class: "cloudzoom imgFood roundImg",
                "data-cloudzoom":"zoomImage: '"+response.recipes[i].image_url+"'"
            });

            









            // console.log(response.recipes[i].image_url);
            var newAnchor = $("<a>");
            var newInput = $("<input>");

            newInput.attr({
                id:"savedFor"+i,
                type:"submit",
                class:"savefor",
                name:"food",
                title:response.recipes[i].title,
                dataImg:response.recipes[i].image_url,
                dataUrl: response.recipes[i].source_url,
                value: "Save"
            })

            console.log("new anchor made");
            newAnchor.attr({
                href: response.recipes[i].source_url,
                target: "_blank",
                title: response.recipes[i].title
            }).text(response.recipes[i].title);
            console.log("attributes added");

            var newDiv = $("<div>");
            newDiv.attr({
                dataname: response.recipes[i].title,
                id: "recipes" + i,
                class: "recipeName",
            }).append(newAnchor, newInput);

            $("#showAPI").append(newDiv, newImg);


             test = $("#recipes"+i).attr("dataname");
         //    console.log(test.length);
            for(var j=0 ; j< test.length ; j++){
             test = test.replace(" ","+");
            }
            videoArray.push(test);
            // console.log(videoArray);
         
         // console.log("this is a vidoe Array;",videoArray);


        }
    });

    $("div.extend").css({
        width:1200,
        height:1850,
        border: "solid",
        border: "0"
    });



    setTimeout(function() {
        console.log("timeout workin");

        $(".recipeName").each(function(index, element){
            console.log("===============================");
            // console.log(index);
            var searchName = $(this).text();
            searchName = v.replaceAll(searchName, " ", "+");
            console.log(searchName);
    
            var queryURL =
            "https://www.googleapis.com/youtube/v3/search" +
            "?key=AIzaSyD2bbk3Tu1dZCwbsiDrqrv5C0NAZgDWoCI" +
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
    }, 3000);
});




$('.tab-list').each(function(){

    $(this).on('click', '#firstTab' , function(e){
      e.preventDefault();
    //   console.log("firstTab");
      $("#secondTab").removeClass('active');
      $("#tab-2").removeClass('active');
      $("#firstTab").addClass("active");
      $("#tab-1").addClass("active");
    });

    $(this).on('click', '#secondTab' , function(e){
        e.preventDefault();
        // console.log("secondTab");
        var saveHeightFromP= JSON.parse(localStorage.getItem("saveHeight"));
         dHeight =  saveHeightFromP;
         $("div.extend2").css({
            width:1000,
            height:dHeight,
            border: "solid",
            border: "0"
        });
         console.log("wfergwgr", dHeight);
        $("#firstTab").removeClass('active');
        $("#tab-1").removeClass('active');
        $("#secondTab").addClass("active");
        $("#tab-2").addClass("active");
      });
});



$(document).on("click" , '#savedFor0', function(event){
    event.preventDefault();
      $("#savedFor0").addClass("display");
});
$(document).on("click" , '#savedFor1', function(event){
    event.preventDefault();
    $("#savedFor1").addClass("display");

});
$(document).on("click" , '#savedFor2', function(event){
    event.preventDefault();
    $("#savedFor2").addClass("display");

});
$(document).on("click" , '#savedFor3', function(event){
    event.preventDefault();
    $("#savedFor3").addClass("display");

});
$(document).on("click" , '#savedFor4', function(event){
    event.preventDefault();
    $("#savedFor4").addClass("display");

});