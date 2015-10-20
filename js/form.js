var submitButtonOnPageTwo = document.getElementById('oneButton');

var UserInfo = function (perList, comListArg) {
	var personalizedList = new PList();
	personalizedList = perList;
	var commList = new CList();
	commList = comListArg;
};

var localObj = new UserInfo({},{});


UserInfo.prototype.getFromStore = function(key) {
	// key is magic number 1;
	var temp = localStorage.getItem(key);
	var unstringedTemp;
	if(temp != 'null') {
    	unstringedTemp = JSON.parse( temp );
  	}
  	this.personalizedList = unstringedTemp.personalizedList;
  	this.commList = unstringedTemp.commList;
  	displayTheLists();
};

UserInfo.prototype.setToStore = function() {
	localStorage.setItem('1', JSON.stringify(this));
};

var CList = function () {
	//Hey, it is an object!
}

var PList = function () {
	var houseList;
	var aprtList;
	var driveList;
	var medList;

	var listOfChecks = [houseList, aprtList, driveList, medList];
	
}

submitButtonOnPageTwo.addEventListener('click', localObj.updateForm);