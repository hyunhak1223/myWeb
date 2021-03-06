$(document).ready(function(){
   
   $("#skillbarJavascript").animate({width:'70%'},1500);
   $("#skillbarSwift").animate({width:'60%'},1500);
   $("#skillbarHtml").animate({width:'70%'},1500);
   $("#skillbarCss").animate({width:'60%'},1500);




  
  
  if (window.innerWidth <= 960) {
    $("#chart1").easyPieChart({
      scaleColor: false,
      lineWidth: 2,
      barColor: "#01DFD7",
      size:80
     })
  
     $("#chart2").easyPieChart({
      scaleColor: false,
      lineWidth: 2,
      barColor: "#e74c3c",
      size:80    
     })
  
     $("#chart3").easyPieChart({
      scaleColor: false,
      lineWidth: 2,
      barColor: "#2ecc71",
      size:80    
     })
  
     $("#chart4").easyPieChart({
      scaleColor: false,
      lineWidth: 2,
      barColor: "#f1c40f",
      size:80    
     })
     
  } else {
    $("#chart1").easyPieChart({
      scaleColor: false,
      lineWidth: 7,
      barColor: "#01DFD7",
      size:180
     })
  
     $("#chart2").easyPieChart({
      scaleColor: false,
      lineWidth: 7,
      barColor: "#e74c3c",
      size:180    
     })
  
     $("#chart3").easyPieChart({
      scaleColor: false,
      lineWidth: 7,
      barColor: "#2ecc71",
      size:180    
     })
  
     $("#chart4").easyPieChart({
      scaleColor: false,
      lineWidth: 7,
      barColor: "#f1c40f",
      size:180    
     })
  }

});

var lastWidth = window.innerWidth

window.addEventListener('resize', function() {
  var currentWidth = window.innerWidth
  if (lastWidth !== currentWidth) {location.reload();}
  
}, true);

$(".hov-anim").click(function() {
  if ($(this).attr("src") !== $(this).data("animated")) {
    $(this).attr("src", $(this).data("animated"))
  } else {
    $(this).attr("src", $(this).data("static"))  
  }
  
});

//load page
$(window).on('load', function () {
  $("#loading").hide();
});



// Sliding Menu

document.getElementById("menuIcon").onclick = function() {
   
   document.getElementById("slidingHeaderMenuOuter").style.right = "0";
 }
 
 document.getElementById("slidingHeaderMenuCloseButton").onclick = function() {
   document.getElementById("slidingHeaderMenuOuter").style.right = "-320px";
 }


// footer current year
document.getElementById("currentYear").innerHTML = new Date().getFullYear();

//nightmode

var mode = localStorage.getItem("mode");

    document.getElementById("body").classList.add(mode);

    if (mode == "nightMode") {
      document.getElementById("nightButton").value = "jour"
      
    } else {
      document.getElementById("nightButton").value = "nuit"
    }


    document.getElementById("nightButton").onclick = function () {


      var nightButton = document.getElementById("nightButton")
      var body = document.getElementById("body");


      if (nightButton.value == "nuit") {

        body.classList.add("nightMode");
        
        nightButton.value = "jour";
        localStorage.setItem('mode', 'nightMode');
        
        
        
      } else {

        body.classList.remove("nightMode");
        nightButton.value = "nuit";
        localStorage.setItem("mode", "daymode");
      }
    };


   
    


    // $('.goToTop').click( function() {
    //   $( 'html, body' ).animate( { scrollTop : 0 }, 400 );
    //   return false;
    // } );