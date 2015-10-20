//Quick list of facts.
var quickList =   ['1872, December 14: a strong earthquake in the Cascade Mountains caused damage at Victoria, British Columbia, and Seattle. It was felt over a very large area, about 390,000 square kilometers, extending as far south as Eugene, Oregon, and north into British Columbia, probably even into Alaska.',
                  '1936, July 15: a magnitude 5 3/4 earthquake was centered near the Washington State line between Walla Walla, Washington, and Milton, Oregon.',
                  '1946, June 23: A magnitude 7.3 shock in the Strait of Georgia caused the bottom of Deep Bay to sink between 2.7 and 25.6 meters. Waves were reported sweeping in from the sea, flooding fields and highways. Some chimneys fell at Eastsound and on Orcas Island and a concrete mill was damaged at Port Angeles.',
                  '1949, April 13: a magnitude 7.0 earthquake near Olympia. Eight deaths were caused either directly or indirectly, and many were injured. At Olympia, nearly all large buildings were damaged, and water and gas mains were broken.',
                  '1965, April 29: In Olympia an earthquake had a magnitude of 6.7.',
                  'There are 2 basic types of earthquakes. A strike-slip earthquake occurs when the rock on one side of a fault slides horizontally past the other. In a dip-slip earthquake, the fault is at an angle to the surface of the earth and the movement of the rock is up or down.',
                  'The largest earthquake ever recorded occurred in Chile in 1960: it had a magnitude of 9.5.',
                  '2010, January 12: an earthquake of magnitude 7.0 occurred 10 miles off the coast from Port-Au-Prince, Haiti, killing more than 200,000 people. The earthquake did not, however, came as a surprise to seismologists who predicted the fault slip just a week earlier. Governments and people often ignore the predictions of earthquakes.',
                  'There are more earthquakes in Alaska than in California.',
                  'It is estimated that there are several million earthquakes in the world each year. Many of these earthquakes go undetected because they occur in remote areas, mostly under the sea, or have very small magnitudes.'];

//Random number generator for quick list.
function randomNumber() {
  return Math.floor(Math.random() * quickList.length);
}

//Pick item from quick list.
var pickItem = quickList[randomNumber()];

//Print item from quick list.
var printItem = document.getElementById('qlist');
printItem.textContent = pickItem;