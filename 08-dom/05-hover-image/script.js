/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let test =  document.querySelector('img').dataset.hover;
    let imgSrc = document.querySelector('img').src;
    console.log(imgSrc);
    console.log(test);

    document.querySelector('img').addEventListener("mouseover", function(){
        document.querySelector('img').src = test;
    });
     document.querySelector('img').addEventListener("mouseout", function(){
         document.querySelector('img').src = imgSrc;
     });

})();
