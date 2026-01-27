document.addEventListener("DOMContentLoaded", async () => {

    const URL = "resources/perfumes.json";

    const perfumeContainer = document.getElementById("perfume-container");

    const categoriaSelect = document.getElementById("categoria-select");
    const precioSelect = document.getElementById("precio-select");

    try {
        const response = await fetch(URL);
        const data = await response.json();
        allPerfumes = data.perfumes;
        filteredPerfumes = [...allPerfumes];

        renderPerfumes(filteredPerfumes);


    } catch (error) {
        console.error("Error fetching perfumes data:", error);
    }

    categoriaSelect.addEventListener("change", applyFilters);
    precioSelect.addEventListener("change", applyFilters);


    function applyFilters() {
        filteredPerfumes = [...allPerfumes];


        //Categoria
        const selectedCategoria = categoriaSelect.value;
        if (selectedCategoria !== "todas") {
            filteredPerfumes = filteredPerfumes.filter(perfume => perfume.categoria === selectedCategoria);
        }

        //Precio
        const selectedPrecio = precioSelect.value;
        if (selectedPrecio === "asc") {
            filteredPerfumes.sort((a, b) => a.precio - b.precio);
        } else if (selectedPrecio === "desc") {
            filteredPerfumes.sort((a, b) => b.precio - a.precio);
        }

        renderPerfumes(filteredPerfumes);

    }

    function renderPerfumes(perfumes) {
        perfumeContainer.innerHTML = "";
        perfumes.forEach(perfume => {
            const perfumeCard = document.createElement("div");
            perfumeCard.classList.add("perfume-card", "bg-white", "rounded-lg", "shadow-md", "overflow-hidden", "hover:shadow-xl", "transition-shadow", "duration-300");
            perfumeCard.innerHTML = `
                <img src="${perfume.imagen}" alt="${perfume.nombre}" class="w-full h-48 object-cover">
                <div class="p-4">
                    <h3 class="text-lg font-semibold mb-2">${perfume.nombre}</h3>
                    <p class="text-gray-600 mb-1">Marca: ${perfume.marca}</p>
                    <p class="text-gray-600 mb-1">Categoría: ${perfume.categoria}</p>
                    <p class="text-gray-800 font-bold">$${perfume.precio}</p>
                </div>
            `;
            perfumeContainer.appendChild(perfumeCard);
        });
    }

});