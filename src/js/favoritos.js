export function renderFavoritos() {

    const favoritosContainer = document.getElementById("favoritos-container");

    if (!favoritosContainer) return;

    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    const favoritosSection = document.getElementById("favoritos");

    if (currentUser && favoritosSection) {
        favoritosSection.classList.remove("hidden");
    } else {
        return;
    }

    const favoritesKey = `favorites_${currentUser.username}`;
    const favorites = JSON.parse(localStorage.getItem(favoritesKey)) || [];

    if (favorites.length === 0) {
        favoritosContainer.innerHTML = `
            <p class="col-span-full text-center text-xl mb-8">
                Aún no tienes perfumes favoritos. Selecciona tus favoritos.
            </p>
        `;
        return;
    }

    favoritosContainer.innerHTML = "";

    favorites.forEach(perfume => {
        const card = document.createElement("div");
        card.classList.add("perfume-card", "bg-white", "ml-4", "mb-4", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-xl", "transition-shadow", "duration-300");

        card.innerHTML = `
            <img src="${perfume.imagen}" alt="${perfume.nombre}" class="w-full h-48 object-cover">
            <div class="p-4">
                <h3 class="text-lg font-semibold mb-2">${perfume.nombre}</h3>
                <p class="text-gray-600 mb-1">Marca: ${perfume.marca}</p>
                <p class="text-gray-600 mb-1">Categoría: ${perfume.categoria}</p>
                <p class="text-gray-800 font-bold">$${perfume.precio}</p>
            </div>
        `;

        favoritosContainer.appendChild(card);
    });
}