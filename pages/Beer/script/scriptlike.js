
const container = document.querySelector(".favorites");
var jsonName = localStorage.getItem("name").split(',');
var jsonImg = localStorage.getItem("imgBeers").split(',');


for(let i = 0; i < jsonName.length; i++){
    console.log(jsonName[i])
     console.log(jsonImg[i])
    card = `
    <div class="card-favorites"> 
        <h2 class="card-favorites-title">${jsonName[i]}</h2>
        <img  class="beersFavorites-img"   src="${jsonImg[i]}" alt="Image of ${jsonName[i]}">
    </div>
   `
   container.innerHTML += card;
}


// const container = document.querySelector(".favorites")
// var jsonTitle = localStorage.getItem("titleComics").split(',')
// var jsonImg = localStorage.getItem("imgComics").split(',')
// // let arraySeparator = json.split(',');

// for(let i = 0; i < jsonTitle.length; i++){
//     console.log(jsonTitle[i])   
//      console.log(jsonImg[i])
//     card = `
//     <div class="card-favorites"> 
//         <h1>${jsonTitle[i]}</h1>
//         <img  class="favorites-img"   src="${jsonImg[i]}" alt="Image of ${jsonTitle[i]}">
//     </div>
//    `
//    container.innerHTML += card;
// }