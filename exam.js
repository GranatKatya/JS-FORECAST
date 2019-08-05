
"use script"
let todayforecastor5day="today";
var days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
var days1 = ['Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
var months = ['January','February','March','April','May','June','July','August','September','October','November','December'];
var months1 = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sept','Oct','Nov','Dec'];
let latitude ;
let langitude;
// let isError= false;
 let correctpathwithalreadysearch; 
let currenthighlightedday;


var myMap = new Map();
myMap.set( "clear sky", "Image/sun.png");
myMap.set( "few clouds", "Image/40182.png");
myMap.set( "scattered clouds", "Image/cloudly.png");
myMap.set( "broken clouds", "Image/cloudly.png");
myMap.set( "rain", "Image/sunrain.png");
myMap.set( "shower rain", "Image/rain.png");
myMap.set( "thunderstorm", "Image/gr.png");
myMap.set( "snow", "Image/snow.png");
myMap.set( "mist", "Image/mist.png");
myMap.set( "overcast clouds", "Image/cloudly.png");
myMap.set( "light rain", "Image/rain.png");
myMap.set( "moderate rain", "Image/sunrain.png");
myMap.set( "light rain", "Image/rain.png");

var WindDirectionandDegrees = new Map();
WindDirectionandDegrees.set( 348.75, "N");
WindDirectionandDegrees.set( 11.25, "NNE");
WindDirectionandDegrees.set( 33.75, "NE");
WindDirectionandDegrees.set( 56.25, "ENE");
WindDirectionandDegrees.set( 78.75, "E");
WindDirectionandDegrees.set( 101.25, "ESE");
WindDirectionandDegrees.set( 123.75, "SE");
WindDirectionandDegrees.set( 146.25, "SSE");
WindDirectionandDegrees.set( 168.75, "S");
WindDirectionandDegrees.set( 191.25, "SSW");
WindDirectionandDegrees.set( 213.75, "SW");
WindDirectionandDegrees.set( 236.25, "WSW");
WindDirectionandDegrees.set( 258.75, "W");
WindDirectionandDegrees.set( 281.25, "WNW");
WindDirectionandDegrees.set( 303.75, "NW");
WindDirectionandDegrees.set( 326.25, "NNW");
WindDirectionandDegrees.set( 348.7, "N");

//http://snowfence.umn.edu/Components/winddirectionanddegreeswithouttable3.htm
//let keys = Array.from( myMap.keys() );
// ["a", "b"]
let keys = [...WindDirectionandDegrees.keys()];
//console.log("keus:"+keys)




let preniouscard = 0;


String.prototype.replaceAt=function(index, replacement) {
  return this.substr(0, index) + replacement+ this.substr(index + replacement.length);
}



// function myFunction(x) {
  
//     if (x.matches) { // If media query matches
     
//     //   console.dir(  $("#sevencolumn"));
//     //   $("#sevencolumn").remove();

//       $('*[id*=sevencolumn]:visible').each(function() {
//     //     this.remove();
//     //   $( this).css("visibility", "hidden");
//       $( this).css("display", "none");
    
//         });
//     }
//     else {
//      document.body.style.backgroundColor = "white";
//     }
//   }

//   //let state = "first";
  function myFunction1(x) {
  
    if (x.matches) { // If media query matches
                                                                      
                                                                        // $('*[id*=sixcolumn]:visible').each(function() {
                                                                        //  this.remove();
                                                                        //    $( this).css("visibility", "hidden");
                                                                        //  $( this).css("display", "none");
                                                                        
                                                                        // }); 
                                                                        
                                                                        // $('*[id*=fivecolumn]:visible').each(function() {
                                                                        //     $( this).css("display", "none");
                                                                        //    this.remove();
                                                                        //    $( this).css("visibility", "hidden");
                                                                        // }); 

                                                                        
                                                                        // // // // $("#rowsfortowns").append( '<div class="row rowfirstdivsforbearbyplaces" style="color: black;" id="newrowfordivtown"></div>' );
                                                                        // // // // console.dir(  $("#rowsfortowns"));

                                                                        // // // // $("#transferdiv").appendTo("#newrowfordivtown");
    

   
    $('*[id*=transferdiv]').each(function(){
      $(this).css( { "margin-left" : "10px", "margin-right" : "0px" } );
      $(this).addClass('col-11').removeClass('col-5');
    }); 
  
                        // $('*[id*=rowfirstdivsforbearbyplaces]:visible').each(function(){  
                                      //   console.dir(this);
                                      // $(this).css( {   "margin-bottom" : "0px", "margin-top": "0px" } );

    $('#rowfirstdivsforbearbyplaces').css( { "margin-bottom" : "0px"} );         
    $("[id=rowfirstdivsforbearbyplaces]:eq(1)").css( { "margin-top": "0px"} );
   

    
   
    $('#ptransfer').addClass('col-12').removeClass('col-4');
    $('#ptransfer1').addClass('col-5').removeClass('col-4');
    

    $('#scrollingwrapper').css( {  "overflow-x" : "scroll"} );     //.scrollLeft( 300 );//.css( { "overflow-y" : "visible", "overflow-x" : "scroll"} );         
   


    $('#firsterrorimg').css( { "height" : "100px" , "width":"150px"} ); 
    $('#seconderrorimg').css( { "height" : "150px" , "width":"300px"} ); 

    $('*[id*=card1]').each(function(){
      $(this).css( { "min-width" : "150px" } );
    }); 
   
    $('*[id*=transferdiv]').each(function(){
      $(this).css( { "display" : "block"} );
     // console.dir(this);
    }); 
  //   if(state=== "second"){
  //     console.dir(state);
  //   $("#transferdiv").each(function(){
  //     $(this).css( { "margin-left" : "60px", "margin-right" : "0px" } );
  //   }); 
  //   state ="first";
  // }else{
  //   console.dir(state);
  //   state ="second";
  // }

    
  } 
    // else {
    //  document.body.style.backgroundColor = "white";
    // }
  }


//   function myFunctionx(x) {
//  // console.log( $("#table"));
//     if (x.matches) { // If media query matches
    
//     //     $("#table").find('tr').each(function(){
//     //         $(this).find('td').after('<td>new cell added</td>');
//     //    });
// console.log("992");

//     $('*[id*=sevencolumn]').each(function() {
//         //     this.remove();
//         //   $( this).css("visibility", "hidden");
//           $( this).css("display", " table-cell ");
        
//             });
    
//     }
//     else {
//      document.body.style.backgroundColor = "white";
//     }
//   }
 
  
  function myFunctionx1(x) {
    //console.log( $("#table"));
       if (x.matches) { // If media query matches
       
          //  $("#table").find('tr').each(function(){
          //      $(this).find('td').after('<td>new cell added</td>');
          // });
   //console.log(" 769");
   
          // $('*[id*=sixcolumn]').each(function() {         
          //    $( this).css("display", " table-cell ");           
          // });

          // $('*[id*=sixcolumn]').each(function() {
          //   $( this).css("display", " table-cell ");         
          // }); 

         // console.dir("7777");
   
          
          $('*[id*=rowfirstdivsforbearbyplaces]').each(function(){
            $(this).css( { "margin-bottom" : "10px", "margin-top": "10px" } );
           // console.dir(this);
          }); 
        
            
          $('#transferdiv').css( { "margin-left" : "60px"} );         
         $("[id=transferdiv]:eq(1)").css( { "margin-left" : "10px", "margin-right" : "30px"} );
         $("[id=transferdiv]:eq(2)").css(  { "margin-left" : "60px"}  );     
         $("[id=transferdiv]:eq(3)").css( { "margin-left" : "10px", "margin-right" : "30px"} );
         // console.dir( $("[id=transferdiv]:eq(1)"));
        

                      $('*[id*=transferdiv]:visible').each(function(){
                        $(this).addClass('col-5').removeClass('col-11');
                      }); 

          
    $('#ptransfer').addClass('col-4').removeClass('col-12');
    $('#ptransfer1').addClass('col-4').removeClass('col-5');


    $('#scrollingwrapper').css( {  "overflow-x" : "visible"} );


    
    $('#firsterrorimg').css( { "height" : "250px" , "width":"300px"} ); 
    $('#seconderrorimg').css( { "height" : "300px" , "width":"600px"} ); 

    $('*[id*=card1]').each(function(){
      $(this).css( { "min-width" : "100px" } );
    }); 

       }
      
     }
    
  
  // var x = window.matchMedia("(max-width: 991px)")
  // myFunction(x) // Call listener function at run time
  // x.addListener(myFunction) // Attach listener function on state changes
  
  // var xx = window.matchMedia("(min-width: 992px)")
  // myFunctionx(xx) // Call listener function at run time
  // xx.addListener(myFunctionx) // Attach listener function on state changes




  var x1 = window.matchMedia("(max-width: 768px)")
  myFunction1(x1) // Call listener function at run time
  x1.addListener(myFunction1) // Attach listener function on state changes

  var xx1 = window.matchMedia("(min-width: 769px)")
  myFunctionx1(xx1) // Call listener function at run time
  xx1.addListener(myFunctionx1) // Attach listener function on state changes




  $( "#5dayforecast" ).click(function() {
       
    $("#firstrow").hide();
    $("#threrdrow").hide();
    $("#hiderow").show();
    $("#404error").hide();
    $("#hourlyrow").show();
   // $("#hiderow").css("display", "block");
   todayforecastor5day="5day";

   var ind =  days1.indexOf( $(currenthighlightedday).children(":first").text());
   $("#HOURLYforecastToday").html(days[ind]);
  });


  
  $( "#today" ).click(function() {
    $("#firstrow").show();
    $("#threrdrow").show();
    $("#hiderow").hide();
    $("#404error").hide();
    $("#hourlyrow").show();
    todayforecastor5day="today";
   // $("#hiderow").css("display", "none");
   
   $("#HOURLYforecastToday").html("Today");
  });







  
//   function getLocation(callback) {
//     alert("callback");
//     var promise = new Promise(function(resolve, reject) { alert("Promise");
//         if (navigator.geolocation) {
//           const position12 = {
//             long: null,
//             lat: null
//           };
//             navigator.geolocation.getCurrentPosition( 
//                 function(position){ alert("getCurrentPosition");
//                   position12.long =  position.coords.longitude;
//                   position12.lat = position.coords.latitude;

//                   lat =position.coords.latitude;
//                   log = position.coords.longitude;
//                     alert("@" + position.coords.latitude + "," + position.coords.longitude)
//                 });

//             return (position12);
//         } else {
//           reject("Unknown");
//         }
//     });

//     return promise;
// }


var lat ;
var log;
let firstdowload = 0;
let firstdowload1 = 0;
 getLocation();

 $(function() { 


// var locationPromise = getLocation();
// locationPromise
//       .then(function(loc) {  alert("loc" +loc); console.log(loc); })
//       .catch(function(err) { console.log("No location"); });



    // if (navigator.geolocation) {
    //   navigator.geolocation.getCurrentPosition(showPosition);
    //   alert("geolocation");
    // } else { 
    //   alert("Geolocation is not supported by this browser.");
    // }
   
  mainajaxrequest();

    $( "#send" ).click(function() {
      
      mainajaxrequest();

  }); 
 });











////////////////////////////////////////geolocation

function getLocation() {
  if (navigator.geolocation) {
     navigator.geolocation.getCurrentPosition(showPosition);
  //   alert("getLocation");
  } else { 
    alert("Geolocation is not supported by this browser.");
  }
}

function showPosition(position) { 
  //alert("showPosition");
  lat =position.coords.latitude;
  log = position.coords.longitude;
 // alert("lat "+ lat);

 // alert("Latitude: " + position.coords.latitude +  " Longitude: " + position.coords.longitude);
}
////////////////////////////////////////geolocation



 ///////////////////main


 function mainajaxrequest() {
  
 
  //alert("mainajaxrequest");
  //alert("lat "+ lat);
 // let position =   getLocation();

 let today;
 let fiveday;
 if(firstdowload == 0 ){
 
  //alert("firstdowload == 0 ");
   today = "http://api.openweathermap.org/data/2.5/weather?lat="+ lat +"&lon="+ log + "&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
   fiveday = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ log + "&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
  

  
 } else{//alert("firstdowload = 1");
   today = "http://api.openweathermap.org/data/2.5/weather?q="+$("#searchtown").val()+"&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
   fiveday =  "http://api.openweathermap.org/data/2.5/forecast?q="+$("#searchtown").val()+"&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
  // alert("today " + today);
  // alert("fiveday " + fiveday);
  }firstdowload++;


  // alert( $("#searchtown").val());

  var settings = {
    'cache': false,
    'dataType': "jsonp",
    "async": true,
    "crossDomain": true,
    "url": today,//"http://api.openweathermap.org/data/2.5/forecast?lat=46.4596282&lon=30.4309087&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322",
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      }
  }

 



  // if( todayforecastor5day == "today" ){
  //   settings.url =today;
  //   alert( settings.url);
  // }else if(todayforecastor5day == "5day"){
  //   settings.url =fiveday;
  //   alert( settings.url);
  // }



//let url =  settings.url;


var ajaxRequest = $.ajax(settings);

//When the request successfully finished, execute passed in function
 ajaxRequest.done(function(msg){
   //do something
  // alert("done");
  if(preniouscard != 0){   preniouscard.css({"background-color" : "#ececec" }); }
  preniouscard = $('*[id*=card1]:first');
  //alert("preniouscard" + preniouscard);
  //console.dir(preniouscard);
  $('*[id*=card1]:first').css({"background-color" : "white" });
  correctpathwithalreadysearch  =msg.name + "," +msg.sys.country;
  //alert(" correctpathwithalreadysearch  =msg.name;" +  correctpathwithalreadysearch );

  if(firstdowload == 1 ){ 
    //alert( "msg.city.name " + msg.name );
    $("#searchtown").val(msg.name + "," +msg.sys.country);
   
   // if(preniouscard != 0){    $("#card1").css({"background-color" : "#ececec" }); }
 
    firstdowload++;
  }
   console.log(msg);

 
   if( todayforecastor5day == "today" ){
    $("#firstrow").show();
    $("#threrdrow").show();
    $("#hourlyrow").show();     
  }else if(todayforecastor5day == "5day"){
      $("#hiderow").show();
      $("#hourlyrow").show();  
      
     

  }




{

///////////////////////////////////////////////////////today



$("#currentweathertemp").html(msg.main.temp+"°C");      
//console.dir(msg.main.temp); // alerts "Sample Description"
//console.dir(msg.main.humidity); // alerts "Sample Description"

let cel = msg.main.temp;
let T = (cel  * 9/5) + 32 ;
// alert("far " + T);  

let  R = msg.main.humidity;// относительная влажность
let HeatIndex = (-42.379 + (2.04901523 * T) + (10.14333127 * R) - (0.22475541 * T*R)  - (6.83783e-3 * T*T) - (5.481717e-2 * R*R) + (1.22874e-3 * T*T*R) + (8.5282e-4 * T*R*R) - (1.99e-6 * T*T*R*R));
let c = (HeatIndex - 32) * 5/9;

//  alert("HeatIndex " + HeatIndex);
// alert("C " + c);


//alert( Math.round(c * 100) / 100 ); // 3.456 -> 345.6 -> 346 -> 3.46

$("#realfeel").html("Real Feel "+  Math.round(c * 100) / 100  +"°C");    
//sunny clouds
$("#description").html(msg.weather[0].description);    
// alert(msg.weather[0].description);




var sec =  msg.sys.sunrise;
var date = new Date(sec * 1000);
//var timestr = date.toLocaleTimeString();

var timestr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , hour12: true});

//  alert(date);
// alert(timestr);
$("#Sunraise").html(timestr );

var sec1 =  msg.sys.sunset;
var date1 = new Date(sec1 * 1000);
var timestr1 = date1.toLocaleTimeString([],  {hour: '2-digit', minute:'2-digit', hour12: true});


// alert(sec1);
// alert(date1);
// alert(timestr1);

//timestr1.toLocaleString('en-US', {  hour12: true });
// alert(timestr1);
$("#Sunset").html(timestr1 );


const cdate1 = new Date(date);
const cdate2 = new Date(date1);
const diffTime = Math.abs(cdate2.getTime() - cdate1.getTime());
// var timestr2 = diffTime.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , hour12: true});
//alert(timestr2);
const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); //day
//alert(diffTime/ (1000 * 60 )); //min
let min  = diffTime/ (1000 * 60 );
// alert(min/ ( 60 )); //hour

// alert(diffDays);
var a = 1.2345; 
// вариант 1
var b = a - Math.floor (a);
// alert (b*100);
//alert(Math.trunc((min/ ( 60 ) - Math.floor (min/ ( 60 )))*100));
$("#Duration").html(  Math.trunc(min/ ( 60 ))+ ":"+   Math.trunc((min/ ( 60 ) - Math.floor (min/ ( 60 )))*100) +" hr" );
// $("#firstimgforcurrentweather").attr('src','http://openweathermap.org/img/wn/'+ (msg.weather[0].icon.replaceAt(2, "d")) +'@2x.png');
$("#firstimgforcurrentweather").attr('src', myMap.get(msg.weather[0].description));


///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////
// alert(latitude);
// alert(langitude);

latitude = msg.coord.lat;
langitude = msg.coord.lon;
let nearbyplaces =  "http://api.openweathermap.org/data/2.5/find?lat="+latitude + "&lon=" + langitude +"&cnt=6&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
//ajax

var settings2 = {
'cache': false,
'dataType': "jsonp",
"async": true,
"crossDomain": true,
"url": nearbyplaces,
"method": "GET",
"headers": {
  "accept": "application/json",
  "Access-Control-Allow-Origin":"*"
}



}
var ajaxRequest2 = $.ajax(settings2);

//When the request successfully finished, execute passed in function
ajaxRequest2.done(function(msg2){
 //do something
 //alert("done ajaxRequest2");
 //console.dir("msg2 " );
console.dir(msg2);

 let count = 1;
 for(var i = 1 ; i<msg2.list.length; i++ ){
    if(count<5){  
   //   alert("count"+ count);         
      $("#nearbuplacesname" +count ).html(msg2.list[i].name);          
      $("#nearbuplacestemp" +count).html(msg2.list[i].main.temp + "°C");           
    //  $("#nearbuplacesimg" +count).attr('src','http://openweathermap.org/img/wn/'+ (msg2.list[i].weather[0].icon).replaceAt(2, "d") + '@2x.png');
    $("#nearbuplacesimg" +count).attr('src',  myMap.get(msg2.list[i].weather[0].description) );
    

  
      count++;
    }
}

});
ajaxRequest2.fail(function(jqXHR, status){
//do something else
alert("Dont find nearby places ");
});

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

hourlyforecast(0);

//////////////////////////////////////////////////////////////////////today



}

{




////////////////////////////////////////////////////5 day

///////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////

var settings3 = {
'cache': false,
'dataType': "jsonp",
"async": true,
"crossDomain": true,
"url": fiveday,
"method": "GET",
"headers": {
   "accept": "application/json",
   "Access-Control-Allow-Origin":"*"
 }



}
var ajaxRequest3 = $.ajax(settings3);

//When the request successfully finished, execute passed in function
ajaxRequest3.done(function(message){   

    var arrayOfStrings = message.list[0].dt_txt.split(' ');
    var now = new Date(arrayOfStrings[0]);
  
      let countdays = 1;
      let tempdate = now.getDate() -1;
      //alert(msg.list.length);
      //alert("tempdate " + tempdate );
      for(var i = 0 ; i<message.list.length; i++ ){
      var  arraystr = message.list[i].dt_txt.split(' ');
      var now1 = new Date(arraystr[0]);
      //  alert(now1.getDate());
      // alert((now1.getDate()- tempdate ));
      if(countdays < 6 &&  (now1.getDate()- tempdate )== 1 ){
  
      // alert("doooooooooooooooooooooooooneeeeeeeeeeeeeeeeeeeeeeeeeeeee");   
            
        var arrayOfStrings = message.list[i].dt_txt.split(' ');
      //  console.dirxml(arrayOfStrings);
        var now = new Date(arrayOfStrings[0]);
        var day = days1[ now.getDay() ];
        //alert( days1[ now.getDay() ]);
        var month = months1[ now.getMonth() ];
        //alert( months1[ now.getMonth() ]);
        
        $("#hiderowtoday" +countdays ).html(day);
        $("#hiderowtodaymounth" +countdays).html(month + " " + now.getDate());
        $("#hiderowtodaytemp" +countdays).html(message.list[i].main.temp + "°C");
        $("#hiderowtodaydescription" +countdays).html(message.list[i].weather[0].description);
        //  $("#hiderowtodayimg" +countdays).attr('src','http://openweathermap.org/img/wn/'+ (msg.list[i].weather[0].icon).replaceAt(2, "d") + '@2x.png');
        $("#hiderowtodayimg" +countdays).attr('src',myMap.get(message.list[i].weather[0].description));
      
  
        countdays++;
        tempdate = now1.getDate();
      }
    }
    
});
ajaxRequest2.fail(function(jqXHR, status){
 //do something else
 alert("Dont find 5-day forecast");
});



////////////////////////////////////////////////////5 day
}

$("#today").attr("disabled", false);
$("#5dayforecast").attr("disabled", false);


$("#today").css("background-color", "transparent");
$("#5dayforecast").css("background-color", "transparent");

$("#404error").hide();
});

 //When the request failed, execute the passed in function
 ajaxRequest.fail(function(jqXHR, status){
   //do something else
   //alert("error");

   $("#firstrow").hide();
   $("#threrdrow").hide();
   $("#hiderow").hide();
   $("#hourlyrow").hide();
   $("#404error").show();
 
   $("#today").attr("disabled", true);
   $("#5dayforecast").attr("disabled", true);

   
   $("#today").css("background-color", "gray");
   $("#5dayforecast").css("background-color", "gray");
   
   
  // alert(jqXHR);
  // alert(status);
 });



//     $.ajax(  
//       {
//         'cache': false,
//         'dataType': "jsonp",
//         "async": true,
//         "crossDomain": true,
//         "url": url,
//         "method": "GET",
//         "headers": {
//             "accept": "application/json",
//             "Access-Control-Allow-Origin":"*"
//           },
//          "success": function (json) {
//           console.log(json);
//           //alert("success");
//         },
//         error: function (xhr, status, errorThrown) {
//           alert("error");
//         },
//       }

// );
// .done(function (response) {
//   alert("done");
//       console.log(response);
//     });




 }

 function hourlyforecast(indexinarray) {  
//alert("hourlyforecast");




let fiveday;
 
  if(firstdowload1 == 0 ){

 //alert("firstdowload1 == 0 ");
   fiveday = "http://api.openweathermap.org/data/2.5/forecast?lat="+ lat +"&lon="+ log + "&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
  
 
  } else{//alert("firstdowload1 = 1");
 //alert("fiveday  12123"); 
   //fiveday =  "http://api.openweathermap.org/data/2.5/forecast?q="+$("#searchtown").val()+"&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
   fiveday =  "http://api.openweathermap.org/data/2.5/forecast?q="+ correctpathwithalreadysearch +"&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
  // alert(fiveday);
   previospath =fiveday;
  } firstdowload1++;


 // let fiveday =  "http://api.openweathermap.org/data/2.5/forecast?q="+$("#searchtown").val()+"&units=metric&APPID=d0455fd022f920098cc268e4b6d7b322";
     
  var settings2 = {
    'cache': false,
    'dataType': "jsonp",
    "async": true,
    "crossDomain": true,
    "url": fiveday,
    "method": "GET",
    "headers": {
        "accept": "application/json",
        "Access-Control-Allow-Origin":"*"
      }
  
  
  
    }
    var ajaxRequest2 = $.ajax(settings2);

     ajaxRequest2.done(function(msg3){
     
       console.log(msg3);

       
    var arrayOfStrings = msg3.list[0].dt_txt.split(' ');
    var now = new Date(arrayOfStrings[0]);
    let day = now.getDate();
  //  alert("indexinarray" +indexinarray);
    let dayindex = day + indexinarray;


       let hours=0;
       let countdate=1;
       let lastdate ;
       let lastdateflag =0 ;
       let flag = false;
       for(var i = 0 ; i<msg3.list.length; i++ ){
            
          var arrayOfStringsq = msg3.list[i].dt_txt.split(' ');
          var nowq = new Date(arrayOfStringsq[0]);
          let dayq = nowq.getDate();
       //   alert(dayq - day  );
          if(countdate < 7  &&  (dayq - day  ==indexinarray || flag) ){          
         // if(day == dayq  &&  countdate < 7 ){
          //   hours++;
            flag= true;
         //   alert("inside");
            var date = new Date(msg3.list[i].dt_txt); //console.dir(date);
            var timestr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , hour12: true});
           // alert(timestr);
          //  alert( date.getHours());


          //   if(  lastdateflag == 1){  alert("lastdateflag");
          //     timestr = lastdate.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , hour12: true}); }
            $("#time" +countdate ).html(timestr);
            $("#timeimg" +countdate).attr('src',myMap.get(msg3.list[i].weather[0].description));
          //  $("#timedesc" +countdate ).html(msg3.list[i].weather[0].description);
            $('*[id*=timedesc' +countdate + ']:first').html(msg3.list[i].weather[0].main);
           //  console.dir(  $('[id*=timedesc' +countdate + ']  '));
           $('[id*=timetemp' +countdate + ']').html(  (Math.round(msg3.list[i].main.temp  * 10) / 10) +"°");
           let cel = msg3.list[i].main.temp;
           let T = (cel  * 9/5) + 32 ;     
          let  R = msg3.list[i].main.humidity;// относительная влажность
          let HeatIndex = (-42.379 + (2.04901523 * T) + (10.14333127 * R) - (0.22475541 * T*R)  - (6.83783e-3 * T*T) - (5.481717e-2 * R*R) + (1.22874e-3 * T*T*R) + (8.5282e-4 * T*R*R) - (1.99e-6 * T*T*R*R));
          let c = (HeatIndex - 32) * 5/9;
           $("#timerealfeel" +countdate ).html( (Math.round(c * 10) / 10) +"°");
           
           var durectionkey;
           for(var j = 0 ; j< keys.length; j ++){
          //  alert("msg3.list[i].wind.deg  "+ msg3.list[j].wind.deg );
            //alert("keys[i]  "+ keys[j] );
              if( msg3.list[i].wind.deg >= keys[j] &&  msg3.list[i].wind.deg < keys[j+1]){
              //  alert("el"+ msg3.list[i].wind.deg );
               
                durectionkey = keys[j];
                
             //   alert("durectionkey "+ durectionkey);
              }else{ 
                        if( msg3.list[i].wind.deg >= 348.75 ){           
                  //  alert("el111111111111111111111111111111111111111111"+ msg3.list[i].wind.deg );
                        durectionkey = 348.75;
                   //   alert("348.75 11111111111111111111111111 "+durectionkey);
                      } else if( msg3.list[i].wind.deg < 11.25 ){
                   //   alert("el 11111111111111111111111111111111111"+ msg3.list[i].wind.deg );
                        durectionkey = 348.75;
                  //  alert("348.75 111 111111111111111111111111111111111111"+durectionkey);
                      }
            }
           // alert("jjjjjjjjjjjjj"+ j);
           }
         
           $("#timewind" +countdate ).html(msg3.list[i].wind.speed +  WindDirectionandDegrees.get(durectionkey) );
           
            countdate++;
          // }else{           
          //   lastdate = new Date(msg3.list[i-1].dt_txt); console.dir("lastdate  = " + lastdate);
          //   lastdate.setHours( lastdate.getHours() + 3 );
          //   console.dir(lastdate);
          //   lastdateflag=1;

          //   i=-1;
          //   alert("i = " + i );
          //   alert("countdate " + countdate);
          //   if(countdate ==7)  {     alert("countdate break" + countdate); break;}
          }

      }
     // alert("hours" +hours);

        // console.dir(arrayOfStrings);
        // var date = new Date(msg3.list[0].dt_txt); console.dir(date);
        // var timestr = date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit' , hour12: true});
        // alert(timestr);
        // alert( date.getHours());

        // //
        //  $("#time1").html(timestr);  
        //  $("#time2").html();   

// if(hours>=2){}
// else if (hours<2){

//   $("#time1").html(timestr);  
//   $("#time2").html();   
//   $("#time3") .html(); 
//   $("#time4") .html();  
//   $("#time5").html();   
//   $("#time6").html(); 
// }



       

     });
     ajaxRequest2.fail(function(jqXHR, status){
      //do something else
      alert("Dont find hourly forecast  ");
    //  isError = true;
     });


}


  












//let preniouscard = 0;
$(".card1").on("click", (event) => {
    //var  player = $(event.currentTarget).attr("value");
    //   console.log($(event.currentTarget));

      
    // var listItem = $('.card1');
    // console.dir(listItem);
    // alert('Index: ' + $($(event.currentTarget)).index(listItem));
    var index = $(event.currentTarget).index();
    //alert('Index: ' +index);


    hourlyforecast(index);
  //  alert($(event.currentTarget).children(":first").text());
 //   alert(  days1.indexOf( $(event.currentTarget).children(":first").text()));
   var ind =  days1.indexOf( $(event.currentTarget).children(":first").text());
 //  alert(days[ind]);
    $("#HOURLYforecastToday").html(days[ind]);

    if(preniouscard != 0){   preniouscard.css({"background-color" : "#ececec" }); }
 
    preniouscard = $(event.currentTarget);
    $(event.currentTarget).css({"background-color" : "white" });
    currenthighlightedday = event.currentTarget;
    });


