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
const soeda = new Contributor("Soeda Ippei", "Artist", "https://twitter.com/Ippei_painter", undefined)

const nairo = new Contributor("NairoMK", "Gameplayer", "https://twitter.com/Nairomk", "https://www.twitch.tv/NairoMK")
const gwim = new Contributor("Gwimpage", "Gameplayer", "https://twitter.com/Gwimpage", "https://twitch.tv/Gwimpage")
const kirby = new Contributor("Kirbymastah", "Gameplayer", "https://twitter.com/Kirbymastah", "https://www.twitch.tv/KirbymastaH")

const quo = new Contributor("quo", "Commentary", "https://twitter.com/ironically_quo", "https://www.twitch.tv/quoooo")

const christian = new Contributor("Christian La Monte", "Voice Actor", "https://twitter.com/WritingMadness", "https://www.twitch.tv/countoflamontecristo")
const deva = new Contributor("Deva Marie", "Voice Actor", "https://twitter.com/deva_marie", undefined)
const allegra = new Contributor("Allegra Clark", "Voice Actor", "https://twitter.com/SimplyAllegra", undefined)
const jenny = new Contributor("Jenny Yokobori", "Voice Actor", "https://twitter.com/JennyYokobori", undefined)
const morgan = new Contributor("Morgan Berry", "Voice Actor", "https://twitter.com/TheMorganBerry", undefined)
const yuri = new Contributor("Yuri Lowenthal", "Voice Actor", "https://twitter.com/YuriLowenthal", undefined)
const joe = new Contributor("Joe Zieja", "Voice Actor", "https://twitter.com/JoeZieja", "https://www.twitch.tv/joezieja")
const ratana = new Contributor("Ratana", "Voice Actor", "https://twitter.com/diamondsong", undefined)
const greg = new Contributor("Greg Chun", "Voice Actor", "https://twitter.com/Greg_Chun", "https://www.twitch.tv/Greg_Chun")
const chris = new Contributor("Chris Hackney", "Voice Actor", "https://twitter.com/ChrisHackneyGGK", "https://www.twitch.tv/chrishackneyva")
const tara = new Contributor("Tara Platt", "Voice Actor", "https://twitter.com/Taraplatt", undefined)
const brianna = new Contributor("Brianna Knickerbocker", "Voice Actor", "https://twitter.com/briannanoellek", undefined)
const amanda = new Contributor("Amanda Celine Miller", "Voice Actor", "https://twitter.com/Amanda_Celine", undefined)
const julie = new Contributor("Julie Ann Taylor", "Voice Actor", "https://twitter.com/MrsJulieATaylor", undefined)
const misty = new Contributor("Misty Lee", "Voice Actor", "https://twitter.com/Misty_Lee", undefined)
const kyle = new Contributor("Kyle McCarley", "Voice Actor", "https://www.twitch.tv/kylemccarley", undefined)
const erica = new Contributor("Erica Lindbeck", "Voice Actor", "https://twitter.com/ericalindbeck", undefined)
const brandon = new Contributor("Brandon Winckler", "Voice Actor", "https://twitter.com/BWincklerVA", undefined)

const sei = new Contributor("Yaycupcake", "Team FE", "https://twitter.com/XinChun93", "https://www.twitch.tv/DiscoOmastar")
const elie = new Contributor("Elieson", "Team FE", "https://twitter.com/TheElieson", "https://www.twitch.tv/the_elieson")
const ddd = new Contributor("DarkDogDemon", "Team FE", undefined, "https://www.twitch.tv/huluandwoohoo")
const michelle = new Contributor("Michelle_Tan", "Team FE", "https://twitter.com/michelle_tan101", "https://www.twitch.tv/michelle_tan101")
const djb = new Contributor("DJB2Spirit", "Team FE", "https://twitter.com/djb2spirit", "https://www.twitch.tv/djb2spirit")
const bluetulip = new Contributor("BlueTulip", "Team FE", "https://twitter.com/BluesTulips", "https://www.twitch.tv/bluetulips")


const aki = new Contributor("Akialyne", "Team FE (Team Joe Zieja)", "https://twitter.com/akialyne", undefined)
const boo = new Contributor("BootyFarts22", "Team FE (Team Joe Zieja)", "https://twitter.com/BootyFarts22", undefined)
const ice = new Contributor("Icemilk", "Team FE (Team Joe Zieja)", "https://twitter.com/IcemilkArt", undefined)
const soft = new Contributor("Softguitar", "Team FE (Team Joe Zieja)", "https://twitter.com/soft_guitar60", undefined
const hina = new Contributor("Hinapuff", "Team FE (Team Joe Zieja)", "https://twitter.com/hinapuff", undefined)
const trainer = new Contributor("TrainerTrevino", "Team FE (Team Joe Zieja)", "https://twitter.com/TrainerTrevino", undefined)



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
