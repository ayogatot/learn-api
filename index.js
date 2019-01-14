console.log("Learn API");

const listStarWars = document.getElementById("nameStarWars");
const listPokemon = document.getElementById("namePokemon");
const cardPokemons = document.getElementById("cardPokemon")

const getStarAsync = async () => {
  const response = await fetch("https://swapi.co/api/people");
  const data = await response.json();
  const result = data.results;

  result.forEach(name => console.log(name.name));

  const printName = result.forEach(character => {
    listStarWars.innerHTML += `<li>${character.name}</li>`;
  });
};

const getPokemonAsync = async () => {
  const response = await fetch("https://api.pokemontcg.io/v1/cards");
  const data = await response.json();
  const result = data.cards.slice(0, 10);
  const resultCard = data.cards

  result.forEach(name => console.log(name.name));

  result.forEach(character => {
      listPokemon.innerHTML += `<li>${character.name}</li><img src="${character.imageUrl}"/>`;
  });

};

getStarAsync();
getPokemonAsync();
