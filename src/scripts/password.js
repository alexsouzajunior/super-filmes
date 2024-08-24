let togglePassword = document.querySelector("#togglePassword");
let password = document.querySelector("#password");

togglePassword.addEventListener("click", function(){
    let type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);

    this.classList.toggle("fa-eye");
});