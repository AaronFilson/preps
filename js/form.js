var submitButtonOnPageTwo = document.getElementById('oneButton');

var cList = {
  allMyTables: []
};

var pList = {
	houseList: [false, "Placeholder for the list of things to check for in preparation for an earthquake"],
	aprtList: [false, "Placeholder for apartments"],
	driveList: [false, "Placeholder for a driving checklist"],
	medList: [false, "Placeholder for a medication checklist"],

	//listOfChecks: [this.houseList, this.aprtList, this.driveList, this.medList],	
};

var UserInfo = function () {
	this.personalizedList = pList;
	this.commList = cList;
	this.username = '';
};

var localObj = new UserInfo();
localObj.username = 'Sabrina';

UserInfo.prototype.getFromStore = function(username) {
	// key is username
	var temp = localStorage.getItem(username);
	var unstringedTemp;
	if(temp) {
    	unstringedTemp = JSON.parse(temp);
	  	this.personalizedList = unstringedTemp.personalizedList;
	  	this.commList = unstringedTemp.commList;
  		displayTheLists();
  	}
};

UserInfo.prototype.setToStore = function() {
	localStorage.setItem(this.username, JSON.stringify(this));
};

UserInfo.prototype.updateForm = function() {
	var htmlInfo = document.createElement("ul");
	var checkBoxOnPage = [];
	var temp;
	document.getElementById("customPrepList").innerHTML=null;

	//check which boxes were selected
	if (document.getElementById("iHaveAHouse").checked || pList.houseList[0]) {
		pList.houseList[0] = true;
		console.log("House box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your house.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iHaveAnApartment").checked || pList.aprtList[0]) {
		pList.aprtList[0] = true;
		console.log("Apartment box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your apartment.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iDrive").checked || pList.driveList[0]) {
		pList.driveList[0] = true;
		console.log("Drive box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your drive.";
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iRequireMed").checked || pList.medList[0	]) {
		pList.medList[0] = true;
		console.log("Require Med box is checked");
		temp = document.createElement("li");
		temp.textContent = "A start to preparing your required medication.";
		htmlInfo.appendChild(temp);
	}
	
	console.log(event); 
	document.getElementById("customPrepList").appendChild(htmlInfo);
	loopback();//make the local store happen
};

function displayTheLists () {
	console.log('in the displayTheLists function');
	localObj.updateForm();
}

function loopback () {
	localObj.personalizedList = pList;
	localObj.setToStore();
}

localObj.getFromStore(localObj.username); // Every time the page loads, call up the last saved info
submitButtonOnPageTwo.addEventListener('click', localObj.updateForm);