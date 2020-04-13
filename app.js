function generateCat(){

fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then(data => {
        var image = document.createElement("img");
        image.setAttribute("id","bullshit")
        var div = document.getElementById("flex-cat-gen");
        image.src = data["url"];
        div.appendChild(image);
    })
    .catch(error => {
        return error;
    });



}

function removeCats(){
    document.getElementById("bullshit").remove();
}
