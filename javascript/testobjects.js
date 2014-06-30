function ggbOnInit() {
  var element = document.getElementsByClassName("toolbar_button")[0]; 
  element.setAttribute("isselected", "false"); 
  ggbApplet.debug("ggbOnInit");
  ggbApplet.registerAddListener("newObjectListener");
}

function newObjectListener(obj) {

    if (ggbApplet.getObjectType(obj) == "segment" || ggbApplet.getObjectType(obj) == "circle" || ggbApplet.getObjectType(obj) == "ray") {
ggbApplet.setColor(obj,255,204,102);
}

  // this functions can check all general objects
  function checkobject(target, step) {
    if (obj != "finished") {
      var cmd = "finished = (" + obj + "== " + target + ")";
      ggbApplet.debug(cmd);
      ggbApplet.evalCommand(cmd);
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
        ggbApplet.setVisible(step, true);
      }
    }
  }
  // this functions check line segments
  function checksegment(target, step) {
    if (ggbApplet.getObjectType(obj) == "segment") {
      //gives beginpoint and enpoint of object
      var objectcmd = ggbApplet.getCommandString(obj);
	  var openbracket = objectcmd.indexOf('[') + 1;
	  var comma = objectcmd.indexOf(',');
	  var closebracket = objectcmd.indexOf(']');
	  var beginpointobject = objectcmd.substring(openbracket, comma);
	  var endpointobject = objectcmd.substring(comma + 1, closebracket);
      //gives beginpoint and endpoint of target
      var targetcmd = ggbApplet.getCommandString(target); 
	  var openbracket = targetcmd.indexOf('[') + 1;
	  var comma = targetcmd.indexOf(',');
	  var closebracket = targetcmd.indexOf(']');
	  var beginpointtarget = targetcmd.substring(openbracket, comma);
	  var endpointtarget = targetcmd.substring(comma + 1, closebracket);
      //here it checks if endpoints of line segment are equal
      if (obj != "finished") {
        var cmd = "finished =((("+beginpointobject+"=="+beginpointtarget+")||("+beginpointobject+"=="+endpointtarget+"))&&(("+endpointobject+"=="+beginpointtarget+")||("+endpointobject+"=="+endpointtarget+")))";
        ggbApplet.debug(cmd);
        ggbApplet.evalCommand(cmd);
        finished = ggbApplet.getValueString("finished");
        if (finished.indexOf("true") > -1) {
          ggbApplet.setVisible(step, true);
        }
      }
    }
  }
   // this functions can check if line segment has right direction
  function checksegmentdirection(target, step) {
    if (ggbApplet.getObjectType(obj) == "segment") {
    if (obj != "finished") {
      var cmd = "finished = (("+obj+"(1)=="+target+"(1))&&("+obj+"(-1)=="+target+"(-1)))";
      ggbApplet.debug(cmd);
      ggbApplet.evalCommand(cmd);
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
        ggbApplet.setVisible(step, true);
      }
    }
  }
  }