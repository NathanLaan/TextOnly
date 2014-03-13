//
// TextOnly
//
// chrome.storage.local Keys:
//
// TextOnlySiteList
// TextOnlyOptions
//
// TextOnlyOptions_Enabled
//



//
// INITIALIZATION
//
function init(callback){
	chrome.storage.local.get('TextOnlySiteList', function(result){	
		console.log("-------INIT-------");
		console.log(result);
		if(result.TextOnlySiteList === undefined){
			console.log("-------INIT--undefined-------");
			var textOnlySiteList = new TextOnlySiteList();
			
		}
	});
}

init(function(){
	console.log("-------INITIALIZATION-COMPLETE-------");
});



//
//
//
//
//
function setTextOnlyModeEnabled(enabled){
	localStorage["TextOnlyOptions_Enabled"] = enabled;
	toggleIcon();
}
function getTextOnlyModeEnabled(){
	return localStorage["TextOnlyOptions_Enabled"] === "true";
}



function toggleIcon(){
	if(getTextOnlyModeEnabled()){
		chrome.browserAction.setIcon({'path':'image_delete.png'});
	}else{
		chrome.browserAction.setIcon({'path':'image.png'});
	}
	chrome.storage.local.get('TextOnlyOptions_Enabled', function(result){
		console.log("-------DEBUG-------");
		console.log(result);
		console.log(JSON.stringify(result));
		console.log(result.TextOnlyOptions_Enabled);
	});
}


//
//
//
//
//
function process(){
}



//
//
//
//
//
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
	console.log(
		"SENDER - " 
		+ (sender.tab ? "Content Script: " + sender.tab.url : "Extension")
		+ "  ACTION: " + (request.action == null ?  + "null" : request.action));

	if(request.action == "DEBUG"){
		chrome.storage.local.get('TextOnlyOptions', function(result){
			console.log("-------DEBUG-------");
			console.log(result);
		});
	}	
	else if(request.action == "EnableTextOnly"){
		setTextOnlyModeEnabled(true);
	}
	return true;
});




//
//
//
//
//
chrome.tabs.onUpdated.addListener(function(tabID, changeInfo, tab){
	//
	// TODO
	//
});
