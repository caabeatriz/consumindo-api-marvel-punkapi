fetch('https://api.punkapi.com/v2/beers')
    .then (response => response.json())
    .then(console.log(data))
    .catach()