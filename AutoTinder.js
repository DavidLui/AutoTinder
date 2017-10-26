//Author: David Lui, 2017
var interval = Math.floor((Math.random() * 2000) + 2000);
var run = setInterval(request , interval); // start setInterval as "run"
var counter = 0;
var ageThreshold = 27;
function request() {
	if (document.getElementsByClassName("profileCard__menu").length == 0 && document.getElementsByClassName("beacon CenterAlignOverlay").length == 0) {
		//If you match click on keep swiping
		if(document.evaluate("count(//span[text()='Keep Swiping'])", document).numberValue>0){
			document.evaluate("//span[text()='Keep Swiping']", document).iterateNext().click();
		}
		//like until counter > 10 and dislike if > X
		if (counter > 10 && parseInt(/\d+/.exec(document.getElementsByClassName("recCard__age Whs(nw)")[1].innerHTML != "" ? document.getElementsByClassName("recCard__age Whs(nw)")[1].innerHTML : "0")[0]) >= ageThreshold) {
			document.querySelectorAll("button[aria-label=Nope]")[0].click();
			counter = 0;
	    } else {
			document.querySelectorAll("button[aria-label=Like]")[0].click();
			counter++;
	    }
	    //console.log(interval); // firebug or chrome log
	    clearInterval(run); // stop the setInterval()
	    interval = Math.floor((Math.random() * 2000) + 2000);
	    run = setInterval(request, interval); // start the setInterval()
	}
}