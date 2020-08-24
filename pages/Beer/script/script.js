const searchButton = document.querySelector(".search-button")
fetch('https://api.punkapi.com/v2/beers?beer_name=punk')
    .then(response => response.json())
    .then(data => {
        createAboutBeers()
        console.log('teste', data)
    })
    .catch(err => console.log('erro', err)
    )
//Para clicar no botão e trazer o valor do input
searchButton.addEventListener('click', event => {
    event.preventDefault();
    request()
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

    } else if (captureSelect() == 'date'){
        url ='https://api.punkapi.com/v2/beers?beer_name=teste'+valueInput
    }
    return url 
}

validateSelect()
// Para entrar na api
function request (){
    var requestUrl = validateSelect()
    fetch('https://api.punkapi.com/v2/beers?beer_name=punk')
    .then(response => response.json())
    .then(data => {
        createAboutBeers()
        console.log('teste', data)
    })
    .catch(err => console.log('erro'))

}

// function validateInput() {
//     name = captureInput()

//     if(captureSelect() == "name"){
//         fetch('https://api.punkapi.com/v2/beers?beer_name='+name)
//         .then(response => response.json())
//         .then(data =>
//             console.log(data)
            
//         )
//         .catch(
//             console.log("errorrrrrrr", error())
//             //Aqui é para adicionar uma função de tratar o erro
//         )
//          if  (captureSelect() == 'year'){

//         }
//         else {
//             console.log("else")
//         }
//     }
//     console.log(captureSelect())
// }

function error(){
    //Criar um html com os dizeres 'Não encontramos o que você digitou' 
    //Inserir umgif
    var teste = "erro"
    return teste ; 
}
function createAboutBeers(){
    //Criar aqui um html para criar as informalões de divs e limpar caso tenha a div de erro
    card = `
        <div class="beer-info">
            <h1 class="name">Name: </h1>
            <p>  </p>
        </div>`
    ;
    console.log(data.name)
    return card;
}