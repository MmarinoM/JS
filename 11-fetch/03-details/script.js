/* becode/javascript
 *
 * /09-fetch/03-details/script.js - 11.3: details
 *
 * coded by leny@BeCode
 * started at 12/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    async function displayxmen(){
        let api = await fetch("http://localhost:3000/heroes");
        let xList = await Response.json();
        let userId = document.getElementById("hero-id").value;
        let xmen = xList[userId];


    }
})();
