/* becode/javascript
 *
 * /10-asynchronous/08-async-get-comments/script.js - 10.8: chargement d'articles et de commentaires (async/await)
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    (() => {
        async function test(){
            
            try{
                window.lib.getPosts();
            }
            
            catch(error){
                console.error(error);
            }
    
            let finalTable = await window.lib.getPosts();
            
            for (let article of finalTable){
                article.comment = await window.lib.getComments(article.id);
            }
            console.log(finalTable);
        }
        document.getElementById("run").addEventListener("click",function(){
            test();
        })
    })();
})();
