function showLogin(){
document.getElementById("login").style.display="flex";
}

function showSignup(){
document.getElementById("signup").style.display="flex";
}

// Close modal
window.onclick = function(e){
if(e.target.classList.contains("modal")){
e.target.style.display="none";
}
}

// Simple language change
document.getElementById("lang").addEventListener("change",function(){
alert("Langue changée: " + this.value);
});
