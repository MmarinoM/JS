/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let age = null;
    let gender = null;
    let town = null;
    let confirmation = null;
    do{
        age = prompt("How old are you?");
        gender = prompt("Gender ?");
        town = prompt("where do you live?");
        alert("You're "+age+" years old "+"You come from "+town+" and you're a "+gender+".");
        confirmation = confirm("is it right?");
    }while (confirmation != true);

})();
