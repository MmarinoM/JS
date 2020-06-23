/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // let a = Number(document.getElementById("op-one").value);
    // let b = Number(document.getElementById("op-two").value);
    



    document.getElementById("addition").addEventListener("click", function() {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let add = a + b;

        alert("the answer is "+add);
        
    });

    document.getElementById("substraction").addEventListener("click", function() {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let sub = a - b;

        alert("the answer is "+sub);
    });

    document.getElementById("multiplication").addEventListener("click", function() {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let multi = a*b;

        alert("the answer is "+multi);
    });

    document.getElementById("division").addEventListener("click", function() {
        let a = Number(document.getElementById("op-one").value);
        let b = Number(document.getElementById("op-two").value);
        let divi = a / b;

        alert("the answer is "+divi);
    });
})();
