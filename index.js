console.log("Learn API");

const listDocumentName = document.getElementById("name");

const getDataAsync = async () => {
  const response = await fetch("https://swapi.co/api/people");
  const data = await response.json();
  const result = data.results;

  result.forEach( name => console.log(name.name))

  const printName = result.forEach(character => {
      listDocumentName.innerHTML += `<li>${character.name}</li>`;
  });
};

getDataAsync();
