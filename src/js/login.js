import { USERS } from "./auth_users.js";

document.addEventListener("DOMContentLoaded", () => {

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));

    if (currentUser) {
        window.location.href = "../index.html";
    }

    const form = document.querySelector("form");

    form.addEventListener("submit", (e) => {

        e.preventDefault();

        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value.trim();

        const user = USERS.find(u => u.username === username && u.password === password);

        if (!user) {
            alert("Usuario o contraseña incorrecta")
            return;
        }

        localStorage.setItem("currentUser", JSON.stringify({ username: user.username }));

        const favKey = `favorites_${user.username}`;

        if (!localStorage.getItem(favKey)) {
            localStorage.setItem(favKey, JSON.stringify([]));
        }

        alert(`Ingresando como ${user.username}`)

        window.location.href = "../index.html";

    });


});