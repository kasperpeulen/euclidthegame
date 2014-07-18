
var primitives = true;

function ggbOnInit() {

  var element = document.getElementsByClassName("toolbar_button")[0]; 
  element.setAttribute("isselected", "false"); 
  ggbApplet.debug("ggbOnInit");
  ggbApplet.registerAddListener("newObjectListener");
  function Command(cmd){ggbApplet.debug(cmd); ggbApplet.evalCommand(cmd);}
  function abspos(x,y){
  return "Corner[4] + ("+x+"*(x(Corner[3])-x(Corner[4])),"+y+"*(x(Corner[2])-x(Corner[1])))"
  }
  Command('progress = 0');
  Command('Progresstext = Text["Progress: "progress"%",'+abspos("0.011","-0.032915")+']');
  Command('countnumber = 0');
  Command ('count0 = Text["Moves: "countnumber"",'+abspos("0.85","-0.032915")+']');
	Command('W = (-10,-10)'); 
	ggbApplet.setVisible("W",false);
	Command('welldone = Text["Well done!", W]'); 		
	ggbApplet.setVisible("welldone",false);	
	}

  function Command(cmd){ggbApplet.debug(cmd); ggbApplet.evalCommand(cmd);}
    function abspos(x,y){
  return "Corner[4] + ("+x+"*(x(Corner[3])-x(Corner[4])),"+y+"*(x(Corner[2])-x(Corner[1])))"
  }
  	var count = 'Text["Count = 0",'+abspos("0.85","-0.032915")+']'
function newObjectListener(obj) {
if (ggbApplet.getObjectType(obj) === "boolean" || ggbApplet.getObjectType(obj) === "text" || ggbApplet.getObjectType(obj) === "numeric"|| obj == "W")
{return;
}


    if (ggbApplet.getObjectType(obj) == "segment" || ggbApplet.getObjectType(obj) == "circle" || ggbApplet.getObjectType(obj) == "ray" || ggbApplet.getObjectType(obj) == "line") {
ggbApplet.setColor(obj,255,204,102);
}

  function Command(cmd){ggbApplet.debug(cmd); ggbApplet.evalCommand(cmd);}

    function abspos(x,y){
  return "Corner[4] + ("+x+"*(x(Corner[3])-x(Corner[4])),"+y+"*(x(Corner[2])-x(Corner[1])))"
  }
 
var cmdString = ggbApplet.getCommandString(obj);
console.log(cmdString);
console.log(ggbApplet.getObjectType(obj));
console.log(obj);

if (ggbApplet.getObjectType(obj) == "point" && cmdString == "")
{
	console.log(ggbApplet.getXcoord(obj));
	var x = ggbApplet.getXcoord(obj) + 0.01;
	console.log(x);
	var y = ggbApplet.getYcoord(obj) - 0.01;
	Command( obj +"= ("+x+","+y+")");
}

if (cmdString.substring(0,3) == "Ray" || (cmdString.substring(0,2) == "Eq" && ggbApplet.getObjectType(obj)=="point") || cmdString.substring(0,3) == "Seg" ||cmdString.substring(0,3) == "Cir" || cmdString.substring(0,3) == "Mid" || cmdString.substring(0,13) == "AngleBisector" || cmdString.substring(0,4) == "Perp" || cmdString.substring(0,4) == "Line" || (cmdString.substring(0,5) == "Trans"&& ggbApplet.getObjectType(obj)=="point")){
	Command('countnumber = countnumber + 1');
if (!(cmdString.substring(0,3) == "Ray" || cmdString.substring(0,3) == "Seg" || cmdString.substring(0,3) == "Cir") && primitives) { primitives = false;}


function isLowerCase(myString) { 
  return (myString == myString.toLowerCase()); 
}


var lastcomma = cmdString.indexOf(",");
if(cmdString.substring(0,3) == "Cir" && (isLowerCase(cmdString.substring(lastcomma+2,lastcomma+3)) || cmdString.substring(lastcomma+2,lastcomma+4) =="Se" || cmdString.substring(lastcomma+2,lastcomma+4) =="Ra"))
{
primitives = false;}	
}



if (cmdString.substring(0,13) == "AngleBisector"){
var obj1 = cmdString.substring(14,15);
if (ggbApplet.getObjectType(obj1) === "point"){
var obj2 = cmdString.substring(17,18);
var obj3 = cmdString.substring(20,21);
var a = ggbApplet.getXcoord(obj1);
var b = ggbApplet.getYcoord(obj1);
var m = ggbApplet.getXcoord(obj2);
var n = ggbApplet.getYcoord(obj2);
var x = ggbApplet.getXcoord(obj3);
var y = ggbApplet.getYcoord(obj3);

function round(value) {
    return(Math.round(value * 100000) / 100000);
}
if ( round((n-b)*(x-m)) === round((y-n)*(m-a))){
Command('Delete['+obj+']');
Command('Text["You can\'t use the bisecting tool if the angle is 180 degrees !",'+abspos("0.02","-0.632915")+']');
}
}
}
function getCoord(obj){ 
	if (ggbApplet.getObjectType(obj) === "point" ) {
	var x = ggbApplet.getXcoord(obj);
	var y = ggbApplet.getYcoord(obj);
		return "("+x+","+y+")"}
	else if (ggbApplet.getObjectType(obj)==="segment" || ggbApplet.getObjectType(obj)==="ray" ){
	Command("xx = x(Point["+obj+",0.5])");
	Command("yy = y(Point["+obj+",0.5])");
	var x = ggbApplet.getValue("xx");
	var y = ggbApplet.getValue("yy");
	return "("+x+","+y+")";
	}
	else if (ggbApplet.getObjectType(obj)==="circle"){
	var x = ggbApplet.getXcoord(cmdString.substring(7,8));
	var y = ggbApplet.getYcoord(cmdString.substring(7,8));
	return "("+x+","+y+")";
	}
}

  // this functions can check all general objects
  function checkobject(target,x,y) {
      Command("finished = (" + obj + "== " + target + ")");
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
	  Command('f_'+target+'= Text["", (0,0)]');
	  Command("W = "+getCoord(target)+"+("+x+","+y+")");
		ggbApplet.setVisible("welldone",true);		  
      } 
  }
  // this functions check line segments
  function checksegment(target,x,y) {
    if (ggbApplet.getObjectType(obj) == "segment") {
  	  var beginpointobject = "Point["+obj+",0]"
	  var endpointobject = "Point["+obj+",1]"
	  var beginpointtarget = "Point["+target+",0]"
	  var endpointtarget = "Point["+target+",1]"
      //here it checks if endpoints of line segment are equal
      if (obj != "finished") {
        Command("finished =((("+beginpointobject+"=="+beginpointtarget+")||("+beginpointobject+"=="+endpointtarget+"))&&(("+endpointobject+"=="+beginpointtarget+")||("+endpointobject+"=="+endpointtarget+")))");
        finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
	  Command('f_'+target+'= Text["", (0,0)]');
	  if (typeof x !== 'undefined'){
  	  Command("W = "+getCoord(target)+"+("+x+","+y+")")};	
		ggbApplet.setVisible("welldone",true);		  
      }
     			     }
   							 }
 					}
   // this functions can check if line segment has right direction
 
 function checkdirection(target,x,y) {
    if (ggbApplet.getObjectType(obj) == "segment" || ggbApplet.getObjectType(obj) == "ray" || ggbApplet.getObjectType(obj) == "line") {
     
	  Command("finished = (("+obj+"(1)=="+target+"(1))&&("+obj+"(-1)=="+target+"(-1)))");
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
	  Command('f_'+target+'= Text["", (0,0)]');
	  	  if (typeof x !== 'undefined'){
  	  Command("W = "+getCoord(target)+"+("+x+","+y+")")};	
		ggbApplet.setVisible("welldone",true);		
      }
    
	}
  }
  // this functions check if the new point is on the targetline
  function checkpointontarget(target,x,y) {
    if (ggbApplet.getObjectType(obj) == "point") {
      Command("finished = ("+target+"(x("+obj+"))==y("+obj+"))");
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
	  Command('f_p'+target+'= Text["", (0,0)]');
	  	  if (typeof x !== 'undefined'){
  	  Command("W = "+getCoord(obj)+"+("+x+","+y+")")};	
		ggbApplet.setVisible("welldone",true);		 
 }

  }
  }

function drawn(object){
	return ggbApplet.getVisible('f_'+object) ;
}
var setVisible = ggbApplet.setVisible;

function LevelCompleted(condition,mincount){
 if(condition){
 	Command('progress = 100');
	Command('Complete = Text["Level completed !",  '+abspos("0.15","-0.13")+']');   
    var count = ggbApplet.getValue("countnumber");
	if (primitives && (count === minlevel{{page.number}}p)){
	Command('score2 = Text["Perfect ! You have done this challenge in a minimum number of primitive moves!", '+abspos("0.35","-0.602915")+']');}
	if (!primitives)
	{ if(count === minlevel{{page.number}}){
	Command('score2 = Text["Perfect ! You have done this challenge in a minimum number of moves!", '+abspos("0.35","-0.602915")+']');}}
   //document.getElementById("level").style.display="inline-block";	
	  $( "#hidden" ).slideDown(1000);	
   $( "#hiddencomments" ).toggle();	


if (primitives){
if (!(localStorage.Level{{page.number}}p < count)) {localStorage.Level{{page.number}}p = count;}}
else{
if(!(localStorage.Level{{page.number}}<count)){localStorage.Level{{page.number}} = count;}}


	}
}   



