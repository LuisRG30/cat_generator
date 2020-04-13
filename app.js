function generateCat(){

    fetch("https://api.thecatapi.com/v1/images/search")
        .then(function(resp){
            return resp.json()
        })
        .then(function(data){
            var image = document.createElement("img");
            image.setAttribute("id","bullshit")
            var div = document.getElementById("flex-cat-gen");
            image.src = data["0"]["url"];
            div.appendChild(image);
        })
}

function removeCats(){
    document.getElementById("bullshit").remove();
}
