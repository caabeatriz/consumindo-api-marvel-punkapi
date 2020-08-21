// API endpoint --------------------------------------------
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const urlvalida = 'http://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173'

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.pokemon'),
      erroMessage = getElement('.error');

var pokeName, // Nome ou numero passado na caixa de busca
    pokemon, // Responsavel por guardar os dados recebidos da API
    card; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel pokemon
function requestPokeInfo( name) {
  fetch('http://gateway.marvel.com/v1/public/characters?name='+name+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173')
    .then(response => response.json())
    .then(data => {
      pokemon = data.data.results;
      console.log(pokemon[0].name)
    })
    .catch(err => console.log(err));
}

// Função responsavel por montar o HTML exibido na pagina
function createCard () {
    console.log(pokemon[0])
  card = `
  
    <div class="pokemon-info">
        <h1 class="name">Name: ${pokemon[0].name}</h1>
        <p>Descrição: ${pokemon[0].description}</p>
        <img src="http://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173/ + pokemon[0].thumbnail.path + pokemon[0].thumbnail.extension" />
    </div>`;
    console.log(pokemon)
    console.log(pokemon[0].thumbnail.path)

  return card;

}

// Função que faz a chamada das principais funções e inicia o app
function startApp(pokeName) {
  requestPokeInfo(pokeName);

  setTimeout(function () {
      container.innerHTML = createCard();
  }, 2000);
}

// Add Events --------------------------------------------
searchButton.addEventListener('click', event => {
  event.preventDefault();
  pokeName = searchInput.value.toLowerCase();
  startApp(pokeName);
});

// se o valor for 1 que é igual a nome faça 
