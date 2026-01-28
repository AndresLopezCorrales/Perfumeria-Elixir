document.addEventListener("DOMContentLoaded", () => {

    const userData = JSON.parse(localStorage.getItem("currentUser"));

    const iconFavs = document.querySelector(".logo-favoritos")?.parentElement;

    if (userData && iconFavs) {
        iconFavs.classList.remove("hidden");
    } else {
        return;
    }

    const loginLink = document.querySelector(".logo-login")?.parentElement;

    if (userData && loginLink) {
        loginLink.innerHTML = `
        <img src="./img/ic_logout.png" class="mx-auto mb-2 w-20 h-20 cursor-pointer" id="logoutIcon" title="Cerrar sesión">
            <span class="text-lg" id="user-span">${userData.username}</span>
        `;
    }

    document.getElementById("logoutIcon").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        location.reload();
    })

    document.getElementById("user-span").addEventListener("click", () => {
        localStorage.removeItem("currentUser");
        location.reload();
    })

});