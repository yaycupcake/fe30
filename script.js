const dayOneSchedule = [
{
	time: "12:00PM",
	event: "Stream Intro",
	host: "darkdogdemon",
	// hostTwitter: "https://twitter.com/XinChun93",
	// guest: "Super Cool Voice Actor"
},
{
	time: "12:30PM",
	event: "FE9 Block",
	host: "Gwimpage",
	guest: "KirbyMastah",
	guestTwitter: "https://twitter.com/KirbyMastah"
},
{
	time: "3:30PM",
	event: "Break #1"
},
{
	time: "4:00PM",
	event: "Three Houses Block",
	host: "KirbyMastah",
	hostTwitter: "https://twitter.com/KirbyMastah",
	guest: "Gwimpage"
},
{
	time: "6:00PM",
	event: "Break #2"
},
{
	time: "6:30PM",
	event: "Drawing with Ignatz",
	host: "Christian La Monte",
	hostTwitter: "https://twitter.com/WritingMadness"
},
{
	time: "8:30PM",
	event: "Break #3"
}
]



const day1 = document.querySelector('#day1');

for (let i = 0; i < dayOneSchedule.length; i++) {

	let slot = dayOneSchedule[i];

	let slotNode = document.createElement('div');
	slotNode.classList.add('slot');

	let timeNode = document.createElement('div');
	timeNode.classList.add('time');
	timeNode.textContent = slot.time;
	slotNode.appendChild(timeNode);

	let eventNode = document.createElement('div');
	eventNode.classList.add('event');
	eventNode.textContent = slot.event;
	slotNode.appendChild(eventNode);

	if (slot.host) {
		let hostNode = document.createElement('div');
		hostNode.classList.add('host');
		hostNode.textContent = slot.host;
		if (slot.hostTwitter) {
			let hostTwitterNode = document.createElement('a');
			hostTwitterNode.classList.add('host-twitter');
			hostTwitterNode.href = slot.hostTwitter;
			hostNode.appendChild(hostTwitterNode);
			let hostTwitterIconNode = document.createElement('i');
			hostTwitterIconNode.classList.add('fab', 'fa-twitter');
			hostTwitterNode.appendChild(hostTwitterIconNode);
		}
		slotNode.appendChild(hostNode);
	}

	if(slot.guest) {
		let guestNode = document.createElement('div');
		guestNode.classList.add('guest');
		guestNode.textContent = slot.guest;
				if (slot.guestTwitter) {
			let guestTwitterNode = document.createElement('a');
			guestTwitterNode.classList.add('guest-twitter');
			guestTwitterNode.href = slot.guestTwitter;
			guestNode.appendChild(guestTwitterNode);
			let guestTwitterIconNode = document.createElement('i');
			guestTwitterIconNode.classList.add('fab', 'fa-twitter');
			guestTwitterNode.appendChild(guestTwitterIconNode);
		}
		slotNode.appendChild(guestNode);
	}


	day1.appendChild(slotNode);

	console.log(slot.time);

}




///



const dayTwoSchedule = [
{
	time: "5:00PM",
	event: "Deer Abbey",
},
{
	time: "6:00PM",
	event: "Break #2"
},
{
	time: "6:30PM",
	event: "Interview",
	host: "Nairo",
	guest: "Yuri Lowenthal"
}
]





const day2 = document.querySelector('#day2');

for (let i = 0; i < dayTwoSchedule.length; i++) {

	let slot = dayTwoSchedule[i];

	let slotNode = document.createElement('div');
	slotNode.classList.add('slot');

	let timeNode = document.createElement('div');
	timeNode.classList.add('time');
	timeNode.textContent = slot.time;
	slotNode.appendChild(timeNode);

	let eventNode = document.createElement('div');
	eventNode.classList.add('event');
	eventNode.textContent = slot.event;
	slotNode.appendChild(eventNode);

	if (slot.host) {
		let hostNode = document.createElement('div');
		hostNode.classList.add('host');
		hostNode.textContent = slot.host;
		if (slot.hostTwitter) {
			let hostTwitterNode = document.createElement('a');
			hostTwitterNode.classList.add('host-twitter');
			hostTwitterNode.href = slot.hostTwitter;
			hostNode.appendChild(hostTwitterNode);
			let hostTwitterIconNode = document.createElement('i');
			hostTwitterIconNode.classList.add('fab', 'fa-twitter');
			hostTwitterNode.appendChild(hostTwitterIconNode);
		}
		slotNode.appendChild(hostNode);
	}

	if(slot.guest) {
		let guestNode = document.createElement('div');
		guestNode.classList.add('guest');
		guestNode.textContent = slot.guest;
		slotNode.appendChild(guestNode);
	}


	day2.appendChild(slotNode);

	console.log(slot.time);

}