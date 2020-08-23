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
    .catch()
    }
    console.log(captureSelect())
}


