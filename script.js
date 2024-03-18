/* Set Up Constants */
const searchInput = document.getElementById("search-input");
const searchForm = document.getElementById("search-form");
const spriteContainer = document.getElementById("sprite-container");
const pokemonID = document.getElementById("pokemon-id");
const pokemonName = document.getElementById("pokemon-name");
const types = document.getElementById("types");
const weight = document.getElementById("weight");
const height = document.getElementById("height");
const hp = document.getElementById("hp");
const attack = document.getElementById("attack");
const defense = document.getElementById("defense");
const specialAttack = document.getElementById("special-attack");
const specialDefense = document.getElementById("special-defense");
const speed = document.getElementById("speed");

/* Functions */
const getPokemon = async () => {
  try {
    const pokemonNameOrId = searchInput.value.toLowerCase();
    const response = await fetch(`https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/${pokemonNameOrId}`);
    const data = await response.json();

    // Set the Information
    pokemonName.textContent = `${data.name.toUpperCase()}`;
    pokemonID.textContent = `${data.id}`;
    weight.textContent = `Weight: ${data.weight}`;
    height.textContent = `Height: ${data.height}`;
    spriteContainer.innerHTML = `<img id="sprite" src="${data.sprites.front_default}" alt="${data.name} front default sprite">`;

    // Set the stats
    hp.textContent = data.stats[0].base_stat;
    attack.textContent = data.stats[1].base_stat;
    defense.textContent = data.stats[2].base_stat;
    specialAttack.textContent = data.stats[3].base_stat;

    specialDefense.textContent = data.stats[4].base_stat;
    speed.textContent = data.stats[5].base_stat;

    // Set the types
    types.innerHTML = data.types.map((obj) => `<span class="type ${obj.type.name}">${obj.type.name}</span>`).join('');

  } catch(err) {
    resetDisplay();
    alert("Pokémon not found");
  }
};

const resetDisplay = () => {
  const sprite = document.getElementById("sprite");
  if (sprite) sprite.remove();

  // Reset Stats
  pokemonName.textContent = '';
  pokemonID.textContent = '';
  types.innerHTML = '';
  height.textContent = '';
  weight.textContent = '';
  hp.textContent = '';
  attack.textContent = '';
  defense.textContent = '';
  specialAttack.textContent = '';
  specialDefense.textContent = '';
  speed.textContent = '';
};

/* Event Listeners */
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  getPokemon();
});
