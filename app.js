function ageInDays(){
    var birthYear = prompt("Birth year?");
    var ageInDayss = (2020 - birthYear) * 365;
    var h1 = document.createElement("h1");
    var textAnswer = document.createTextNode("You are " + ageInDayss + " years old!");
    h1.setAttribute("id","ageInDays");
    h1.appendChild(textAnswer);
    document.getElementById("flex-box-result").appendChild(h1);
}

function reset(){
    document.getElementById("ageInDays").remove();
}   

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
