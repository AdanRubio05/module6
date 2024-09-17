const foods = [
    "Enchiladas",
    "Tacos",
    "Gorditas", 
    "Flautas"
] ;

foods.push(" & Chimichangas") ;

document.getElementById("cuisine").innerHTML = "Having spent a majority of my life in New Mexico, I am familiar with great food such as " +
foods.join(", ") + " etc." ;