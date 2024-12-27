
const games = [
    { name: "Arkham Horror", players: "1-4", category: "Cooperativo", image: "arkham_horror.jpg", link: "games/arkham_horror.html" },
    { name: "Terraforming Mars", players: "1-5", category: "Estratégia", image: "terraforming_mars.jpg", link: "games/terraforming_mars.html" },
    { name: "Wingspan", players: "1-5", category: "Construção", image: "wingspan.jpg", link: "games/wingspan.html" },
    { name: "Love Letter", players: "2-4", category: "Cartas", image: "love_letter.jpg", link: "games/love_letter.html" }
];

function displayGames(gamesList) {
    const gamesContainer = document.getElementById('games-list');
    gamesContainer.innerHTML = "";
    gamesList.forEach(game => {
        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
            <a href="${game.link}">
                <img src="images/${game.image}" alt="${game.name}">
            </a>
            <h3>${game.name}</h3>
            <p>Jogadores: ${game.players}</p>
            <p>Categoria: ${game.category}</p>
        `;
        gamesContainer.appendChild(card);
    });
}

function sortGames() {
    const sortBy = document.getElementById('sort').value;
    let sortedGames = [...games];
    if (sortBy === "name") {
        sortedGames.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === "players") {
        sortedGames.sort((a, b) => a.players.localeCompare(b.players));
    } else if (sortBy === "category") {
        sortedGames.sort((a, b) => a.category.localeCompare(b.category));
    }
    displayGames(sortedGames);
}

window.onload = () => {
    displayGames(games);
};
