/* becode/javascript
 *
 * /06-dom/04-attr-create/script.js - 6.4: manipulation d'attributs & création d'élément
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

   let test =  document.getElementById("source").dataset.image;
//    console.log(test);
   let img =document.createElement("img");
   img.src = test;

   document.getElementById("target").appendChild(img);

})();
