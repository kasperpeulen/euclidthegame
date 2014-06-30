Euclid The Game
===============

(c) 2014 Kasper Peulen

The goal of this project is to gamify geometric challanges. We use the [geogebra](http://www.geogebra.org) software for this.

The project is stil in its initial stage. The idea is now, to make a MIT licensed "framework" on top of geogebra that gamifies the geogebra experience. For example, if you are heading in the right direction, you get rewarded by messages like "Smart!", or "Well done !" etc. If you complete the challange, you are rewarded by unlocking new challanges or new tools.

This part of the framework is already created, but is not yet easy for other people to use this framework and provide new content.

Ideas for new addition to this framework:

* a login system that saves the progress of the user. 
* improving the design of the website
* making the geogebra applet look more like a game
* a (high)score systems. You could for example get points for doing the challange in very few steps. Or for doing the challange with only a limited set of tools.

License update (6/30/2014)
---------------------

The license of this project is a little bit complicated. At first, we have the geogebra license. The files in this project are build on top geogebra and so none of them will work wihtout geogebra.

Second, we have the framework where this website is build in. This framework I will put in a different repo, probably called something like "Geogebra Gamified". This repo will have a MIT license. All the contributions in this repo will also automatically have a MIT license. Part of this framework is for example the testobject.js file. (see the _include folder).

Third, we have the sourcecode of the Euclid: The Game website. I don't want people to redistribute the website without asking me for permission. Therefore the only option is to put no license on the sourcecode of the website. You can read the source, you can learn from it, you can copy it locally, or in your github fork, but you are not allowed to redistribute those levels without asking me for permission.

----------------------

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
