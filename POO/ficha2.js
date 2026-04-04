

const formatDuration = (seconds) => {
  const minutes = Math.floor(seconds / 60);
  const secs = String(seconds % 60).padStart(2, "0");
  return `${minutes}:${secs}`;
};

const formatPlays = (plays) => {
  return plays >= 1000 ? `${(plays / 1000).toFixed(1)}k` : String(plays);
};

const getTrackInfo = (track) => {
  return `${track.title} ${track.artist} | ${formatDuration(track.duration)} | ${track.genre} | ${formatPlays(track.plays)} plays`;
};

// SoundBase catalogue
const catalogue = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    genre: "Pop",
    plays: 84000,
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    duration: 177,
    genre: "Hip-Hop",
    plays: 61200,
  },
  {
    title: "Peaches",
    artist: "Justin Bieber",
    duration: 198,
    genre: "Pop",
    plays: 43500,
  },
  {
    title: "Autumn Leaves",
    artist: "Ahmad Jamal",
    duration: 316,
    genre: "Jazz",
    plays: 8700,
  },
  {
    title: "Motion Picture",
    artist: "Jungle",
    duration: 234,
    genre: "Indie",
    plays: 15300,
  },
  {
    title: "Good Days",
    artist: "SZA",
    duration: 279,
    genre: "R&B",
    plays: 29800,
  },
  {
    title: "All Falls Down",
    artist: "Kanye West",
    duration: 214,
    genre: "Hip-Hop",
    plays: 37600,
  },
  {
    title: "Vienna",
    artist: "Billy Joel",
    duration: 211,
    genre: "Pop",
    plays: 22100,
  },
];

/* FILTRAR  */
const popTrack = catalogue.filter(catalogue => catalogue.genre === "Pop");

// TESTE //

/* console.log(popTrack); */

/* IMPRIMIR  */

popTrack.forEach(catalogue => {
  console.log(getTrackInfo(catalogue));
})

/* TAMANHOS */

const tamanhoAntigo = catalogue.length;
const tamanhoNovo = popTrack.length;

///////////////////////////////////////

/* FILTAR POR PLAYS  */

const popularTracks = catalogue.filter(catalogue => catalogue.plays > 10000);
const valor = popularTracks.length ;
console.log(`Popular tracks : ${valor}`);


/////////////////////////////////////////

function getByGenre (catalogue, genre) {
  return catalogue.filter(catalogue => catalogue.genre === genre)
}

// TESTES //

const poppTracks = getByGenre(catalogue,"Pop");
const hiphopTracks = getByGenre(catalogue,"Hip-Hop");


console.log("Pop:");
poppTracks.forEach(m => console.log(getTrackInfo(m)));

console.log("Hip-Hop:");
hiphopTracks.forEach(m => console.log(getTrackInfo(m)));

/////////////////////////////////////

/* CRIAR NOVO ARRAY POR TITLE */

const trackTitle = catalogue.map(catalogue => catalogue.title );
console.log(trackTitle );



const trackSummaries = catalogue.map(
  (track) =>
    `${track.title} - ${track.artist} (${formatDuration(track.duration)})`
)

trackSummaries.forEach((summary) => console.log(summary));

///////////////////////////////////////////////////////////////

const liteCatalogue = catalogue.map(track => ({
    title: track.title,
    artist: track.artist

}));
liteCatalogue.forEach(track => {
    console.log(track);
});

/////////////////////////////////////////

const jazz = catalogue.find(catalogue => catalogue.genre === "Jazz"); 

if (!jazz) {
  console.log("No Jazz tracks found");
} else {
  console.log(`${jazz.title}`);
}

///////////////////////////////////////////

function findByTitle (catalogue, title) {
  
  const titulo = catalogue.find(catalogue => catalogue.title === title);

  return titulo || null; 
}

// TESTES //

const teste1 = findByTitle (catalogue, "All Falls Down");
const teste2 = findByTitle (catalogue, "Vienna");

console.log(teste1);
console.log(teste2);

////////////////////////////////////////////

/* USO DO FINDINDEX */

const title = "Blinding Lights"

const localizar = catalogue.findIndex(catalogue => catalogue.title === title)

if (localizar !== -1) {
  catalogue[localizar].plays += 1000
  console.log(catalogue[localizar])
} else {
  console.log("Faixa não encontrada")
}


/////////////////////////////////////////

/* USO DO SORT : DO MAIS OUVIDO PARA O MENOS OUVIDO */

catalogue.sort((a,b)=> b.plays -a.plays);

/* IMPRIMIR */

catalogue.forEach(catalogue => {
  console.log(catalogue.title, catalogue.plays);
})

///////////////////////////////////////

/* ORDENAR POR ORDEM ALFABETICA */

catalogue.sort((a,b) => a.title.localeCompare(b.title));

/* IMPRIMIR APENAS TITULOS */

catalogue.forEach(catalogue => {
  console.log(catalogue.title);
})

/////////////////////////////////////

function sortByDuration (catalogue) {

  /* retoma um novo array  */

  return [...catalogue].sort((a,b) => a.duration - b.duration);
}

// TESTES //
const sortedByDuration = sortByDuration(catalogue)
console.log(sortedByDuration)


/////////////////////////////////////

// EXERCICIO INTEGRADOR //

function searchTracks(catalogue, query) {
  const queryLower = query.toLowerCase();

  return catalogue.filter(track =>
    track.title.toLowerCase().includes(queryLower) ||
    track.artist.toLowerCase().includes(queryLower)
  );
}

// TESTES //

const test1 = searchTracks(catalogue, "Good");

test1.forEach(catalogue => console.log(getTrackInfo(catalogue)));

const test2 = searchTracks(catalogue, "metallica");
test2.forEach(catalogue => console.log(getTrackInfo(catalogue)));

if (test2.length === 0) {
  console.log("Sem resultados.");
} else {
  test2.forEach(track => console.log(getTrackInfo(track)));
}


//////////////////////////////////////////

function getTopTracks (catalogue, genre, n) {

  return catalogue

  .filter(catalogue => catalogue.genre === genre )
  .sort((a, b) => b.plays - a.plays)
  .slice(0,n)

}

// TESTES //

const pop = getTopTracks (catalogue, "Pop", 3);

pop.forEach(catalogue => console.log(getTrackInfo(catalogue)));

// DESAFIO //

/* USO DO REDUCE  */

const soma = catalogue.reduce((total,catalogue) => {

  return total + catalogue.plays;

},0); 

/* IMPRIMIR */

console.log("Total plays:", soma);

//////////////////////////////////////////

/* USAR FILTER + SORT + MAP NUMA SÓ EXPRESSÃO  */

const result = catalogue
  .filter(track => track.genre === "Pop")
  .map(track => track.title)
  .sort();

console.log(result);





