/* becode/javascript
 *
 * /10-asynchronous/02-get-comments/script.js - 10.2: chargement d'articles et de commentaires
 *
 * coded by leny@BeCode
 * started at 09/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    function callback(error, table){
        if(error == null){
            
        }else{
            console.error(error);
        }
    }


    function callback2(error,articleCommentArray){
        if(error == null){
            articleCommentArray.forEach(element => {
                articleCommentArray[element] = window.lib.getComments(element.id,callback);
             });
        }else{
            console.log(error);
            
        }
        console.table(articleCommentArray);
        
    }


    document.getElementById("run").addEventListener("click",function(){
        window.lib.getPosts(callback2);
        
    })
})();
