const searchInput = document.querySelector('.search-input');
const searchBtn = document.querySelector('#search-btn');
const pokemonName = document.querySelector('#pokemon-name');
const pokemonImg = document.querySelector('#pokemon-img');
const contentShinyImg = document.querySelector('#pokemon-shiny-img');
const pokemonGif = document.querySelector('#pokemon-gif');
const pokemonBackGif = document.querySelector('#pokemon-back-gif');

function getData(pokeName, pokeId) {
    let url = `https://pokeapi.co/api/v2/pokemon/${pokeName || pokeId}`;

    fetch(url)
        .then(response => response.json())
        .then(pokeData => render(pokeData))
        .catch(() => alert('沒東西 請輸入1~1025這個範圍'));
}

function render(pokeData) {
    let contentImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokeData.id}.png`;

    let shinyImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/shiny/${pokeData.id}.png`;

    let gifImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${pokeData.id}.gif`;

    let gifBackImg = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/back/${pokeData.id}.gif`;

    pokemonImg.src = contentImg;
    contentShinyImg.src = shinyImg;
    pokemonGif.src = gifImg;
    pokemonBackGif.src = gifBackImg;
    pokemonName.textContent = `#${pokeData.id} ${pokeData.name}`;
}

searchBtn.addEventListener('click', function () {
    if (searchInput.value === '') {
        alert('請輸入寶可夢編號或英文名稱');
    } else {
        getData(searchInput.value);
    }
});