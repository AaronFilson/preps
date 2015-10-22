// HEADER OF CONTACT INFO TABLE START
var contactColumn = document.getElementById("contactInfo");
var headerRow = document.createElement('tr');
var newInfoColumn = document.createElement('th');
newInfoColumn.appendChild(document.createTextNode("Name"));
headerRow.appendChild(newInfoColumn);
contactColumn.appendChild(headerRow);
console.log("Contact Table Header running");

var categories = ['Age', 'Gender', 'Address', 'Contact Number', 'Meet Up Location', 'Additional Info'];

for (var i=0; i<categories.length; i++) {
  var categoriesHeader = document.createElement('th');
  categoriesHeader.appendChild(document.createTextNode(categories[i]));
  headerRow.appendChild(categoriesHeader);
  console.log("Categories header working");
}
// OBJECT CONSTRUCTOR FOR EACH USER START
var TableMaker = function(username, age, gender, address, contactNo, meetUpLoc, extraInfo) {
  this.username = username;
  this.age = age;
  this.gender = gender;
  this.address = address;
  this.contactNo = contactNo;
  this.meetUpLoc = meetUpLoc;
  this.extraInfo = extraInfo;
  this.infoArray = [age, gender, address, contactNo, meetUpLoc, extraInfo];
//CREATING TABLE ROW FOR NEW USER
  var infoRow = document.createElement('tr');
  var userNameRow = document.createElement('td');
  userNameRow.appendChild(document.createTextNode(this.username));
  infoRow.appendChild(userNameRow);
  contactColumn.appendChild(infoRow);
  console.log("Place row working");
//PUSHING OBJECT TO TABLE
  for (var i=0; i<categories.length; i++) {
    var contentInfoContact = document.createElement('td');
    contentInfoContact.appendChild(document.createTextNode(this.infoArray[i]));
    infoRow.appendChild(contentInfoContact);
    console.log("Pushing data of object properly");
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
//CREATING NEW OBJECT
  console.log("allMyTables before push: ");
  console.dir(cList.allMyTables);
  cList.allMyTables.push(new TableMaker((newUser.value.toUpperCase()), newAge.value, (newGender.value.toUpperCase()), newAddress.value, newContactNo.value, newMeetUpLoc.value, newExtraInfo.value));
  console.log("allMyTables after push: ");
  console.dir(cList.allMyTables);
  profile = newUser.value.toUpperCase();
  console.log("New profile name: "+profile);
  console.log("Submit form working");
//CALLING THE SAVE TO LOCAL STORAGE
  setToStore();
//RESETTING FORM
  newUser.value = null;
  newAge.value = null;
  newGender.value = null;
  newAddress.value = null;
  newContactNo.value = null;
  newMeetUpLoc.value = "Primary: Secondary:";
  newExtraInfo.value = null;
};
//TEST CONTACT INFO
var Sab = new TableMaker('SABRINA', 24, "FEMALE", "511 Boren Ave, Seattle, WA", "0123456789", "Primary: UW Secondary: SEATAC", "");
//EVENT HANDLER TO SUBMIT BUTTON
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', newUserSubmit);
//PLACE HOLDER FOR PAGE2 LOCAL STORE
var pList = {
};
//CREATING PAGE4 LOCAL STORE UNDER USERINFO
var cList = {
  allMyTables: []
};
console.log("allMyTables after create "+cList.allMyTables);
//PROFILE CONSTRUCTOR
var UserInfo = function () {
    this.personalizedList = pList;
    this.commList = cList;
    this.profile = 'SABRINA';
    console.log("UserInfo is running");
};
//VARIABLE THAT CREATES A NEW PROFILE CONSTRUCTOR
var localObj = new UserInfo();
//FUNCTION TO SAVE TO LOCAL STORAGE
function setToStore() {
    var temp = JSON.stringify(localObj);
    localStorage.setItem(localObj.profile, temp);
    console.log("setToStore is working");
};
//FUNCTION TO GET FROM LOCAL STORAGE
UserInfo.prototype.getFromStore = function (username) {
    var temp = localStorage.getItem(username);
    var unstringedTemp;
    if(temp != null) {
      unstringedTemp = JSON.parse(temp);
      this.commList = unstringedTemp.commList;
      cList = unstringedTemp.commList;
      reMakeTable(cList.allMyTables);
    }
  console.log("allMyTables in getFromStore: ");
  // console.dir(tableStick.commList.allMyTables);
  console.log("getFromStore working");
};
localObj.getFromStore("SABRINA");
// FUNCTION TO REMAKE THE TABLE
function reMakeTable(temp) {
    for (var i=0; i<temp.length; i+=1) {
      var superTemp = TableMaker(temp[i].username, temp[i].age, temp[i].gender, temp[i].address, temp[i].contactNo, temp[i].meetUpLoc, temp[i].extraInfo)
    }
  console.log("Remaking table");
};
