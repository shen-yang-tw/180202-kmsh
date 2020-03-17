
$(document).ready(function() {

//-------------------------------------------------- tabulator table --------------------------------------------------
//only works on server and in dom: <div id="rating_table" class="uk-margin"></div>

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
  resizableColumns:false, //disable column resizing
  pagination:"local", //paginate the data
  paginationSize:10, //allow 10 rows per page of data
  // layout:"fitDataFill", //fit data and takeup the full width of the table
  layout:"fitColumns", //fit the full width of the table
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
  initialSort:[
    {column:"id", dir:"asc"}, //sort by this first
  ],
  columns:[
    {title:"序號", field:"row_no", formatter:"rownum", width:70, headerSort:false},
    {title:"報名流水號", field:"id", sorter:"number", width:104, headerFilter:"number", headerFilterPlaceholder:"至少...", headerFilterFunc:">=", headerFilterParams:{min:0, max:100,}},
    {title:"隊伍名稱", field:"name", width:110, headerFilter:"input", headerFilterPlaceholder:"輸入名稱"},
    {title:"作品名稱", field:"work", width:230, formatter:"link", formatterParams:{urlField:"work_url",}, headerFilter:"input", headerFilterPlaceholder:"輸入名稱", headerSort:false},
    {title:"作品檔案", field:"download", width:90, formatter:"link", formatterParams:{label:"檔案下載"}, align:"center", headerSort:false},
    {title:"是否抄襲", field:"copy", width:90, align:"center"},
    {title:"推薦國賽", field:"recommend", width:90, align:"center"},
    {title:"教師評分", field:"rating", sorter:"number", width:90, align:"center", headerFilter:"number", headerFilterPlaceholder:"至少...", headerFilterFunc:">=", headerFilterParams:{min:0, max:100,}},
    // {title:"教師評分", field:"rating", formatter:"star", align:"center"},
    // {title:"評語", field:"comment", editor:"input", validator:["minLength:1", "string"], headerSort:false},
    {title:"評語", field:"comment", headerSort:false},
    {title:"功能", field:"btn", formatter:"link", width:80, formatterParams:{label:"評分"}, align:"center", headerSort:false},
  ],
  rowSelectionChanged:function(data, rows){
    //update selected row counter on selection change
    $("#select-stats span").text(data.length);
  },
});

//set locale to Chinese
table.setLocale("ch-tw");
//trigger data load
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
// $("#download-file").click(function(){
//     table.download("pdf", "data.pdf", {
//         orientation:"portrait", //set page orientation to portrait
//         title:"Example Report", //add title to report
//     });
// });

// table.addData([{row_no:1, id:2, name:"bob", work:"邊口響說里同裡決低來四解表", work_url:"#1", download:"#1", copy:"N", recommend:"Y", rating:4, comment:"象常以直再程而農明", btn:"#"}, {row_no:2, id:16, name:"Jenny", work:"作品2", work_url:"#2", download:"#2", copy:"N", recommend:"N", rating:2, comment:"象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明象常以直再程而農明", btn:"#"}], true);

//-------------------------------------------------- end tabulator table --------------------------------------------------

});

