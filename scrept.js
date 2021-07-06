
fetch("https://www.breakingbadapi.com/api/characters/3")
    .then(function(response){
        return response.json();
    })
    .then(function(data){
        console.log(data[0].name)

        document.querySelector("#mouda h1").innerHTML = "<h1>" + data[0].name + "</h1>"
        document.querySelector("#mouda h5").innerHTML = data[0].birthday
        document.querySelector("#mouda img").src = data[0].img
    })

