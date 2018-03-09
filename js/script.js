$(document).ready(function() {
  //font resize
  $('.large>a').click(function() {
    $('.font_resize').removeClass('font_medium').addClass('font_large');
  });
  $('.medium>a').click(function() {
    $('.font_resize').removeClass('font_large').addClass('font_medium');
  });
  $('.small>a').click(function() {
    $('.font_resize').removeClass('font_large').removeClass('font_medium');
  });

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(".uk-overlay-panel").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //show topbar on scroll, (body) not working
  $(window).scroll(function() {
    $("#header").removeClass("opacity0").addClass("uk-animation-fade opacity1");
  });

  //Get current year
  $(".year").text((new Date).getFullYear());

  /*remote URL to show content in the same modal*/
  $("#btn1").click(function() {
    $('#myModal').on('shown.bs.modal', function(e) {
      $(e.target).find('.modal-content').load('modal1.html');
    });
  });
  $("#btn2").click(function() {
    $('#myModal').on('shown.bs.modal', function(e) {
      $(e.target).find('.modal-content').load('modal2.html');
    });
  });

  /*external link directly to show modal*/
  if (window.location.href.indexOf('#myModal1') != -1) {
    $('#myModal').modal('show').on('shown.bs.modal', function(e) {
      $(e.target).find('.modal-content').load('modal1.html');
    });
  }
  if (window.location.href.indexOf('#myModal2') != -1) {
    $('#myModal').modal('show').on('shown.bs.modal', function(e) {
      $(e.target).find('.modal-content').load('modal2.html');
    });
  }

});