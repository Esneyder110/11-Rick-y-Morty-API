// https://rickandmortyapi.com/api/character

function getCharacters(done) {
  fetch(
    'https://rickandmortyapi.com/api/character/[1,2,3,4,5,6,7,8,9,10]'
  )
    .then((response) => response.json())
    .then((data) => {
      done(data);
    });
}

getCharacters((data) => {
  data.forEach((character) => {
    const card = document
      .createRange()
      .createContextualFragment(
        /*html*/
        `
        <div class="card">
          <img
            class="img"
            src="${character.image}"
            alt="" />
          <p class="name">${character.name}</p>
        </div>
      `
      );

    let container = document.querySelector('.container');
    container.append(card);
  });
});
