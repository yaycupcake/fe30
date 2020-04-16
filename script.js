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
    event: "FE3H Speedrun (Bid War)",
    host: "Kirbymastah",
    hostTwitter: "https://twitter.com/KirbyMastah",
    hostTwitch: "https://www.twitch.tv/kirbymastah",
    guest: "Gwimpage"
  },
  {
    time: "3:30PM",
    event: "Break #1"
  },
  {
    time: "4:00PM",
    event: "PoR Speedrun",
    host: "Gwimpage",
    guest: "Kirbymastah",
    guestTwitter: "https://twitter.com/KirbyMastah",
    guestTwitch: "https://www.twitch.tv/kirbymastah"
  },
  {
    time: "6:00PM",
    event: "Break #2"
  },
  {
    time: "6:30PM",
    event: "Drawing with Ignatz",
    host: "Christian La Monte",
    hostTwitter: "https://twitter.com/WritingMadness",
    guest: "HellyonWhite, Ciarre, 24914, tecchen, and more"
  },
  {
    time: "8:30PM",
    event: "Break #3"
  },
  {
    time: "9:00PM",
    event: "Party Games w/FE Talent",
    host: "Kayli Mills, Jenny Yokobori"
  },
  {
    time: "12:00AM",
    event: "Evening Wrapup",
    host: "darkdogdemon"
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
    if (slot.hostTwitch) {
      let hostTwitchNode = document.createElement('a');
      hostTwitchNode.classList.add('host-twitch');
      hostTwitchNode.href = slot.hostTwitch;
      hostNode.appendChild(hostTwitchNode);
      let hostTwitchIconNode = document.createElement('i');
      hostTwitchIconNode.classList.add('fab', 'fa-twitch');
      hostTwitchNode.appendChild(hostTwitchIconNode);
    }

    slotNode.appendChild(hostNode);
  }

  if (slot.guest) {
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
    if (slot.guestTwitch) {
      let guestTwitchNode = document.createElement('a');
      guestTwitchNode.classList.add('guest-twitch');
      guestTwitchNode.href = slot.guestTwitch;
      guestNode.appendChild(guestTwitchNode);
      let guestTwitchIconNode = document.createElement('i');
      guestTwitchIconNode.classList.add('fab', 'fa-twitch');
      guestTwitchNode.appendChild(guestTwitchIconNode);
    }

    slotNode.appendChild(guestNode);
  }


  day1.appendChild(slotNode);

  console.log(slot.time);

}




///



const dayTwoSchedule = [
  {
    time: "4:30PM",
    event: "Intro",
    host: "darkdogdemon",
  },
  {
    time: "5:00PM",
    event: "Deer Abbey",
    host: "Joe Zieja",
    hostTwitch: "https://twitch.tv/joezieja",
    guest: "Ratana, Chris Hackney"
  },
  {
    time: "6:00PM",
    event: "Break"
  },
  {
    time: "6:30PM",
    event: "Smash Bros FE themed Challenges",
    host: "NairoMK",
    hostTwitch: "https://twitch.tv/nairomk",
    guest: "Special Guest"
  },
  {
    time: "9:00PM",
    event: "Event Wrapup",
    host: "darkdogdemon"
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
    if (slot.hostTwitch) {
      let hostTwitchNode = document.createElement('a');
      hostTwitchNode.classList.add('host-twitch');
      hostTwitchNode.href = slot.hostTwitch;
      hostNode.appendChild(hostTwitchNode);
      let hostTwitchIconNode = document.createElement('i');
      hostTwitchIconNode.classList.add('fab', 'fa-twitch');
      hostTwitchNode.appendChild(hostTwitchIconNode);
    }
    slotNode.appendChild(hostNode);
  }

  if (slot.guest) {
    let guestNode = document.createElement('div');
    guestNode.classList.add('guest');
    guestNode.textContent = slot.guest;
    slotNode.appendChild(guestNode);
  }


  day2.appendChild(slotNode);

  console.log(slot.time);

}