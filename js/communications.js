var keyVal = '';

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
  keyVal = this.username;
  console.log("keyVal = "+keyVal);
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
  cList.allMyTables.push(new TableMaker((newUser.value.toUpperCase()), newAge.value, (newGender.value.toUpperCase()), newAddress.value, newContactNo.value, newMeetUpLoc.value, newExtraInfo.value));
  console.log("Submit form working");

  localObj.setToStore();

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

var pList = {
};

var cList = {
  allMyTables: []
};

console.log("cList"+cList);

var UserInfo = function () {
    var personalizedList = pList;
    var commList = cList;
    var profile = 'SABRINA';
    console.log("UserInfo is running");
};

UserInfo.prototype.setToStore = function() {
    var temp = JSON.stringify(this);
    localStorage.setItem('SABRINA', temp);
    console.log("setToStore is working");
};

UserInfo.prototype.getFromStore = function() {
    JSON.parse(localStorage.getItem(keyVal));
    console.log("getFromStore is working");
};

//RENDER USERINFO
var localObj = new UserInfo();

//LOCAL STORAGE
// var saveAll = JSON.stringify(contactColumn);
// localStorage.setItem(keyVal, saveAll);
// var getInfo = JSON.parse(localStorage.getItem(keyVal));
// console.log("Local storage working to save user");

// function populateStorage() {
//   for (var i = 0; i<localStorage.length; i+=1){
//     localStorage.getItem(localStorage.key(i));
//     console.log(localStorage.getItem(localStorage.key(i)));
//     var infoRow = document.createElement('tr');
//     var contentInfoContact = document.createElement('td');
//     contentInfoContact.appendChild(document.createTextNode(JSON.parse(localStorage.getItem(localStorage.key(i)))));
//     infoRow.appendChild(contentInfoContact);
//     contactColumn.appendChild(infoRow);
//   }
// }
// populateStorage();

// // var localObj = new UserInfo({},{});
// UserInfo.prototype.getFromStore = function(key) {
//     // key is magic number 1;
//     var temp = localStorage.getItem(key);
//     var unstringedTemp;
//     if(temp != 'null') {
//         unstringedTemp = JSON.parse(temp);
//         var getSaves = localStorage.getItem(key);
//         JSON.parse(getSaves);
//     }
//       this.personalizedList = unstringedTemp.personalizedList;
//       this.commList = unstringedTemp.commList;
//       JSON.parse(temp);
// };