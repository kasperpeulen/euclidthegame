
// Check if the browser has Local Storage support (all modern have)
if(! ('localStorage' in window) && window['localStorage'] != null) {
	// Figure out what to do...
}

var ls = window['localStorage'];
var path = location.pathname;



function evHandler(name){
	console.log("Handler fired");
	ls[path] = document.ggbApplet.getXML();
}

function resetSandbox() {
	document.ggbApplet.setXML(defaultContent);
	evHandler("");
}

function registerHandlers() {
	document.ggbApplet.registerAddListener("evHandler");
	document.ggbApplet.registerRemoveListener("evHandler");
	document.ggbApplet.registerUpdateListener("evHandler");
	document.ggbApplet.registerRenameListener("evHandler");
}

var defaultContent;

function ggbOnInit(){
	// Load progress if user made any
	if(path in ls && ls[path] != null) {
		var solutionXML = ls[path];
		defaultContent = document.ggbApplet.getXML();
		$(document).ready(function() {
			document.ggbApplet.setXML(solutionXML);
		});
	}
	
	// Add reset button
	$("#applet_container").before("<p><a href='javascript:resetSandbox()'>Reset</a></p>");
	
	// Register handlers for all events
	registerHandlers();
}
