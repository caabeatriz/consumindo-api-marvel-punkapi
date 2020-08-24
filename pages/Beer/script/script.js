const searchButton = document.querySelector(".search-button")

//Para clicar no botão e trazer o valor do input
searchButton.addEventListener('click', event => {
    event.preventDefault();
    validateInput()
});

// Para capturar o valor do input
function captureSelect() {
    var select = document.getElementById('filtersBeers');
    var value = select.options[select.selectedIndex].value;
    return value;
}

function validateInput() {

    if(captureSelect() == "name"){
        fetch('https://api.punkapi.com/v2/beers?food='+name)
        .then(response => response.json())
        .then(data =>
            console.log(data)
        )
    .catch(
        console.log("errorrrrrrr", error())
        //Aqui é para adicionar uma função de tratar o erro
        
    )
    }
    console.log(captureSelect())
}

function error(){
    //Criar um html com os dizeres 'Não encontramos o que você digitou' 
    //Inserir umgif
    return Teste ; 
}
function createInfo(){
    //Criar aqui um html para criar as informalões de divs e limpar caso tenha a div de erro
}