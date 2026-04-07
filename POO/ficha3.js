

const elemento1 = document.getElementById("app-title");

elemento1.textContent = "SoundBase";

const elemento2 = document.querySelector("#app-title");

// TESTES //

console.log(elemento1);
console.log(elemento2);
console.log(elemento1 === elemento2);

///////////////////////////////////////////////

const elemento3 = document.getElementById("track-count");
elemento3.textContent = "6 faixas disponíveis";

////////////////////////////////////////////////

const elemento4 = document.querySelector("#search-input");
elemento4.setAttribute("placeholder", "Pesquisar por titulo ou artista");

console.log(elemento4.getAttribute("placeholder"));


////////////////////////////////////////////////

// RENDERIZAR CONTÉUDO COM INNERHTML //

function renderTrack(track) {
  return `
    <div class="track-card" data-title="${track.title}">
      <h3>${track.title}</h3>
      <p>${getTrackInfo(track)} · ${formatDuration(track.duration)}</p>
      <p class="plays">${track.plays} plays</p>
      <button class="btn-like">♡ Like</button>
      <button class="btn-remove">Remover</button>
    </div>
  `;
}

////////////////////////////////////////////////

function renderCatalogue(tracks) {
  const html = tracks.map(renderTrack).join("");

  document.getElementById("track-list").innerHTML = html;

  document.getElementById("track-count").textContent =
    `${tracks.length} faixas disponíveis`;
}

renderCatalogue(catalogue);

//////////////////////////////////////////////////

// EVENTOS //

const elemento5 = document.getElementById("search-input");

elemento5.ddEventListener("input", (event) => {
    console.log(event.target.value);
})


////////////////////////////////////////////////

const trackList = document.getElementById("track-list");

trackList.addEventListener("click", function (event) {
  if (event.target.classList.contains("btn-like")) {
    console.log("Like clicado");
  }

  if (event.target.classList.contains("btn-remove")) {
    console.log("Remove clicado");
  }
});








