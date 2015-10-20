// var userInfo = function (perList, comListArg) {
//     var personalizedList = new pList();
//     personalizedList = perList;
//     var commList = new cList();
//     commList = comListArg;
// };

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
var SubmitCommInfo = function(username, age, gender, address, contactNo, meetUpLoc, extraInfo) {
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
  var newFemale = document.getElementById('female');
  var newMale = document.getElementById('male');
  var newAddress = document.getElementById('address');
  var newContactNo = document.getElementById('contactNo');
  var newMeetUpLoc = document.getElementById('meetUpLoc');
  var newExtraInfo = document.getElementById('extraInfo');

  var newUserForm = new SubmitCommInfo((newUser.value.toUpperCase()), newAge.value, newFemale.value,newAddress.value, newContactNo.value, newMeetUpLoc.value, newExtraInfo.value);
  console.log("Submit form working");

  newUser.value = null;
  newAge.value = null;
  newFemale.value = null;
  newMale.value = null;
  newAddress.value = null;
  newContactNo.value = null;
  newMeetUpLoc.value = null;
  newExtraInfo.value = null;
};

//TEST CONTACT INFO
var Sab = new SubmitCommInfo('SABRINA', 24, "Female", "500 Bell St, ExcitingTown, WA", "0123456789", "Primary: UW Secondary: SEATAC", "");
//EVENT HANDLER TO SUBMIT BUTTON
var submitButton = document.getElementById('submitButton');
submitButton.addEventListener('click', newUserSubmit);
