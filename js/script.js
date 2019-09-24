// fix 100 vh in Android Chrome
// var vhFix = new VHChromeFix([{
//   selector: '.fullViewH',
//   vh: 100
// }]);

//Font Awesome 5 - Changing icons by changing class (before DOM load - CANNOT placed in $(document).ready)
$('.uk-accordion .uk-accordion-title:first-child .fa-angle-right').removeClass('fa-angle-right').addClass('fa-angle-down');

$(document).ready(function() {

  //Remove parent if child empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").parent(":empty").remove();
  //Remove if empty
  $("p:empty, h1:empty, h2:empty, h3:empty, h4:empty, h5:empty, h6:empty").remove();

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

  //dynamically checked & check all checkbox
  $("#btnCheckAll, #checkAll").click(function() {
    $('.listCheck').prop('checked', this.checked);
  });

  //Form reload & go to anchor
  $("#reset").click(function() {
    location.hash = '#registration';
    location.reload();
  });

  //Grid Filtering
  $("#categoryTabs li:not(:nth-child(5))").click(function() {
    $('#categoryTabs .uk-button-dropdown a').removeClass('uk-active');
  });
  $("#categoryTabs li li").click(function() {
    $('#categoryTabs .uk-button-dropdown>a').addClass('uk-active');
  });

  //accordion#accordionFloor
  $(".tabs_accordionFloor a").click(function() {
    $(this).parent().parent().siblings(".uk-accordion").children("h3").eq($(this).index()).click();
  });

});

