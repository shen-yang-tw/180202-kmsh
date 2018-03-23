// fix 100 vh in Android Chrome
var vhFix = new VHChromeFix([{
  selector: '.fullViewH',
  vh: 100
}]);

//FontAwesome load at the beginning
FontAwesomeConfig = { searchPseudoElements: true };

$(document).ready(function() {

  //Get current year
  $(".year").text((new Date).getFullYear());

  //FontAwesome load on document ready
  // window.FontAwesomeConfig.searchPseudoElements = true;

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

  //calendar
  var A1 = {
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

  var A2 = {
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
        "color": "#ff6a00",
        "url": ""
      }
    ]
  };

  $('#calendarA1').monthly({
    mode: 'event',
    dataType: 'json',
    // xmlUrl: 'events.xml',
    events: A1
  });

  $('#calendarA2').monthly({
    mode: 'event',
    dataType: 'json',
    // xmlUrl: 'events.xml',
    events: A2
  });

  $('#calendarB1').monthly({
    mode: 'event',
    dataType: 'json',
    // xmlUrl: 'events.xml',
    events: A1
  });

  $('#calendarB2').monthly({
    mode: 'event',
    dataType: 'json',
    // xmlUrl: 'events.xml',
    events: A1
  });

  //Sticky card toggleClass class when open/close
  $('.card_sticky').on('toggle.uk.accordion', function() {
    $(this).toggleClass('open');
  });

});