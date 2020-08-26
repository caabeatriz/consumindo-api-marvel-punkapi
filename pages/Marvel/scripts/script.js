const searchButton = document.querySelector(".search-button")
const container = document.querySelector('.heroes')
var heroes;
var favoritesHeroes = []
var favoritesImg = []

searchButton.addEventListener('click', event => {
    event.preventDefault();
    request()
    container.innerHTML = ''
});

function captureSelect() {
    var select = document.getElementById('filtersHeroes');
    var value = select.options[select.selectedIndex].value;
    return value;
}

function captureInput () {
    var inputValue = document.querySelector('.search-input').value
    return inputValue;
}

function validateSelect(){
    var url
    var valueInput = captureInput();

    if(captureSelect() == 'name'){
        url = 'https://gateway.marvel.com/v1/public/characters?name='+valueInput+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173'; 

    } else if (captureSelect() == 'comics'){
        url ='https://gateway.marvel.com/v1/public/comics?title='+valueInput+'&ts=1597969607472&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=56d9112cd2f9a18287f86c8361d7d173';
    }

    return url
}

function request (){
    var requestUrl = validateSelect()
    fetch(requestUrl)
    .then(response => response.json())
    .then(data => {
        heroes= data.data
        console.log(heroes.results.length)
        if(heroes.results.length == 0 ){
            error()
        }else {
            createAboutBeers()
        }
        
    })
    .catch(err => {
        console.log(err)
        error()
    }
    )
       
}

function error(){
    erroUrl = `
        <div class="erro">
            <h1 class="erro-title">
            We didn't find what you typed </h1>
            <p> Try Again! </p>
            <img src="../../assets/gameover.gif">
        </div>
    `
    container.innerHTML+= erroUrl;
    return erroUrl;
}

function createAboutBeers(){
   
    if (captureSelect() == 'comics'){
        for (var i = 0 ; i < heroes.results.length; i++){
            const {results: {[i]: {title}}} = heroes;
            const {results: {[i]: {description}}} = heroes
            const {results: {[i]: {thumbnail: {path}}}} = heroes;
            const  {results: {[i]: {thumbnail: {extension}}}} = heroes
            card = `
            <div class=" card beer-info">
            <button  class="starButton outline black-blue" onclick="setLocal(), this.disabled=true;"  data-index=${i} > Add favorite </button>
            <div class="card-body">
                <h4 class="card-title">Name:  ${title} </h4>
                <img  class="card-img" src="${path}.${extension}" alt="Image of ${name}" width="250">
                <div class="card-description">
                    <p class="card-description_title"> ${description} </p>
                </p>
            </div>`;
            container.innerHTML += card;           
         }}else if (captureSelect() == 'name' ){
            const {results: {0 : {name}}} = heroes;
            const {results: {0 : {description}}} = heroes;
            const {results: {0: {thumbnail: {path}}}} = heroes;
            const  {results: {0: {thumbnail: {extension}}}} = heroes
            card = `
            <div class="card beer-info">
            <div class="card-body">
                <h4 class="card-title">Name:  ${name} </h4>
                <img class="card-body-img" src="${path}.${extension}" alt="Image of ${name}" width="250" height="250">
               <div class="card-description">
                    <p  class="card-description_title"> ${description} </p>      
                </div>      
            </div>`;
            container.innerHTML += card;
         }
    return card;
}

function setLocal() {
    let index = event.target.dataset.index;
    var heroesImgArray = heroes.results[index].thumbnail.path+'.'+ heroes.results[index].thumbnail.extension
    console.log(heroesImgArray) 
    var verification = favoritesHeroes.includes(heroes.results[index].title);
    if (verification == false) {
        favoritesHeroes.push(heroes.results[index].title);
        favoritesImg.push(heroesImgArray)
    } 
    else {
    }
    localStorage.setItem('titleComics', favoritesHeroes)
    localStorage.setItem('imgComics', favoritesImg)

}

