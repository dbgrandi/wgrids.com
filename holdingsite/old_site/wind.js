function winstatus(){

window.setTimeout("winstatus()", 500);
window.status='WGC Products...';
}

function types(page)
{
  var url = page;
  var dim = "dialogWidth:800px; dialogHeight:570px; center:yes; status:no; scroll:no;";
  var win = window.showModalDialog(url,"",dim);
}

var A = "products_zoom.htm";
