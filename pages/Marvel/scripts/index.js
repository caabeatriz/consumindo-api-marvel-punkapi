// const timeStamp = Date.now().toString();
const timeStamp = '1597969607472'
const publicKey = "6fcc27bc9e5a492e8ea6dedd827f3b30";
const privateKey = "485b770b8cc2ee457d48a6d5d5c86bddc9a335e8";
const md5 = "56d9112cd2f9a18287f86c8361d7d173";
const maxCharacters = 1500;
const offset = Math.floor((Math.random() * maxCharacters) + 1);

const obj = {
    name: 'Jean-Luc Picard',
    rank: 'Captain'
  };
  
  // Prints "name Jean-Luc Picard" followed by "rank Captain"
  Object.keys(obj).forEach(key => {
    console.log( obj.name[key]);
  });

// const url = 'http://gateway.marvel.com/v1/public/characters?ts='+timeStamp+'&apikey='+publicKey+'&hash='+md5;
// console.log(url)

// fetch(url).then((response) => {
//  return response.json();
// }).then((jsonParsed) => {
//   console.log(jsonParsed.data.results[1].name)
//   Object.keys(jsonParsed).forEach(function(i){
//       i = i + 1;
//       console.log(i)
//       console.log(jsonParsed.data.results[i])
//   })
// })

//Aqui eu faço o consumo da api 

// function constructUrl (){
//     //Construindo para a escolha do personagem randomicamente
//     const offset = Math.floor((Math.random() * maxCharacters) + 1);
//     const url = "http://gateway.marvel.com/v1/public/characters?offset="+offset+"&ts="+timeStamp+"&apikey="+apiKey+"&hash="+md5;


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

// quando escolher valor 1 do select entrar nesse:

// fetch(`http://gateway.marvel.com/v1/public/characters?name=hulk&ts=${timeStamp}&apikey=${apiKey}&hash=${md5}`
// ).then((response) => {
//     return response.json();
// }).then((jsonParsed) => {
//     // const nameHeroes = document.querySelector('#nameCharacter')
//     // nameHeroes.textContent = jsonParsed.data.results[1].name;
//     // console.log("tes", nameHeroes)
    
//    console.log(jsonParsed)
//     console.log(jsonParsed)
    
// })
// var request = new XMLHttpRequest()

// request.open('GET', 'http://gateway.marvel.com/v1/public/characters?offset='+offset+'&ts='+timeStamp+'&apikey='+apiKey+'&hash='+md5, true)
// request.onload = function () {
//   var data = JSON.parse(this.response)
//   if (request.status >= 200 && request.status < 400) {
//     Object.keys(data).forEach((heroes) => {  
//         console.log(data[heroes].results)
//       })
//   } else {
//     console.log('error')
//   }
// }

// request.send()


// url certa http://gateway.marvel.com/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}
// http://gateway.marvel.com:443/v1/public/characters?ts=${timeStamp}&apikey=${apiKey}&hash=${md5}
// http://gateway.marvel.com/v1/public/characters?ts=1597935375&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=528e23e834069c0e1f2b0766cf076d92


//gateway.marvel.com/v1/public/characters?ts=1597937542&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=a8f6f0126ea19b546eb74d234ddb0168
//gateway.marvel.com/v1/public/characters?ts=1597969353&apikey=6fcc27bc9e5a492e8ea6dedd827f3b30&hash=d2352a76a5aa71c8cfa96e8201e57ce3