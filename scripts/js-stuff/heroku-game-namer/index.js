const adjectives = ["Autumn", "Hidden", "Bitter", "Misty", "Silent", "Empty", "Dry", "Dark", "Summer", "Icy", "Delicate", "Quiet", "White", "Cool", "Spring", "Winter", "Patient", "Twilight", "Dawn", "Crimson", "Wispy", "Weathered", "Blue", "Billowing", "Broken", "Cold", "Damp", "Falling", "Frosty", "Green", "Long", "Late", "Lingering", "Bold", "Little", "Morning", "Muddy", "Old", "Red", "Rough", "Still", "Small", "Sparkling", "Shy", "Wandering", "Withered", "Wild", "Black", "Young", "Holy", "Solitary", "Fragrant", "Aged", "Snowy", "Proud", "Floral", "Restless", "Divine", "Polished", "Ancient", "Purple", "Lively", "Nameless"]

const gameNames = ["The Legend of Zelda: Ocarina of Time", "Pac-Man", "Super Mario Bros.", "Mario Bros.", "Donkey Kong", "Super Mario Bros. 3", "Super Mario Kart", "Tetris: The Soviet Mind Game", "Doom", "The Legend of Zelda", "Mortal Kombat", "Super Mario World", "The Legend of Zelda: A Link to the Past", "Space Invaders", "Galaga", "Contra", "Super Smash Bros.", "Sonic the Hedgehog", "Dig Dug", "Paperboy", "Gauntlet", "Donkey Kong Country", "Pokémon Red and Blue", "Metroid", "Street Fighter", "Ms. Pac-Man", "NBA Jam", "Double Dragon", "Tetris", "Mario Kart 64", "SimCity", "Metal Gear Solid", "Pole Position", "Final Fantasy VI", "Asteroids", "Final Fantasy VII", "Grand Theft Auto", "GoldenEye 007", "The Legend of Zelda: Link's Awakening", "Mario Party", "Final Fantasy I-II", "Duck Hunt", "Prince of Persia", "SimCity 2000", "Defender", "Super Mario 64", "Resident Evil", "Pitfall!", "Lemmings", "Sonic the Hedgehog 2", "Crash Bandicoot", "Super Mario Bros. 2", "Worms Armageddon", "Street Fighter II", "Civilization", "Pong", "Zelda II: The Adventure of Link", "Chrono Trigger", "Frogger", "Mega Man 2", "Age of Empires", "Pokémon Gold and Silver", "Joust", "Final Fantasy V", "Final Fantasy IV", "Super Metroid", "The Legend of Zelda: Majora's Mask", "Boulder Dash", "Warcraft: Orcs & Humans", "DuckTales", "Secret of Mana", "Stunts", "Galaga '88", "Tomb Raider", "Rygar", "Final Fantasy VIII", "Tekken", "The Secret of Monkey Island", "Sonic the Hedgehog 3", "Baldur's Gate", "Teenage Mutant Ninja Turtles", "Final Fantasy IX", "Doom II: Hell on Earth", "Spyro the Dragon", "Golden Axe", "Silent Hill", "Final Fantasy III", "Gran Turismo", "Resident Evil 2", "Mega Man X", "Star Fox", "Dune II: The Building of a Dynasty", "Techmo Bowl", "Diablo", "Civilization II", "Pokémon Yellow", "Lemmings 2: The Tribes", "Tekken 3", "Golden Axe II", "Elevator Action"]

const randomNum = (limit) => {
  return Math.floor(Math.random() * limit)
}

const randomItem = (array) => {
  const index = randomNum(array.length)
  return array[index]
}

const nameThatGame = () => {
  return `${randomItem(adjectives)} ${randomItem(gameNames)}`
}

window.onload =  function() {
  const generate = document.getElementById("generate")
  const output = document.getElementById("output")
  const save = document.getElementById("save")
  const savedOutput = document.getElementById("savedOutput")
  const clear = document.getElementById("clear")

  generate.onclick = () =>
    output.innerHTML = nameThatGame()

  save.onclick = () =>
    savedOutput.innerHTML += output.innerHTML + "\n"

  clear.onclick = () =>
    savedOutput.innerHTML = ""
}
