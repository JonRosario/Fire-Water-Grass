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
  },
  {
    'name': 'Meganium',
    'type': 'grass',
    'image': 'Pokemon_Images/Meganium.jpg'
  },
  {
    'name': 'Typhlosion',
    'type': 'fire',
    'image': 'Pokemon_Images/Typhlosion.jpg',
  },
  {
    'name': 'Feraligatr',
    'type': 'water',
    'image': 'Pokemon_Images/Feraligatr.jpg'
  },
  {
    'name': 'Sceptile',
    'type': 'grass',
    'image': 'Pokemon_Images/Sceptile.jpg'
  },
  {
    'name': 'Blaziken',
    'type': 'fire',
    'image': 'Pokemon_Images/Blaziken.jpg'
  },
  {
    'name': 'Swampert',
    'type': 'water',
    'image': 'Pokemon_Images/Swampert.jpg'
  },
  {
    'name': 'Torterra',
    'type': 'grass',
    'image': 'Pokemon_Images/Torterra.jpg'
  },
  {
    'name': 'Infernape',
    'type': 'fire',
    'image': 'Pokemon_Images/Infernape.jpg'
  },
  {
    'name': 'Empoleon',
    'type': 'water',
    'image': 'Pokemon_Images/Empoleon.jpg'
  },
  {
    'name': 'Serperior',
    'type': 'grass',
    'image': 'Pokemon_Images/Serperior.jpg'
  },
  {
    'name': 'Emboar',
    'type': 'fire',
    'image': 'Pokemon_Images/Emboar.jpg'
  },
  {
    'name': 'Samurott',
    'type': 'water',
    'image': 'Pokemon_Images/Samurott.jpg'
  },
  {
    'name': 'Chesnaught',
    'type': 'grass',
    'image': 'Pokemon_Images/Chesnaught.jpg'
  },
  {
    'name': 'Delphox',
    'type': 'fire',
    'image': 'Pokemon_Images/Delphox.jpg'
  },
  {
    'name': 'Greninja',
    'type': 'water',
    'image': 'Pokemon_Images/Greninja.jpg'
  },
  {
    'name': 'Decidueye',
    'type': 'grass',
    'image': 'Pokemon_Images/Decidueye.jpg'
  },
  {
    'name': 'Incineroar',
    'type': 'fire',
    'image': 'Pokemon_Images/Incineroar.jpg'
  },
  {
    'name': 'Primarina',
    'type': 'water',
    'image': 'Pokemon_Images/Primarina.jpg'
  }
]

let container = document.querySelector('.playButton')
let pokeball = document.querySelector('#pokeball')

let fire = 'fire';
let water = 'water';
let grass = 'grass';

const choice1 = () => {
  container.innerHTML = ''
  let newImg = document.createElement('img')
  newImg.setAttribute('id', 'player')
  let randomNum = Math.floor(Math.random() * 21)
  newImg.setAttribute('src', pokemon[randomNum].image)
  newImg.setAttribute('class', 'pokeImg')
  container.appendChild(newImg)
  return pokemon[randomNum]
}

const cpuPokemon = () => {
  let newImg2 = document.createElement('img')
  newImg2.setAttribute('id', 'cpu')
  let randomNum = Math.floor(Math.random() * 21)
  newImg2.setAttribute('src', pokemon[randomNum].image)
  newImg2.setAttribute('class', 'pokeImg')
  container.appendChild(newImg2)
  cpuChoice = pokemon[randomNum]
  return pokemon[randomNum]
}

let h1 = document.createElement('h1')


function battle() {
  let playerPokemon = choice1()
  let cpuChoice = cpuPokemon()
  let playerImg = document.getElementById('player');
  let cpuImg = document.getElementById('cpu');

  if (playerPokemon.type === cpuChoice.type) {
    playerImg.style.width = '200px'
    playerImg.style.height = '200px'
    cpuImg.style.width = '200px'
    cpuImg.style.height = '200px'
    h1.innerText = 'Draw'
    h1.style.color = 'black';
    container.appendChild(h1)

  } else if (playerPokemon.type === fire && cpuChoice.type === grass) {
    playerImg.style.width = '300px';
    playerImg.style.height = '300px';
    h1.innerText = `${playerPokemon.name} Won!`
    h1.style.color = 'red';
    container.appendChild(h1)


  } else if (playerPokemon.type === water && cpuChoice.type === fire) {
    playerImg.style.width = '250px';
    playerImg.style.height = '250px';
    h1.innerText = `${playerPokemon.name} Won!`
    h1.style.color = 'blue';
    container.appendChild(h1)

  } else if (playerPokemon.type === grass && cpuChoice.type === water) {
    playerImg.style.width = '250px';
    playerImg.style.height = '250px';
    h1.innerText = `${playerPokemon.name} Won!`
    h1.style.color = 'green';
    container.appendChild(h1)

  } else if (playerPokemon.type === grass && cpuChoice.type === fire) {
    cpuImg.style.width = '250px'
    cpuImg.style.height = '250px'
    h1.innerText = `${cpuChoice.name} Won!`
    h1.style.color = 'red';
    container.appendChild(h1)

  } else if (playerPokemon.type === fire && cpuChoice.type === water) {
    cpuImg.style.width = '250px'
    cpuImg.style.height = '250px'
    h1.innerText = `${cpuChoice.name} Won!`
    h1.style.color = 'blue';
    container.appendChild(h1)

  } else if (playerPokemon.type === water && cpuChoice.type === grass) {
    cpuImg.style.width = '250px'
    cpuImg.style.height = '250px'
    h1.innerText = `${cpuChoice.name} Won!`
    h1.style.color = 'green';
    container.appendChild(h1)
  }
}

pokeball.addEventListener('click', battle)


