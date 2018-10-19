// fix 100 vh in Android Chrome
// var vhFix = new VHChromeFix([{
//   selector: '.fullViewH',
//   vh: 100
// }]);

$(document).ready(function() {

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

  //switcher
  $(".switcher").height($('.slider_choice .uk-slider>li').height());
  $(window).resize(function() {
    $(".switcher").height($('.slider_choice .uk-slider>li').height());
  });
  $('.switcher_tabs li').click(function() {
    $('.switcher_content:visible').hide();
    $('.switcher_content').eq($(this).index()).show();
    $(this).addClass('uk-active').siblings().removeClass('uk-active');
  });

  //click & addClass
  $('.slider_choice .uk-slider li').click(function() {
    $(this).addClass('uk-active');
    $('.slider_choice .uk-slider li').not(this).removeClass('uk-active');
  });

  //ClassyEdit
  $(".classy-editor").ClassyEdit();

  //Form reload & go to anchor
  $("#reset").click(function() {
    location.hash = '#registration';
    location.reload();
  });

  //Form Text Counter
  // $('.auto').textcounter({
  //   max: "auto", // maximum number of characters/words, -1 for unlimited, 'auto' to use maxlength attribute
  //   counterText: "輸入字數：%d", // counter text
  // });
  // $('.unlimited').textcounter({
  //   max: -1, // maximum number of characters/words, -1 for unlimited, 'auto' to use maxlength attribute
  //   counterText: "輸入字數：%d", // counter text
  // });

  //dynamically checked & check all checkbox
  $("#checkAll").click(function() {
    $('.listCheck').prop('checked', this.checked);
  });

  //Grid Filtering
  $("#categoryTabs li:not(:nth-child(5))").click(function() {
    $('#categoryTabs .uk-button-dropdown a').removeClass('uk-active');
  });
  $("#categoryTabs li li").click(function() {
    $('#categoryTabs .uk-button-dropdown>a').addClass('uk-active');
  });

  //
  $('.uk-accordion').on('toggle.uk.accordion', function() {
    $(this).toggleClass('open');
  });

  // if ($(window).width() < 768) {
  //   UIkit.accordion('#bookview', { showfirst: false });
  // } else {
  //   UIkit.accordion('#bookview', { showfirst: true });
  //   // UIkit.accordion("#bookview")[0].show();
  // }

});