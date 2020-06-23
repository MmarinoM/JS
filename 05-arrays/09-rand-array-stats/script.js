/* becode/javascript
 *
 * /05-arrays/09-rand-array-stats/script.js - 5.9: tableau aléatoire & statistiques
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    document.getElementById("run").addEventListener("click", function(){
        let tabNum = new Array();
        let add = 0;
        
        for (let index = 0; index < 10; index++) {
            
            tabNum[index] = Math.floor(Math.random() * 101);
            add = add + tabNum[index];
            document.getElementById("n-"+(index+1)).innerHTML = tabNum[index];
        }
        
        let min = Math.min.apply( Math, tabNum );
        let max = Math.max.apply( Math, tabNum );
        let average = add / tabNum.length;
        
        console.log(average);
        console.log(add);
        console.log(tabNum);
        console.log(min);
        console.log(max);

        document.getElementById("min").innerHTML = min;
        document.getElementById("max").innerHTML = max;
        document.getElementById("sum").innerHTML = add;
        document.getElementById("average").innerHTML = average;

    });

})();
