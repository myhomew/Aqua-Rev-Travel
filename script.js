function showLogin(){
    document.getElementById("login").style.display = "flex";
}


function showSignup(){
    document.getElementById("signup").style.display = "flex";
}


// Close modal when clicking outside
window.onclick = function(event){

    const login = document.getElementById("login");
    const signup = document.getElementById("signup");

    if(event.target === login){
        login.style.display = "none";
    }

    if(event.target === signup){
        signup.style.display = "none";
    }

}


// Language selector

const lang = document.getElementById("lang");

if(lang){

    lang.addEventListener("change", function(){

        alert(
            "Langue changée : " + this.value
        );

    });

}


// Mobile menu smooth behavior

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function(){

        document.querySelectorAll("nav a")
        .forEach(item => item.classList.remove("active"));

        this.classList.add("active");

    });

});
