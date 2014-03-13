//
// TextOnly
//


//
//
//
function util_parseUrl( url ) {
    var a = document.createElement('a');
    a.href = url;
    return a;
}


//
//
//
function loadOptions(){
}


//
//
//
$(document).ready(function() {

	//
	// Load initial UI state
	//
	loadOptions();
	
    $("#enableButton").click(function() {
		chrome.runtime.sendMessage({action: "EnableTextOnly"}, function(response) {
		});
    });

});
