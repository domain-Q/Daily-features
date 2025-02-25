let eye = document.getElementById("toggle-password");

function handleEye() {
    console.log("eye clicked");
    let password = document.querySelector(".password");
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    if (type === "text") {
        eye.innerHTML = '<i class="fa-solid fa-eye-slash"></i>';
    } else {
        eye.innerHTML = '<i class="fa-solid fa-eye"></i>';
    }
}

eye.addEventListener("click", handleEye);