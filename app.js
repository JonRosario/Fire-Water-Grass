let pokemon = [
  {
    'name': 'Charizard',
    'type': 'fire',
    'image': 'Pokemon_Images/Charizard.jpg'
  },
  {
    'name': 'Blastoise',
    'type': 'water',
    'image': 'Pokemon_Images/Blastoise.jpg'
  },
  {
    'name': 'Venusaur',
    'type': 'grass',
    'image': 'Pokemon_Images/Venusaur.jpg'
  }
]

let container = document.querySelector('.playButton')
let pokeball = document.querySelector('#pokeball')

let fire = pokemon[0].type;
let water = pokemon[1].type;
let grass = pokemon[2].type;

const choice1 = () => {
  container.innerHTML = ''
  let newImg = document.createElement('img')
  newImg.setAttribute('id', 'player')
  let randomNum = Math.floor(Math.random() * 3)
  newImg.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg)
  return pokemon[randomNum]
}

const cpuPokemon = () => {
  let newImg2 = document.createElement('img')
  newImg2.setAttribute('id', 'cpu')
  let randomNum = Math.floor(Math.random() * 3)
  newImg2.setAttribute('src', pokemon[randomNum].image)
  container.appendChild(newImg2)
  cpuChoice = pokemon[randomNum]
  return pokemon[randomNum]
}
function battle() {
  let playerPokemon = choice1()
  let cpuChoice = cpuPokemon()
  console.log(playerPokemon)
  console.log(cpuChoice)
  let playerImg = document.getElementById('player');
  let cpuImg = document.getElementById('cpu');

  if (playerPokemon.type === cpuChoice.type) {
    console.log('draw')
  } else if (playerPokemon.type === fire && cpuChoice.type === grass) {
    playerImg.style.width = '300px';
    playerImg.style.height = '300px';
    console.log('You Won!')
  } else if (playerPokemon.type === water && cpuChoice.type === fire) {
    playerImg.style.width = '200px';
    playerImg.style.height = '200px';
    console.log('You Won!')
  } else if (playerPokemon.type === grass && cpuChoice.type === water) {
    playerImg.style.width = '200px';
    playerImg.style.height = '200px';
    console.log('You Won!')
  } else if (playerPokemon.type === grass && cpuChoice.type === fire) {
    cpuImg.style.width = '300px'
    cpuImg.style.height = '300px'
    console.log('You Lost!')
  } else if (playerPokemon.type === fire && cpuChoice.type === water) {
    cpuImg.style.width = '200px'
    cpuImg.style.height = '200px'
    console.log('You Lost!')
  } else if (playerPokemon.type === water && cpuChoice.type === grass) {
    cpuImg.style.width = '200px'
    cpuImg.style.height = '200px'
    console.log('You Lost!')
  }
}

pokeball.addEventListener('click', battle)





