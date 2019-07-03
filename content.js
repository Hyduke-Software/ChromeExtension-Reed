// content.js

//This version only works on reed.co.uk

var queryresults = document.querySelectorAll('[id^="jobSection"]');

for (var i = 0; i < queryresults.length; i++) { console.log( queryresults[i].textContent) //loops through all 

var pos = queryresults[i].textContent.search("The Trainee")
	if (pos > -1){
		alert ("Removing a pretend job "+i)
queryresults[i].style.backgroundColor = "red";  //changes the class to red colour
queryresults[i].remove(); //remmoves jobSectioni from the browser

	}

;}
