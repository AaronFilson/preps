var submitButtonOnPageTwo = document.getElementById('oneButton');


var userInfo = function (perList, comListArg) {
	var personalizedList = new pList();
	personalizedList = perList;
	var commList = new cList();
	commList = comListArg;

};

var localObj = new userInfo({},{});


submitButtonOnPageTwo.addEventListener('click', updateForm);