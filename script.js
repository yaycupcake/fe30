const dayOneSchedule = [
{
	time: "10:00AM",
	event: "Placeholder Speedrun",
	host: "Host's Name Here",
	guest: "Super Cool Voice Actor"
},
{
	time: "11:00AM",
	event: "Placeholder Showcase",
	host: "Cool Host Dude",
	guest: "Mr. Person Human"
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

	let hostNode = document.createElement('div');
	hostNode.classList.add('host');
	hostNode.textContent = slot.host;
	slotNode.appendChild(hostNode);

	let guestNode = document.createElement('div');
	guestNode.classList.add('guest');
	guestNode.textContent = slot.guest;
	slotNode.appendChild(guestNode);


	day1.appendChild(slotNode);

	console.log(slot.time);

}