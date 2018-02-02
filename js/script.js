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