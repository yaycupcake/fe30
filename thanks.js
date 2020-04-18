const d = document

let section = d.querySelector("section.contributors")


let contributors = []

class Contributor {
  constructor(name, type, twitter, twitch) {
    this.name = name
    this.type = type
    this.twitter = twitter
    this.twitch = twitch
    contributors.push(this);
  }
}



const ciarre = new Contributor("Ciarre", "Artist", "https://twitter.com/ciarre_arts", "https://www.twitch.tv/ciarre")
const helly = new Contributor("HellyonWhite", "Artist", "https://twitter.com/HellyonWhite", "https://www.twitch.tv/hellyonwhite")
const okke = new Contributor("Okkefac", "Artist", "https://twitter.com/Okkefak", "https://www.twitch.tv/okkefac")
const tecc = new Contributor("Tecchen", "Artist", "https://twitter.com/Tecchen", "https://www.twitch.tv/tecchen")
const twofour = new Contributor("24914", "Artist", "https://twitter.com/24914x", undefined)

const nairo = new Contributor("NairoMK", "Gameplayer", "https://twitter.com/Nairomk", "https://www.twitch.tv/NairoMK")
const gwim = new Contributor("Gwimpage", "Gameplayer", "https://twitter.com/Gwimpage", "https://twitch.tv/Gwimpage")
const kirby = new Contributor("Kirbymastah", "Gameplayer", "https://twitter.com/Kirbymastah", "https://www.twitch.tv/KirbymastaH")

const christian = new Contributor("Christian La Monte", "Voice Actor", "https://twitter.com/WritingMadness", "https://www.twitch.tv/countoflamontecristo")
const deva = new Contributor("Deva Maria", "Voice Actor", "https://twitter.com/deva_marie", undefined)
const allegra = new Contributor("Allegra Clark", "Voice Actor", "https://twitter.com/SimplyAllegra", undefined)
const jenny = new Contributor("Jenny Yokobori", "Voice Actor", "https://twitter.com/JennyYokobori", undefined)
const morgan = new Contributor("Morgan Berry", "Voice Actor", "https://twitter.com/TheMorganBerry", undefined)
const yuri = new Contributor("Yuri Lowenthal", "Voice Actor", "https://twitter.com/YuriLowenthal", undefined)
const joe = new Contributor("Joe Zieja", "Voice Actor", "https://twitter.com/JoeZieja", "https://www.twitch.tv/joezieja")
const ratana = new Contributor("Ratana", "Voice Actor", "https://twitter.com/diamondsong", undefined)
const greg = new Contributor("Greg Chun", "Voice Actor", "https://twitter.com/Greg_Chun", "https://www.twitch.tv/Greg_Chun")

const sei = new Contributor("Yaycupcake", "Team FE", "https://twitter.com/XinChun93", undefined/*"https://www.twitch.tv/DiscoOmastar"*/)
const elie = new Contributor("Elieson", "Team FE", "https://twitter.com/TheElieson", "https://www.twitch.tv/the_elieson")
const ddd = new Contributor("DarkDogDemon", "Team FE", undefined, "https://www.twitch.tv/huluandwoohoo")
const michelle = new Contributor("Michelle_Tan", "Team FE", "https://twitter.com/michelle_tan101", "https://www.twitch.tv/michelle_tan101")
const djb = new Contributor("DJB2Spirit", "Team FE", "https://twitter.com/djb2spirit", "https://www.twitch.tv/djb2spirit")

// console.log(contributors)

contributors.forEach(person => {

  let fullNode = d.createElement("div")
  fullNode.classList.add("contrib")

  if (person.twitch) {
    let hostTwitchNode = document.createElement('a');
    hostTwitchNode.classList.add('host-twitch');
    hostTwitchNode.href = person.twitch;
    fullNode.appendChild(hostTwitchNode)
    let hostTwitchIconNode = document.createElement('i');
    hostTwitchIconNode.classList.add('fab', 'fa-twitch');
    hostTwitchNode.appendChild(hostTwitchIconNode);
  }

  if (person.twitter) {
    let hostTwitterNode = document.createElement('a');
    hostTwitterNode.classList.add('host-twitter');
    hostTwitterNode.href = person.twitter;
    fullNode.appendChild(hostTwitterNode)
    let hostTwitterIconNode = document.createElement('i');
    hostTwitterIconNode.classList.add('fab', 'fa-twitter');
    hostTwitterNode.appendChild(hostTwitterIconNode);
  }


  let nameNode = d.createElement("span")
  nameNode.textContent = person.name
  let typeNode = d.createElement("span")
  typeNode.textContent = ` (${person.type})`

  fullNode.appendChild(nameNode)
  fullNode.appendChild(typeNode)




  section.appendChild(fullNode)


});