
var cList = {
  allMyTables: []
};

var pList = {
	houseList: [false, "Placeholder for the list of things to check for in preparation for an earthquake"],
	aprtList: [false, "Placeholder for apartments"],
	driveList: [false, "Placeholder for a driving checklist"],
	medList: [false, "Placeholder for a medication checklist"]
};

var UserInfo = function () {
	this.personalizedList = pList;
	this.commList = cList;
	this.username = '';
};

UserInfo.prototype.getFromStore = function(username) {
	// key is username
	console.log('in getFromStore function');
	var temp = localStorage.getItem(username);
	var unstringedTemp;
	if(temp != null) {
		console.log('temp var is not null, and evaluates to: ');
		console.dir(temp);
    	unstringedTemp = JSON.parse(temp);
	  	this.personalizedList = unstringedTemp.personalizedList;
	  	pList = unstringedTemp.personalizedList;
	  	this.commList = unstringedTemp.commList;
	  	cList = unstringedTemp.commList;
  		displayTheLists();
  	}
  	console.log('at the end of the getFromStore function, and the value of this is: ');
  	console.dir(this);
};

UserInfo.prototype.setToStore = function() {
	console.log('in setToStore function');
	localStorage.setItem(this.username, JSON.stringify(this));
};

UserInfo.prototype.updateForm = function() {
	console.log('in the updateForm function, pList is : ');
	console.dir(pList);
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
	console.log('at the end of updateForm function, the pList is: ')
	console.dir(pList); 
	document.getElementById("customPrepList").appendChild(htmlInfo);
	loopback();//make the local store happen
};

var submitButtonOnPageTwo = document.getElementById('oneButton');

var localObj = new UserInfo();
localObj.username = 'Sabrina';


function displayTheLists () {
	console.log('in the displayTheLists function');
	localObj.updateForm();
}

function loopback () {
	console.log('in loopback function')
	localObj.personalizedList = pList;
	localObj.setToStore();
}

localObj.getFromStore(localObj.username); // Every time the page loads, call up the last saved info
console.log('Reaching the end of the js file, and the current value of the UserInfo instance localObj is: ');
console.dir(localObj); //show us what the loaded object is
submitButtonOnPageTwo.addEventListener('click', localObj.updateForm);