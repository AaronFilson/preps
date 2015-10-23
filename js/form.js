var cList = {
  allMyTables: []
};

var	pList = {
	houseList: [false, " \
  	I have a house: \
    <ol> \
      <li>Electricity, water, gas and telephones may not be working after an earthquake. The police and fire departments are likely to be tied up. You should be prepared to fend for yourself for at least three days, preferably for a week.</li> \
      <li>You'll need food and water (a gallon a day per person), a first aid kit, a fire extinguisher suitable for all types of fires, flashlights, a portable radio, extra batteries, blankets, clothes, shoes and money (ATMs may not work), extra medication, an adjustable or pipe wrench to turn off gas or water (if necessary; baby and pet food, and an alternate cooking source (barbecue or camp stove).</li> \
      <li>It is also a good idea to decide beforehand how and where your family will reunite if separated during a quake and to conduct in-home practice drills. You might choose an out-of-the-area friend or relative that family members can call to check on you.</li> \
      <li>Securing water heaters, major appliances and tall, heavy furniture to prevent them from toppling are prudent steps. So, too, are storing hazardous or flammable liquids, heavy objects and breakables on low shelves or in secure cabinets.</li> \
      <li>Discuss earthquake insurance with your agent. Depending on your financial situation and the value of your home, it may be worthwhile.</li> \
    </ol> "],
	aprtList: [false, " \
		I have an apartment: \
    <ol> \
      <li>To make your apartment more earthquake-safe, you should store large, heavy, and/or breakable items on lower shelves. Make sure those shelves, as well as any mirrors and large picture frames, are securely fastened to the apartment walls.</li> \
      <li>Have an emergency kit on hand that is easily accessible at all times. This kit should include flashlights, batteries, a first aid kit, a battery-powered radio, and at least three days-worth of water and non-perishable food items. Consider also buying a wireless charger for your cell phone.</li> \
      <li>Establish a family emergency plan by identifying evacuation routes and the best shelter locations in and around the apartment. Let everyone know where the emergency kit is kept as well.</li> \
      <li>As a renter, you should also consider buying renter's insurance and, if applicable, flood insurance. Apartment insurance can help replace your belongings if damaged in a natural disaster.</li> \
      <li>Talk to your apartment neighbors about what to do in the event of an emergency. Figure out who has the safest shelter locations, if anyone owns supplies like a backup generator, and if neighbors have any medical expertise.</li> \
      <li>Find out if your cell phone can receive Wireless Emergency Alerts, which are a nationwide text emergency alert system.</li> \
	    </ol> "],
	driveList: [false, " \
		I drive to school/work: \
		<ol> \
			<li>Recognize you are having a earthquake, since your car is moving recognize outside objects as references.</li> \
			<li>Stop car and pull over, avoiding bridges, lamp posts, and other objects that may fall on your vehicle.</li> \
			<li>Stay in your car with the parking break on. Turn on the radio listening for news and stay calm.</li> \
			<li>Once shaking has stopped assess any damages to your car and surrounding area.</li> \
			<li>Proceed to safety which may be home, or an open area. Keep the following in mind: \
			<ul><li>Do not ever drive through flood waters.</li> \
			<li>Do not drive over large cracks in the road. You risk becoming stuck.</li> \
			<li>Do not drive under bridges that have cracks and other visible structural damage. Even without visible damage, be wary of all overhanging objects, bridges, signs, walls, and overpasses.</li> \
			<li>Be wary of the potential for landslides onto the road.</li> \
			<li>If you're driving along a coastal road in an area known as a potential tsunami zone, drive to higher ground as quickly as possible.</li> \
		</ul> </li> </ol> "],
	medList: [false, "I need medication or a medical device. Everyone should have an emergency kit just in case, and the emergency kit should keep extra medication that may last for weeks if not months after an earthquake. The contents of an emergency kit should contain (but not limited to): \
		<ul> \
			<li>Drugs/Medications</li> \
			<ol> \
			<li>Hydrogen peroxide to wash and disinfect wounds</li> \
			<li>Antibiotic ointment</li> \
			<li>Individually wrapped alcohol swabs</li> \
			<li>Aspirin and non-aspirin tablets</li> \
			<li>Prescriptions and any long-term medications (keep these current)</li> \
			<li>Diarrhea medicine</li> \
			<li>Eye drops</li> \
			</ol> \
			<li>Dressings \
			<ol> \
			<li>Bandage strips</li> \
			<li>Ace bandages</li> \
			<li>Rolled gauze</li> \
			<li>Cotton-tipped swabs</li> \
			<li>Adhesive tape roll</li> \
			</ol></li> \
			<li>Other First Aid Supplies \
			<ol> \
			<li>First aid book</li> \
			<li>Scissors</li> \
			<li>Tweezers</li> \
			<li>Thermometer</li> \
			<li>Bar soap</li> \
			<li>Tissues</li> \
			<li>Sunscreen</li> \
			<li>Paper cups</li> \
			<li>Pocket knife</li> \
			<li>Small plastic bags</li> \
			<li>Safety pins</li> \
			<li>Needle and thread</li> \
			<li>Instant cold packs for sprains</li> \
			<li>Sanitary napkins</li> \
			<li>Splinting materials</li> \
			</ol></li></ul>"],
};

var UserInfo = function () {
	this.personalizedList = pList;
	this.commList = cList;
	this.username = '';
};

UserInfo.prototype.getFromStore = function(username) {
	var temp = localStorage.getItem(username);
	var unstringedTemp;
	if(temp != null) {
    	unstringedTemp = JSON.parse(temp);
	  	this.personalizedList = unstringedTemp.personalizedList;
	  	pList = unstringedTemp.personalizedList;
	  	this.commList = unstringedTemp.commList;
	  	cList = unstringedTemp.commList;
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
	if (document.getElementById("iHaveAHouse").checked || pList.houseList[0]) {
		pList.houseList[0] = true;
		temp = document.createElement("li");
		temp.innerHTML = pList.houseList[1];
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iHaveAnApartment").checked || pList.aprtList[0]) {
		pList.aprtList[0] = true;
		temp = document.createElement("li");
		temp.innerHTML = pList.aprtList[1];
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iDrive").checked || pList.driveList[0]) {
		pList.driveList[0] = true;
		temp = document.createElement("li");
		temp.innerHTML = pList.driveList[1];
		htmlInfo.appendChild(temp);
	}
	if (document.getElementById("iRequireMed").checked || pList.medList[0	]) {
		pList.medList[0] = true;
		temp = document.createElement("li");
		temp.innerHTML = pList.medList[1];
		htmlInfo.appendChild(temp);
	}
	document.getElementById("customPrepList").appendChild(htmlInfo);
	loopback();//make the local store happen
};

UserInfo.prototype.resetTheCheckBoxes = function(eventarg) {
	pList.houseList[0] = false;
	pList.aprtList[0] = false;
	pList.driveList[0] = false;
	pList.medList[0] = false;
	document.getElementById("customPrepList").innerHTML=null;
	loopback();
};

var localObj = new UserInfo();
localObj.username = 'AARON';

function displayTheLists () {
	localObj.updateForm();
}

function loopback () {
	localObj.personalizedList = pList;
	localObj.setToStore();
}

var submitButtonOnPageTwo = document.getElementById('oneButton');
var resetButtonOnPageTwo = document.getElementById('resetButton');

localObj.getFromStore(localObj.username); // Every time the page loads, call up the last saved info
submitButtonOnPageTwo.addEventListener('click', localObj.updateForm);
resetButtonOnPageTwo.addEventListener('click', localObj.resetTheCheckBoxes);
