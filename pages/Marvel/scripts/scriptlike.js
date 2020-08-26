
const container = document.querySelector(".favorites")
var json = localStorage.getItem("titleComics")
let arraySeparator = json.split(',');

for(let i = 0; i < arraySeparator.length; i++){
    console.log(arraySeparator[i])
    card = `
    <div class=""> 
        <h1>${arraySeparator[i]}</h1>
    </div>
   `
   container.innerHTML += card;
}