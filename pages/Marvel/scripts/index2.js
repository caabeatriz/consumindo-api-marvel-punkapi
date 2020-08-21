// API endpoint
const baseUrl = 'http://gateway.marvel.com/v1/public/characters?ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173';

function getElement(element) {
    return document.querySelector(element);
  }


// Get Elements
const searchInput = getElement('.search-input'),
searchButton = getElement('.search-button'),
container = getElement('.pokemon'),
erroMessage = getElement('.error');

var pokeName, // Nome ou numero passado na caixa de busca
pokemon, // Responsavel por guardar os dados recebidos da API
card; // Responsavel por receber o HTML