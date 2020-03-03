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
];


const day1 = document.querySelector("#day1");

let testThing = document.createElement('div');
testThing.textContent = "asdf testing";

day1.appendChild(testThing);

for (let i = 0; i < dayOneSchedule.length; i++) {

	let slot = dayOneSchedule[i];

	let slotNode = document.createElement('div');
	slotNode.classList.add('slot');

	let timeNode = document.createElement('div');
	timeNode.classList.add('time');
	timeNode.textContent = slot.time;
	slotNode.appendChild(timeNode);

	day1.appendChild(slotNode);
	// document.querySelector("#day1").appendChild(slotNode);

}