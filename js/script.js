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
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

  //show topbar on scroll, (body) not working
  $(window).scroll(function() {
    $("#header").removeClass("opacity0").addClass("uk-animation-fade opacity1");
  });

  //Get current year
  $(".year").text((new Date).getFullYear());

  //calendar
  var sampleEvents = {
    "monthly": [{
        "id": 1,
        "name": "大得象功個土會代之題速越眼",
        "startdate": "2018-03-20",
        "enddate": "2018-03-21",
        "starttime": "12:00",
        "endtime": "2:00",
        "color": "#3ab54a",
        "url": ""
      },
      {
        "id": 2,
        "name": "本日閉館",
        "startdate": "2018-03-19",
        "color": "#8cc63e",
        "url": ""
      }
    ]
  };
  $('#calendar').monthly({
    mode: 'event',
    dataType: 'json',
    // xmlUrl: 'events.xml',
    events: sampleEvents
  });

});