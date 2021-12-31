const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userName = document.querySelector("#user-name");

const HIDDEN_CLASSNAME ="hidden";
const USERNAME_KEY = "user-name"
const LOCAL_USERNAME = localStorage.getItem(USERNAME_KEY);

function updateUserName(name){
    userName.classList.remove(HIDDEN_CLASSNAME);
    userName.innerText = `hello ${name}!`;
}

function onLoginSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY,username);
    updateUserName(username);
}


if (LOCAL_USERNAME === null){
    loginForm.classList.remove("hidden");
    loginForm.addEventListener("submit", onLoginSubmit);
}
else{ 
    updateUserName(LOCAL_USERNAME);
}