console.log("Go Chuck !");

let beauChuck = document.querySelector('main> section > aside > div');

beauChuck.addEventListener('mousemove', function() {
    beauChuck.style.borderRadius = "0%";

});

beauChuck.addEventListener('mouseleave', function() {
    beauChuck.style.borderRadius = "50%";
});

/*exo 2 */

let img = [document.querySelector("img")];

(function (){
    document.addEventListener('DOMContentLoaded', function () {

       

        img.addEventListener('click', event=>{
            alert("OK");
            event.target.classList.add("picto");
            event.target.nextElementSibling.classList.replace("picto", "picto-visible");
        });
    })

})()