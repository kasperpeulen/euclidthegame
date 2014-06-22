Euclid The Game
===============

Feel free to contribute to this project by fixing issues or by creating new levels.

I think I should admit that I'm not a professional game developer. A year ago I posted the idea for this game at stackexchange:
http://math.stackexchange.com/questions/373672/about-euclids-elements-and-modern-video-games

I hoped that I could inspire game developers to make such a game. Well, I failed ! But I did inspire myself to learn a little bit about html/javascript and geogebra, and in this way, I was able to make this game.

But I still have a lot to learn to make this game feel and look a little bit more professional. Any advice or any contribution would be absolutely appreciated to head this project in the right direction.

At this moment, the website runs at neocities.org, I can't use server sides languages here, I can't even create directories. So it would probably a good first step, to move this project to some other server.

If you have worked with geogebra, it may be not so hard to contribute to new levels. I've written a couple of function that make it easy to test if objects/lines/circles are drawn:

```javascript
function ggbOnInit() {
  ggbApplet.debug("ggbOnInit");
  ggbApplet.registerAddListener("newObjectListener");
}

function newObjectListener(obj) {
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
    if (ggbApplet.getObjectType(obj) == "segment" || ggbApplet.getObjectType(obj) == "line") {
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
  // this functions check if the new point is on the targetline
  function checkpointontarget(target, step) {
    if (ggbApplet.getObjectType(obj) == "point") {
    if (obj != "finished") {
      var cmd = "finished = ("+target+"(x("+obj+"))==y("+obj+"))";
      ggbApplet.debug(cmd);
      ggbApplet.evalCommand(cmd);
      finished = ggbApplet.getValueString("finished");
      if (finished.indexOf("true") > -1) {
        ggbApplet.setVisible(step, true);
      }
    }
  }
  }
  //here you can check all objects 


  //which step are neccesary to complete level
  if (ggbApplet.getVisible("step1") ) {
    ggbApplet.setVisible("complete", true);
	document.getElementById("level").style.visibility="visible";
  }
}
```

## License

&copy; Kasper Peulen 2014

This project is licensed under the MIT license. See the LICENSE file for
details.
