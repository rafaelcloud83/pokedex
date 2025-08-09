async function loadPokemon() {
    const params = new URLSearchParams(window.location.search)
    const id = params.get("id")

    if (!id) {
        document.getElementById("pokemonCard").innerHTML = "<p>Nenhum Pokémon especificado.</p>";
        return
    }

    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        if (!response.ok) throw new Error("Pokémon não encontrado")

        const data = await response.json()
        //console.log(data);

        const typesHTML = data.types.map(t =>
            `<li class="type ${t.type.name}">${t.type.name}</li>`
        ).join("")

        document.getElementById("pokemonCard").innerHTML = `
                    <span class="pokemon-number">#${data.id}</span>
                    <h1 class="pokemon-name">${data.name}</h1>
                    <ul class="types">${typesHTML}</ul>
                    <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
                    <p>Experiência: ${data.base_experience} xp</p>
                    <p>Altura: ${data.height / 10} m</p>
                    <p>Peso: ${data.weight / 10} kg</p>
                `
    } catch (error) {
        document.getElementById("pokemonCard").innerHTML = `<p>Erro: ${error.message}</p>`
    }
}

loadPokemon()