const timeStamp = "1597937542";
const apiKey = "6fcc27bc9e5a492e8ea6dedd827f3b30";
const md5 = "a8f6f0126ea19b546eb74d234ddb0168";
const maxCharacters = 1500;

const offset = Math.floor((Math.random() * maxCharacters) + 1);


//Aqui eu faço o consumo da api 

// function constructUrl (){
//     //Construindo para a escolha do personagem randomicamente
//     const offset = Math.floor((Math.random() * maxCharacters) + 1);
//     const url = "http://gateway.marvel.com/v1/public/characters?offset="+offset+"&ts="+timeStamp+"&apikey="+apiKey+"&hash="+md5;

// }
// fetch(`http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
// ).then((response) => {
//     return response.json();
// }).then((jsonParsed) => {
//     // const nameHeroes = document.querySelector('#nameCharacter')
//     // nameHeroes.textContent = jsonParsed.data.results[1].name;
//     // console.log("tes", nameHeroes)
    
//     jsonParsed.data.results.forEach(element => {
//         const nameHero = element.name;
//         console.log("nome", nameHero)
//         console.log(element)
//     })
//     console.log(jsonParsed)
    
// })

var request = new XMLHttpRequest()

request.open('GET', 'http://gateway.marvel.com/v1/public/characters?offset='+offset+'&ts='+timeStamp+'&apikey='+apiKey+'&hash='+md5, true)
request.onload = function () {
    console.log("testeando")
  // Begin accessing JSON data here
  var data = JSON.parse(this.response)

  if (request.status >= 200 && request.status < 400) {
    console.log(data.data.results[1].name)
  } else {
    console.log('error')
  }
}

request.send()

// url certa http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}
// http://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}
// http://gateway.marvel.com/v1/public/characters?ts=1597935375&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=528e23e834069c0e1f2b0766cf076d92
