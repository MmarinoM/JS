/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    document.getElementById("run").addEventListener("click", function(){

        let dayUser = document.getElementById("dob-day").value;
        let monthUser = Number( document.getElementById("dob-month").value);
        let monthUserGOOD = monthUser - 1 ;
        let yearUser = document.getElementById("dob-year").value;


        let totalDateUser = new Date(yearUser,monthUserGOOD,dayUser);
        let now = new Date();


        let totalDateUserMilli = totalDateUser.getTime();
        let nowMilli = now.getTime();



        let ageCalcul = nowMilli - totalDateUserMilli; 



        let ageFinal = Math.floor(ageCalcul/31536000000);


        console.log(monthUser);
        console.log(monthUserGOOD);
        console.log(totalDateUser);
        console.log(totalDateUserMilli);
        console.log(nowMilli);
        console.log(ageFinal);

        alert("Vous avez "+ageFinal+" ans");
       
    });
    

})();
