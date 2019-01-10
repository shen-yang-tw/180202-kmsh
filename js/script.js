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

//------------------------- tabulator table ---------------------------
//custom max min header filter
var minMaxFilterEditor = function(cell, onRendered, success, cancel, editorParams){

  var end;

  var container = document.createElement("span");

  //create and style inputs
  var start = document.createElement("input");
  start.setAttribute("type", "number");
  start.setAttribute("placeholder", "Min");
  start.setAttribute("min", 0);
  start.setAttribute("max", 100);
  start.style.padding = "4px";
  start.style.width = "50%";
  start.style.boxSizing = "border-box";

  start.value = cell.getValue();

  function buildValues(){
      success({
          start:start.value,
          end:end.value,
      });
  }

  function keypress(e){
      if(e.keyCode == 13){
          buildValues();
      }

      if(e.keyCode == 27){
          cancel();
      }
  }

  end = start.cloneNode();

  start.addEventListener("change", buildValues);
  start.addEventListener("blur", buildValues);
  start.addEventListener("keydown", keypress);

  end.addEventListener("change", buildValues);
  end.addEventListener("blur", buildValues);
  end.addEventListener("keydown", keypress);


  container.appendChild(start);
  container.appendChild(end);

  return container;
}

//custom max min filter function
function minMaxFilterFunction(headerValue, rowValue, rowData, filterParams){
  //headerValue - the value of the header filter element
  //rowValue - the value of the column in this row
  //rowData - the data for the row being filtered
  //filterParams - params object passed to the headerFilterFuncParams property

  if(rowValue){
      if(headerValue.start != ""){
          if(headerValue.end != ""){
              return rowValue >= headerValue.start && rowValue <= headerValue.end;
          }else{
              return rowValue >= headerValue.start;
          }
      }else{
          if(headerValue.end != ""){
              return rowValue <= headerValue.end;
          }
      }
  }

  return false; //must return a boolean, true if it passes the filter.
}

var table = new Tabulator("#rating_table", {
  selectable:true,  //make rows selectable
  tooltips:true,  //show tool tips on cells
  pagination:"local", //paginate the data
  paginationSize:10, //allow 10 rows per page of data
  // layout:"fitDataFill",
  layout:"fitColumns",
  langs:{
    "ch-tw":{
      "pagination":{
          "first":"首頁",
          "last":"尾頁",
          "prev":"上一頁",
          "next":"下一頁",
      },
    },
  },
  columns:[
  {title:"序號", field:"row_no", width:70},
  {title:"報名流水號", field:"id", width:104, headerFilter:"number", headerFilterPlaceholder:"至少", headerFilterFunc:">="},
  {title:"隊伍名稱", field:"name", width:120, headerFilter:"input", headerFilterPlaceholder:"隊伍名稱"},
  // {title:"作品名稱", field:"work", formatter:"link", formatterParams:{url:function(cell){return "http://" + cell.getData().url}}},
  {title:"作品名稱", field:"work", width:170, formatter:"link", formatterParams:{urlField:"work_url",}, headerFilter:"input", headerFilterPlaceholder:"作品名稱"},
  {title:"作品檔案", field:"download", width:90, formatter:"link", formatterParams:{label:"檔案下載"}, align:"center"},
  {title:"是否抄襲", field:"copy", width:90, align:"center"},
  {title:"推薦國賽", field:"recommend", width:90, align:"center"},
  {title:"教師評分", field:"rate", width:90, align:"center"},
  // {title:"教師評分", field:"rate", formatter:"star", align:"center"},
  // {title:"評語", field:"comment", editor:"input", validator:["minLength:1", "string"], width:250},
  {title:"評語", field:"comment"},
  {title:"功能", field:"rating", formatter:"link", width:80, formatterParams:{label:"評分"}, align:"center"},
  ],
  rowSelectionChanged:function(data, rows){
      //update selected row counter on selection change
    $("#select-stats span").text(data.length);
  },
});

//set locale to Chinese
table.setLocale("ch-tw");
//trigger AJAX load
table.setData("https://shen-yang-tw.github.io/180202-kmsh/data.json");

//select row on "select all" button click
$("#select-all").click(function(){
    table.selectRow();
});

//deselect row on "deselect all" button click
$("#deselect-all").click(function(){
    table.deselectRow();
});

//trigger download of data.pdf file
$("#download-pdf").click(function(){
    table.download("pdf", "data.pdf", {
        orientation:"portrait", //set page orientation to portrait
        title:"Example Report", //add title to report
    });
});

// table.addData([{row_no:1, id:2, name:"bob", work:"邊口響說里同裡決低來四解表", work_url:"#1", download:"#1", copy:"N", recommend:"Y", rate:4, comment:"象常以直再程而農明", rating:"#"}, {row_no:2, id:16, name:"Jenny", work:"作品2", work_url:"#2", download:"#2", copy:"N", recommend:"N", rate:2, comment:"象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明", rating:"#"}], true);


});

