let pokemon = [
  {
    'name': 'Charizard',
    'type': 'Fire',
    'image': 'Pokemon_Images/Charizard.jpg'
  },
  {
    'name': 'Blastoise',
    'type': 'Water',
    'image': 'Pokemon_Images/Blastoise.jpg'
  },
  {
    'name': 'Venusaur',
    'type': 'Grass',
    'image': 'Pokemon_Images/Venusaur.jpg'
  }
]

let container = document.querySelector('div')
let pokeball = document.querySelector('button')

let type1 = pokemon[0].type;
let type2 = pokemon[1].type;
let type3 = pokemon[2].type;


let playerPokemon = {}
const choice1 = () => {
  let newImg = document.createElement('img')
  newImg.classList.add('player')
  let randomNum = Math.floor(Math.random() * 3)
  newImg.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg)
  playerPokemon = pokemon[randomNum]
  return playerPokemon
}
pokeball.addEventListener('click', choice1)

let cpuChoice = {}
const cpuPokemon = () => {
  let newImg2 = document.createElement('img')
  newImg2.classList.add('cpu')
  let randomNum = Math.floor(Math.random() * 3)
  newImg2.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg2)
  cpuChoice = pokemon[randomNum]
  if (playerPokemon.type === cpuChoice.type) {
    console.log('draw')
  }

  return pokemon[randomNum]
}
pokeball.addEventListener('click', cpuPokemon)





