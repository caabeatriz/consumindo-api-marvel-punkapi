
const container = document.querySelector(".favorites")
var jsonTitle = localStorage.getItem("titleComics").split(',')
var jsonImg = localStorage.getItem("imgComics").split(',')

for(let i = 0; i < jsonTitle.length; i++){
    console.log(jsonTitle[i])   
     console.log(jsonImg[i])
    card = `
    <div class="card-favorites"> 
        <h1>${jsonTitle[i]}</h1>
        <img  class="favorites-img"   src="${jsonImg[i]}" alt="Image of ${jsonTitle[i]}">
    </div>
   `
   container.innerHTML += card;
}