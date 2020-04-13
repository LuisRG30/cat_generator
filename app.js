function generateCat(){

fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response)
    .then(data => {
        if(typeof data == "object")
            console.log("Wuju!")
        var image = document.createElement("img");
        image.setAttribute("id","bullshit")
        var div = document.getElementById("flex-cat-gen");
        var url = data["url"];
        console.log(url)
        image.src = url;
        div.appendChild(image);
    })
    .catch(error => {
        return error;
    });



}

function removeCats(){
    document.getElementById("bullshit").remove();
}
