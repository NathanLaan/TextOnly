//
// chrome.storage.local Keys:
//
// TextOnlySiteList
//
// TextOnlyOptions
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
function setEnabled(enabled){
	chrome.storage.local.get('TextOnlyOptions', function(result){
		if(result.TextOnlyOptions !== undefined){
		}else{
			// TODO: debug
		}
	});
}



function toggleIcon(callback){
	chrome.storage.local.get('TextOnlyOptions', function(result){
		if(result.TextOnlyOptions !== undefined){
		}else{
			// TODO: debug
		}
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
			console.log("-------DEBUG-------");
		});
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
