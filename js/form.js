var submitButtonOnPageTwo = document.getElementById('oneButton');

var cList = {
	//Hey, it is an object!
};

var pList = {
	houseList: [false, "Placeholder for the list of things to check for in preparation for an earthquake"],
	aprtList: [false, "Placeholder for apartments"],
	driveList: [false, "Placeholder for a driving checklist"],
	medList: [false, "Placeholder for a medication checklist"],

	listOfChecks: [this.houseList, this.aprtList, this.driveList, this.medList],	
};

var UserInfo = function () {
	var personalizedList = pList;
	var commList = cList;
	var username = null;
};

var localObj = new UserInfo();
localObj.username = 'test';

UserInfo.prototype.getFromStore = function(username) {
	// key is username
	var temp = localStorage.getItem(username);
	var unstringedTemp;
	if(temp != 'null') {
    	unstringedTemp = JSON.parse( temp );
	  	this.personalizedList = unstringedTemp.personalizedList;
	  	this.commList = unstringedTemp.commList;
  		displayTheLists();
  	}
};

UserInfo.prototype.setToStore = function() {
	localStorage.setItem(this.username, JSON.stringify(this));
};

UserInfo.prototype.updateForm = function(event) {
	event.preventDefault(); //prevent the default behavior of the submit form
	var htmlInfo = document.createElement("ul");
	var checkBoxOnPage = [];
	var temp;
	document.getElementById("customPrepList").innerHTML=null;

	if (document.getElementById("iHaveAHouse").checked) {
		//Display House Info
		console.log("House box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your house.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iHaveAnApartment").checked) {
		console.log("Apartment box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your apartment.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iDrive").checked) {
		console.log("Drive box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your drive.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iRequireMed").checked) {
		console.log("Require Med box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your required medication.";
		htmlInfo.appendChild(temp);
	}
	//check which boxes were selected
	console.log(event); //give me something to break on
	document.getElementById("customPrepList").appendChild(htmlInfo);
	loopback();//make the local store happen

};

function loopback () {
	localObj.setToStore();
}

submitButtonOnPageTwo.addEventListener('click', localObj.updateForm);