$(document).ready(function(){
   
   $("#skillbarJavascript").animate({width:'70%'},1500);
   $("#skillbarSwift").animate({width:'60%'},1500);
   $("#skillbarHtml").animate({width:'70%'},1500);
   $("#skillbarCss").animate({width:'60%'},1500);


   $(".chart").easyPieChart({
    scaleColor: false,
    lineWidth: 7,
    barColor: "#01DFD7",
    size:80    
   })

   


});

$(".hov-anim").mouseover(function() {
  $(this).attr("src", $(this).data("animated"))
}),
$(".hov-anim").mouseout(function() {
  $(this).attr("src", $(this).data("static"))
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