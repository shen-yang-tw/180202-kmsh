$(document).ready(function() {

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(".uk-overlay-panel").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //show topbar on scroll, (body) not working
  $(window).scroll(function() {
    $("#header").removeClass("opacity0").addClass("uk-animation-fade opacity1");
  });


});