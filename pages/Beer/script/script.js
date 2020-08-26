const searchButton = document.querySelector(".search-button")
const container = document.querySelector('.beersInformation')
const containerFav = document.querySelector('.favorites')
var beers;
var favorites = [];
var favoritesImg = [];

function startApp() {
    createAboutBeers()
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    request()
    container.innerHTML = ''
});

function captureSelect() {
    var select = document.getElementById('filtersBeers');
    var value = select.options[select.selectedIndex].value;
    return value;
}
function captureInput() {
    var inputValue = document.querySelector('#searchInputBeer').value
    return inputValue;
}

function validateSelect() {
    var url
    var valueInput = captureInput();

    if (captureSelect() == 'name') {
        url = 'https://api.punkapi.com/v2/beers?beer_name=' + valueInput;

    } else if (captureSelect() == 'food') {
        url = 'https://api.punkapi.com/v2/beers?food=' + valueInput;
    }

    return url
}

function request() {
    var requestUrl = validateSelect()
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            beers = data
            startApp()
        })
        .catch(err => {
            error()
        })

}
function error() {

    erroUrl = `
        <div class="erro">
            <h3 class="erro-title">
            We didn't find what you typed </h3>
            <p class="erro-title"> Try Again! </p>
            <img src="../../assets/gameover.gif">
        </div>
    `
    container.innerHTML += erroUrl;
    return erroUrl;
}
function createAboutBeers() {
    if (captureSelect() == 'food') {
        for (var i = 0; i < beers.length; i++) {
            card = `
                <div class="card beer-info">
                <div class="card-body">
                <button  class="starButton outline black-blue"  onclick="setLocal(), this.disabled=true;" data-index=${i} > Add my favorites </button>
                <h4 class="card-boby-match"> Matching foods: ${beers[i].food_pairing}</h4>
                    <h4 class="card-title">Name:  ${beers[i].name}  </h4>
                    <img class="card-img" src="${beers[i].image_url}" alt= "Image of ${beers[i].name}"> 
                    <p class="card-text">  ${beers[i].description}</p>
                </div>`;
            container.innerHTML += card;
        }
    }

    else if (captureSelect() == 'name') {
        for (let i = 0; i < beers.length; i++) {
            card = `
                <div class=" card beer-info">
                <button  class="starButton outline black-blue" onclick="setLocal(), this.disabled=true;" data-index=${i} > Add my favorites </button>
                <div class="card-body">
                    <h4 class="card-title">Name: ${beers[i].name}  </h4>
                    <img class="card-img" src="${beers[i].image_url}" alt""> 
                    <p class="card-text">  ${beers[i].description}</p>
                </div>`;
            container.innerHTML += card;
        }
    }
    return card;
}

function setLocal() {
    let index = event.target.dataset.index;
    var verification = favorites.includes(beers[index].name);
    if (verification == false) {
        favorites.push(beers[index].name);
        favoritesImg.push(beers[index].image_url)
    }
    else {
    }
    localStorage.setItem('name', favorites)
    localStorage.setItem('imgBeers', favoritesImg)
}
