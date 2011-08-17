function setupMenu(whichpage){

	var themenu ="";
	themenu=themenu+menuWrapper(whichpage,"home","index","Home");
	themenu=themenu+menuWrapper(whichpage,"about","about","About WGC");
	themenu=themenu+menuWrapper(whichpage,"team","team","The Team");
	themenu=themenu+menuWrapper(whichpage,"tech","tech","The Technology");
	themenu=themenu+menuWrapper(whichpage,"press","press","Press");
	themenu=themenu+menuWrapper(whichpage,"partners","partners","Partners");
	themenu=themenu+menuWrapper(whichpage,"contact","contact","Contact Us");

	document.write(themenu);
}

function menuWrapper(whichpg,menuid,menulink,menulegend){
	var wrapping = "";
	if (whichpg==menuid)
	{
    wrapping=wrapping+"<div id='"+ menuid +"' class='menuitemon'><a class='menubuton' href='" +menulink+".html'>"+menulegend+"</a></div>";
	}
	else
	{
	wrapping=wrapping+"<div id='"+ menuid +"' class='menuitem'><a class='menubut' href='" +menulink+".html'>"+menulegend+"</a></div>";		
	}
	return wrapping;
	
}

