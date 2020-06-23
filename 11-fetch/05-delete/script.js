/* becode/javascript
 *
 * /09-fetch/05-delete/script.js - 11.5: supprimer un élément
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    
    async function deleteXmen(){
        
        let api = await fetch("http://localhost:3000/heroes");
        let xList = await api.json();
        let idUserDelete = document.getElementById("hero-id").value;
        
        if(idUserDelete < xList.length){
            xList.splice(idUserDelete-1, 1);
        } 
        else{
            console.error("ID trop grand");
        }

        console.table(xList);
        
    }

    document.getElementById("run").addEventListener("click", ()=>{
        deleteXmen();
    });
})();