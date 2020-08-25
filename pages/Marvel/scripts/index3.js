const searchButton = document.querySelector(".search-button")
const container = document.querySelector('.heroes')
var heroes;
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
    var select = document.getElementById('filtersHeroes');
    var value = select.options[select.selectedIndex].value;
    return value;
}
// Para capturar o valor do select
function captureInput () {
    var inputValue = document.querySelector('.search-input').value
    return inputValue;
}

//Para validar o select
function validateSelect(){
    var url
    var valueInput = captureInput();

    if(captureSelect() == 'name'){
        url = 'http://gateway.marvel.com/v1/public/characters?name='+valueInput+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173'; 

    } else if (captureSelect() == 'date'){
        url ='http://gateway.marvel.com/v1/public/comics?title='+valueInput+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173';
    }

    return url
}


// Para entrar na api
function request (){
    var requestUrl = validateSelect()
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        heroes= data.data
        createAboutBeers()
    })
    .catch(err => console.error(err))

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
    const {results: {0 : {name}}} = heroes;
    const {results: {0 : {description}}} = heroes;
 

    if (captureSelect() == 'date'){
        for (var i = 0 ; i < heroes.results.length; i++){
            const {results: {[i]: {title}}} = heroes;
            const {results: {[i]: {description}}} = heroes
            card = `
            <div class=" card beer-info">
            <div class="card-body">
                <h4 class="card-title">Name:  ${title} </h4>
                <p> ${description} </p>
            </div>`
            ;
            container.innerHTML += card;

           
         }}else if (captureSelect() == 'name' ){
            card = `
            <div class=" card beer-info">
            <div class="card-body">
                <h4 class="card-title">Name:  ${name} </h4>
                <p> ${description} </p>
            </div>`
            ;
            container.innerHTML += card;
         }
    return card;
}



