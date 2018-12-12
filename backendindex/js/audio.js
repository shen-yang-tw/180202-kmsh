$(document).ready(function() {
  var audio = new Audio("http://upload.wikimedia.org/wikipedia/commons/8/86/20090724NIHWiki.ogg");

  $('#btn_play').on("click", function() {
    if ($(this).hasClass('uk-icon-volume-up')) {
      $(this).removeClass('uk-icon-volume-up');
      $(this).addClass('uk-icon-volume-off');
      audio.play();
    } else {
      $(this).removeClass('uk-icon-volume-off');
      $(this).addClass('uk-icon-volume-up');
      audio.pause();
    }
  });

  audio.onended = function() {
    $("#btn_play").removeClass('uk-icon-volume-off');
    $("#btn_play").addClass('uk-icon-volume-up');
  };

});