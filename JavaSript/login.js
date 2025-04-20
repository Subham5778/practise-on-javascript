document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    const user = document.getElementById("username").value;
    const pass = document.getElementById("password").value;

    if(user && pass){
        document.getElementById("formResult").textContent = `welcome,${user}!`;
    }else{
        document.getElementById("formResult").textContent = "please enter both username and password.";
    }
});