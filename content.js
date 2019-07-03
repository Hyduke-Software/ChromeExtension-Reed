// content.js

//This version only works on reed.co.uk

var searchterms = ["successful completion of the training course","The Trainee"]
var queryresults = document.querySelectorAll('[id^="jobSection"]');


for (var i = 0; i < queryresults.length; i++) { console.log( queryresults[i].textContent) //loops through all 

		for (var j = 0; j < searchterms.length; j++) { //searches the fields for the text in the array searchterms
			var pos = queryresults[i].textContent.search(searchterms[j])
	if (pos > -1){

		queryresults[i].style.backgroundColor = "red";  //changes the class to red colour

	}
		}
		//
		
;}
//was 
