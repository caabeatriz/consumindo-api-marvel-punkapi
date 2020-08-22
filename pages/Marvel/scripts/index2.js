// API endpoint --------------------------------------------
const baseUrl = 'https://pokeapi.co/api/v2/pokemon/';
const urlvalida = 'http://gateway.marvel.com/v1/public/characters?name=Hulk&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173'

// Get Elements --------------------------------------------
const searchInput = getElement('.search-input'),
      searchButton = getElement('.search-button'),
      container = getElement('.heroes'),
      erroMessage = getElement('.error');

var heroesName, // Nome ou numero passado na caixa de busca
    heroes, // Responsavel por guardar os dados recebidos da API
    card; // Responsavel por receber o HTML 

// Build Functions --------------------------------------------

// Função para reduzir a escrita na captura de elementos HTML
function getElement(element) {
  return document.querySelector(element);
}

// Função responsavel por fazer requisições para a API e inserir as respostas na variavel heroes
function requestHeroesName( name) {
  fetch('http://gateway.marvel.com/v1/public/characters?name='+name+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173')
    .then(response => response.json())
    .then(data => {
      heroes = data.data;
    })
    .catch(err => console.log(err));
}
function requestYearCreate( year) {
    fetch('http://gateway.marvel.com/v1/public/characters?name='+year+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173')
      .then(response => response.json())
      .then(data => {
        heroes = data.data;
      })
      .catch(err => console.log(err));
  }
  
// Função responsavel por montar o HTML exibido na pagina
function createAboutHeroes () {
const {results: {0 : {name}}} = heroes;
const {results: {0 : {description}}} = heroes;
  card = `
    <div class="heroes-info">
        <h1 class="name">Name: ${name}</h1>
        <p> ${description} </p>
    </div>`;
  return card;
}

// Função que faz a chamada das principais funções e inicia o app
function startApp(heroesName) {
    //Seleciona as opções do select
    
        if( captureSelect() == 'name'){
            console.log("deu certo")
            requestHeroesName(heroesName);
            setTimeout(function () {
                container.innerHTML = createAboutHeroes();
            }, 2000);           
        }else if ( captureSelect() == 'date'){
            console.log("deu ce1rto")
        }
}

// Add Events --------------------------------------------
searchButton.addEventListener('click', event => {
  event.preventDefault();
  heroesName = searchInput.value;
  startApp(heroesName);
});

// capturar o valor do select
function captureSelect(){
    var select = document.getElementById('filtersHeroes');
    var value = select.options[select.selectedIndex].value;
	return value;
}



