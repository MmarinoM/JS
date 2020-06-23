/* becode/javascript
 *
 * /05-arrays/14-bird-names-generator/script.js - 5.14: générateur de noms d'oiseau
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    const birds = [
        {name: "mouette", fem: true},
        {name: "corbeau"},
        {name: "mésange", fem: true},
        {name: "hibou"},
        {name: "buse", fem: true},
        {name: "pigeon"},
        {name: "pie", fem: true},
        {name: "vautour"},
        {name: "faucon"},
        {name: "rouge-gorge"},
        {name: "tourterelle", fem: true},
        {name: "corneille", fem: true},
    ];
    const adjectives = new Set([
        "cendré",
        "huppé",
        "chantant",
        "hurlant",
        "perché",
        "grand",
        "petit",
        "bleu",
        "pantelant",
        "tangent",
        "arboré",
    ]);

    document.getElementById("run").addEventListener("click", function(){
        let numRandomBirds = Math.floor(Math.random() * birds.length);
        let numRandomAdj = Math.floor(Math.random() * adjectives.size);
        // .map

        //getsetvaluebyindex( set + mavariable) !!!!!!
        
        const adjectivesArray = Array.from(adjectives);
        // console.log(numRandomAdj);
        // console.log(adjectivesArray);
        
        if (birds[numRandomBirds].fem == true){
            // console.log("La "+birds[numRandomBirds].name +" "+ adjectivesArray[numRandomAdj]+"e")
            document.getElementById("target").innerHTML = "La "+birds[numRandomBirds].name +" "+ adjectivesArray[numRandomAdj]+"e";
        }else{
            // console.log("Le "+birds[numRandomBirds].name +" "+ adjectivesArray[numRandomAdj]);
            document.getElementById("target").innerHTML = "Le "+birds[numRandomBirds].name +" "+ adjectivesArray[numRandomAdj];
        }
    });
})();
