function generateCat(){
    var url = "cat_images/cat";
    var nCat = Math.round((Math.random()*100000)%25);
    nCat.toString();
    url = url + nCat + ".jpg";
    var image = document.createElement("img");
    image.setAttribute("id","bullshit")
    var div = document.getElementById("flex-cat-gen");
    image.src = url;
    div.appendChild(image);
}

function removeCats(){
    document.getElementById("bullshit").remove  ();
}
