// =========================
// LOGIN MODAL
// =========================

function showLogin() {

    document.getElementById("login").style.display = "flex";

}


// =========================
// SIGNUP MODAL
// =========================

function showSignup() {

    document.getElementById("signup").style.display = "flex";

}



// =========================
// CLOSE MODAL OUTSIDE BOX
// =========================

window.onclick = function(event) {

    const login = document.getElementById("login");

    const signup = document.getElementById("signup");


    if (event.target === login) {

        login.style.display = "none";

    }


    if (event.target === signup) {

        signup.style.display = "none";

    }

};





// =========================
// LANGUAGE SELECT
// =========================

const language = document.getElementById("lang");


if(language){

    language.addEventListener("change", function(){

        alert(
            "Langue changée : " + this.value
        );

    });

}





// =========================
// SMOOTH SCROLL NAVIGATION
// =========================


document.querySelectorAll("nav a").forEach(link => {


    link.addEventListener("click", function(e){


        const target = this.getAttribute("href");


        if(target && target.startsWith("#") && target.length > 1){


            e.preventDefault();


            document.querySelector(target)
            ?.scrollIntoView({

                behavior:"smooth"

            });


        }


    });


});





// =========================
// IMAGE LOADING EFFECT
// =========================


document.querySelectorAll(".card img")
.forEach(img => {


    img.addEventListener("load", function(){


        this.style.opacity = "1";


    });


});





// =========================
// MOBILE HEADER FIX
// =========================


function checkMobile(){


    if(window.innerWidth <= 768){


        document.body.classList.add("mobile");


    }else{


        document.body.classList.remove("mobile");


    }


}



window.addEventListener("resize", checkMobile);


checkMobile();
