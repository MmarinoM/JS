/* becode/javascript
 *
 * /06-dom/08-generate-table-two/script.js - 6.8: génération d'un tableau (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    
    function table(num){
        let tableNum = new Array();
        for (let index = 1; index < 11; index++) {
            tableNum[index-1] = num * (index);
            return tableNum;
        }

    }
    let tab =document.createElement("table");
    // let row = document.createElement("tr");
    // let col = document.createElement("th");
    let p = document.createElement("p");

    document.getElementById("target").appendChild(tab);
    for (let index = 0; index < 10; index++) {

        let row = tab.insertRow(index);
        for (let i = 0; i < 10; i++) {
            let multi = table(i+1);
            console.log(multi);
            let cell = row.insertCell(i);
            cell.innerHTML = (i+1)*(index+1);
        }
        

        
    }

})();
