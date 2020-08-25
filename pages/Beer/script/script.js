const searchButton = document.querySelector(".search-button")
const container = document.querySelector('.beersInformation')
var beers;
// fetch('https://api.punkapi.com/v2/beers?beer_name=punk')
// .then(response => response.json())
// .then(data => {
//     beers = data;  
//     createAboutBeers()
//     })
//     .catch(err => console.error(err))

//Para clicar no botão e trazer o valor do input
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
function captureInput () {
    var inputValue = document.querySelector('#searchInputBeer').value
    return inputValue;
}

//Para validar o select
function validateSelect(){
    var url
    var valueInput = captureInput();

    if(captureSelect() == 'name'){
        url = 'https://api.punkapi.com/v2/beers?beer_name='+valueInput; 

    } else if (captureSelect() == 'food'){
        url ='https://api.punkapi.com/v2/beers?food='+valueInput;
    }

    return url
}


// Para entrar na api
function request (){
    var requestUrl = validateSelect()
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        beers= data
        createAboutBeers()
    })
    .catch(err => console.error('erro'))

}

function error(){
    //Criar um html com os dizeres 'Não encontramos o que você digitou' 
    //Inserir umgif
    var teste = "erro"
    return teste ; 
}

function createAboutBeers(){
    //Criar aqui um html para criar as informalões de divs e limpar caso tenha a div de erro
    // Coloca todos os campos, mas os q estiverem vazios deixa em branco
    if (captureSelect() == 'food'){
        for (var i = 0 ; i < beers.length; i++){
            card = `
                <div class=" card beer-info">
                <div class="card-body">
                    <h4 class="card-title">Name: TESTEEEEEEE ${beers[i].name}  </h4>
                    <p class=""> Alimentos que combinam: ${beers[i].food_pairing}</p>
                    <p class="card-text">  ${beers[i].description}</p>
                    <img class="card-img" src="${beers[i].image_url}" alt""> 
                </div>`
            ;
            container.innerHTML += card;
         }
    }else if (captureSelect() == 'name' ){
        for (var i = 0 ; i < beers.length; i++){
            card = `
                <div class=" card beer-info">
                <div class="card-body">
                    <h4 class="card-title">Name: ${beers[i].name}  </h4>
                    <p class="card-text">  ${beers[i].description}</p>
                    <img class="card-img" src="${beers[i].image_url}" alt""> 
                </div>`
            ;
            container.innerHTML += card;
         }
    }
  

    return card;
}



