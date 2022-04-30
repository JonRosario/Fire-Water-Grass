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
function randomNum() {
  return Math.floor(Math.random() * 3)
}
// console.log(randomNum())

function findPokemon() {
  let newImg = document.createElement('img')
  // let randomNum = Math.floor(Math.random() * 3)
  randomNum()
  newImg.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg)
  return pokemon[randomNum]
}
pokeball.addEventListener('click', findPokemon)

function findPokemon2() {
  let newImg = document.createElement('img')
  // let randomNum = Math.floor(Math.random() * 3)
  randomNum()
  newImg.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg)
  return pokemon[randomNum]
}
pokeball.addEventListener('click', findPokemon2)

console.log(findPokemon())





















