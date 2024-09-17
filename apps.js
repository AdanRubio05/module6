const foods = [
    "Enchiladas",
    "Tacos",
    "Gorditas", 
    "Flautas"
] ;

foods.push(" & Chimichangas") ;

document.getElementById("cuisine").innerHTML = "Having spent a majority of my life in New Mexico, I am familiar with great food such as " +
foods.join(", ") + " etc." ;

document.getElementById("rant").innerHTML =
"When moving to central Texas, I was grateful to have knowledge on how to cook these said dishes as I am not a fan of Tex-Mex. Shocker, huh?"

const trek = {
   city: "Hatch Valley",
   state: "New Mexico",
   plant: "Green Chili Peppers",
}

document.getElementById("fowl").innerHTML = "However, there is compromise as traditional Mexican & Tex-Mex cuisine are great with " + 
trek.plant + " from " + trek.city + ", " + trek.state ;