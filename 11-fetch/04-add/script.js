/* becode/javascript
 *
 * /09-fetch/04-add/script.js - 11.4: ajouter un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function displayxmen(){
        
        let api = await fetch("http://localhost:3000/heroes");
        let xList = await api.json();
        let newPower = document.getElementById("hero-powers").value;
        //objet mutant 
        let newMutants = {
            id : xList.length + 1,
            name : document.getElementById("hero-name").value,
            alterEgo : document.getElementById("hero-alter-ego").value,
            abilities : newPower.split(",")
        }
        //ajout dans l'api et affiche le tableau à jour
        xList.push(newMutants);
        console.table(xList);
        
    }

    document.getElementById("run").addEventListener("click", ()=>{
        
        displayxmen();

    });
})();
