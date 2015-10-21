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
var CList = function(username, age, gender, address, contactNo, meetUpLoc, extraInfo, key) {
  this.username = username;
  this.age = age;
  this.gender = gender;
  this.address = address;
  this.contactNo = contactNo;
  this.meetUpLoc = meetUpLoc;
  this.extraInfo = extraInfo;
  this.key = key;
  this.infoArray = [age, gender, address, contactNo, meetUpLoc, extraInfo, key];
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
//LOCAL STORAGE
  var infoToSave = JSON.stringify(this.username+","+this.infoArray);
  localStorage.setItem(this.key, infoToSave);
  var getInfo = JSON.parse(localStorage.getItem(this.username));
  console.log("Local storage working to save user");
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
  var newUserForm = new CList((newUser.value.toUpperCase()), newAge.value, (newGender.value.toUpperCase()), newAddress.value, newContactNo.value, newMeetUpLoc.value, newExtraInfo.value, Math.random());
  console.log("Submit form working");
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
var Sab = new CList('SABRINA', 24, "FEMALE", "511 Boren Ave, Seattle, WA", "0123456789", "Primary: UW Secondary: SEATAC", "", 1);

//EVENT HANDLER TO SUBMIT BUTTON
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', newUserSubmit);

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


function populateStorage() {
  for (var i = 0; i < localStorage.length; i += 1) {
    console.log(JSON.parse(localStorage[i]))
  }
}
populateStorage();

var bob = JSON.parse(localStorage.getItem("1"));
console.log(bob);

// LOCAL STORAGE SET TO LINK TO PAGE 2
// var PList = function() {
// };
// var UserInfo = function (perList, comListArg) {
//     var personalizedList = new PList();
//     personalizedList = perList;
//     var commList = new CList();
//     commList = comListArg;
// };
// // var localObj = new UserInfo({},{});
// UserInfo.prototype.setToStore = function() {
//     localStorage.setItem(commList[7], JSON.stringify(this));
// };
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
