let email = document.querySelector("#email");
let text = document.querySelector("#text");
let password = document.querySelector("#password");
let select_value = document.querySelector("#select_value")

email.addEventListener("input", (el) => {
    localStorage.setItem("email", email.value);
})
text.addEventListener("input", (el) => {
    localStorage.setItem("text", text.value);
})
password.addEventListener("input", (el) => {
    localStorage.setItem("password", password.value);
})
select_value.addEventListener("input", (el) => {
    localStorage.setItem("select_value", select_value.value);
})

email.value = sessionStorage.getItem("email");
text.value = sessionStorage.getItem("text");
password.value = sessionStorage.getItem("password");
select_value = sessionStorage.getItem("select_value")
