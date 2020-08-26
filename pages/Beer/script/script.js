const searchButton = document.querySelector(".search-button")
const container = document.querySelector('.beersInformation')
const containerFav = document.querySelector('.favorites')
var beers;
var favorites = [];
var favoritesImg = [];
// fetch('https://api.punkapi.com/v2/beers?beer_name=punk')
// .then(response => response.json())
// .then(data => {
//     beers = data;  
//     createAboutBeers()
//     })
//     .catch(err => console.error(err))

//Para clicar no botão e trazer o valor do input

function startApp() {
    createAboutBeers()
}

searchButton.addEventListener('click', event => {
    event.preventDefault();
    request()
    container.innerHTML = ''
});

// Para capturar o valor do select
function captureSelect() {
    var select = document.getElementById('filtersBeers');
    var value = select.options[select.selectedIndex].value;
    return value;
}
// Para capturar o valor do select
function captureInput() {
    var inputValue = document.querySelector('#searchInputBeer').value
    return inputValue;
}

//Para validar o select
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


// Para entrar na api
function request() {
    var requestUrl = validateSelect()
    fetch(requestUrl)
        .then(response => response.json())
        .then(data => {
            beers = data
            startApp()
        })
        .catch(err => console.error('erro'))

}

function error() {
    //Criar um html com os dizeres 'Não encontramos o que você digitou' 
    //Inserir umgif
    var teste = "erro"
    return teste;
}

function createAboutBeers() {
    //Criar aqui um html para criar as informalões de divs e limpar caso tenha a div de erro
    // Coloca todos os campos, mas os q estiverem vazios deixa em branco
    if (captureSelect() == 'food') {
        for (var i = 0; i < beers.length; i++) {
            card = `
                <div class="card beer-info">
                <div class="card-body">
                <button  class="starButton outline black-blue" > Add my favorites </button>
                <h4 class="card-boby-match"> Alimentos que combinam: ${beers[i].food_pairing}</h4>
                    <h4 class="card-title">Name:  ${beers[i].name}  </h4>
                    <img class="card-img" src="${beers[i].image_url}" alt= "Image of ${beers[i].name}"> 
                    <p class="card-text">  ${beers[i].description}</p>
                </div>`

                ;
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

// ao clicar na estrela salva uma classe para favoritar
// function setLocal() {
//     let index = event.target.dataset.index;
//     var verification = favorites.includes(beers[index].name);
    
//     if (verification == false) {
//         favorites.push(beers[index].name);
//     } 
//     else {
//     }
    
//     localStorage.setItem('name', favorites)
// }

function setLocal() {
    let index = event.target.dataset.index;
    console.log(beers.image_url)
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
    // incluir o resultado e entrar no laço dnv e verificar se resultado ja existe se nao exister inclui

    // for(let i = 0 ; i < favorites1.length; i ++){
    //     console.log("teste", favorites1[i])
    //     card = `
    //      <div class=""> testetete </div>
    //     `
    // }

    // se o valor ja estiver no local storage, não adiciona dnv

    // containerFav.innerHTMLa+=  card;