$(document).ready(function() {

    $("#linkToText").on("click", function() {
      $("#myText").show();
      $("#myText1").hide();
      $("#myText2").hide();
    });
    
    $("#linkToText1").on("click", function() {
      $("#myText").hide();
      $("#myText1").show();
      $("#myText2").hide();
    });
    
    $("#linkToText2").on("click", function() {
      $("#myText").hide();
      $("#myText1").hide();
      $("#myText2").show();
    });
    
  });