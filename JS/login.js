var signUp = document.getElementById("sign-up");
var signIn = document.getElementById("sign-in");
var loginIn = document.getElementById("login-in");
var loginUp = document.getElementById("login-up");

signUp.onclick = function() {
    loginIn.style.display = 'none';
    loginUp.style.display = 'block';
}

signIn.addEventListener('click', () => {
    loginIn.style.display = 'block';
    loginUp.style.display = 'none';
})