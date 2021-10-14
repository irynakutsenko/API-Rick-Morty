fetch("https://rickandmortyapi.com/api/character/")
    .then(function(response) {
        console.log(response)
        return response.json();
    })
    .then(function(res) {
        console.log(res);
        console.log(res.results[1].image);
        for (let i = 0; i < res.results.length; i++) {
            document.querySelector("body").innerHTML += `
            <p>${res.results[i].name}</p>
            <img class = "imagenPrincipal" src = "${res.results[i].image}" >`
        }
    });