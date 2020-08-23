fetch('https://api.punkapi.com/v2/beers?food=tacos')
    .then (response => response.json())
    .then( data =>
        console.log(data)
    )
    .catach()