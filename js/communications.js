// HEADER OF CONTACT INFO TABLE
var contactColumn = document.getElementById("contactInfo");
var headerRow = document.createElement('tr');
var newInfoColumn = document.createElement('th');
newInfoColumn.appendChild(document.createTextNode("Name"));
headerRow.appendChild(newInfoColumn);
contactColumn.appendChild(headerRow);

var categories = ['Age', 'Gender', 'Address', 'Contact Number', 'Meet Up Location', 'Additional Info'];

for (var i=0; i<categories.length; i++) {
  var categoriesHeader = document.createElement('th');
  categoriesHeader.appendChild(document.createTextNode(categories[i]));
  headerRow.appendChild(categoriesHeader);
}
// OBJECT CONSTRUCTOR FOR EACH USER
var TableMaker = function(username, age, gender, address, contactNo, meetUpLoc, extraInfo) {
  this.username = username;
  this.age = age;
  this.gender = gender;
  this.address = address;
  this.contactNo = contactNo;
  this.meetUpLoc = meetUpLoc;
  this.extraInfo = extraInfo;
  this.infoArray = [age, gender, address, contactNo, meetUpLoc, extraInfo];

  var infoRow = document.createElement('tr');
  var userNameRow = document.createElement('td');
  userNameRow.appendChild(document.createTextNode(this.username));
  infoRow.appendChild(userNameRow);
  contactColumn.appendChild(infoRow);

  for (var i=0; i<categories.length; i++) {
    var contentInfoContact = document.createElement('td');
    contentInfoContact.appendChild(document.createTextNode(this.infoArray[i]));
    infoRow.appendChild(contentInfoContact);
  }
};
//NEW USER SUBMIT FUNCTION
var newUserSubmit = function(e) {
  e.preventDefault();
  var newUser = document.getElementById('username');
  var newAge = document.getElementById('age');
  var newGender = document.getElementById('gender');
  var newAddress = document.getElementById('address');
  var newContactNo = document.getElementById('contactNo');
  var newMeetUpLoc = document.getElementById('meetUpLoc');
  var newExtraInfo = document.getElementById('extraInfo');

  cList.allMyTables.push(new TableMaker((newUser.value.toUpperCase()), newAge.value, (newGender.value.toUpperCase()), newAddress.value, newContactNo.value, newMeetUpLoc.value, newExtraInfo.value));
  profile = newUser.value.toUpperCase();

  setToStore();

  newUser.value = null;
  newAge.value = null;
  newGender.value = null;
  newAddress.value = null;
  newContactNo.value = null;
  newMeetUpLoc.value = "Primary: Secondary:";
  newExtraInfo.value = null;
};
// var Sab = new TableMaker('SABRINA', 24, "FEMALE", "511 Boren Ave, Seattle, WA", "0123456789", "Primary: UW Secondary: SEATAC", "");
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', newUserSubmit);
//LOCAL STORAGE
var pList = {
};

var cList = {
  allMyTables: []
};

var UserInfo = function () {
  this.personalizedList = pList;
  this.commList = cList;
  this.profile = 'SABRINA';
};

var localObj = new UserInfo();

function setToStore() {
  var temp = JSON.stringify(localObj);
  localStorage.setItem(localObj.profile, temp);
};

UserInfo.prototype.getFromStore = function (username) {
  var temp = localStorage.getItem(username);
  var unstringedTemp;
  if(temp != null) {
    unstringedTemp = JSON.parse(temp);
    this.commList = unstringedTemp.commList;
    cList = unstringedTemp.commList;
    reMakeTable(cList.allMyTables);
  }
};
localObj.getFromStore("SABRINA");

function reMakeTable(temp) {
  for (var i=0; i<temp.length; i+=1) {
    var superTemp = TableMaker(temp[i].username, temp[i].age, temp[i].gender, temp[i].address, temp[i].contactNo, temp[i].meetUpLoc, temp[i].extraInfo)
  }
};