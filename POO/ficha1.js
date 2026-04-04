
/* CONVERSÃO PARA ARROW FUNCTIONS   */
const formatDuration = (seconds) =>{
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m + ":" + (s < 10 ? "0" + s : s);
};

const greetArtist = (name, genre) => {
    console.log("Welcome to SoundBase, " + name + "! Your genre is " + genre + ".");
};

const isLongTrack = (duration) => duration > 240; 

const formatPlays = (plays) => 
    plays >= 1000 ? (plays / 1000).toFixed(1) + "k" : plays.toString()


// TESTES //

console.log(formatDuration (215));
console.log(isLongTrack(215));
greetArtist("Billie Eilish","Pop")
console.log(formatPlays(12500));

const describeTrack = (title,artist,genre ="Unknown") => {

    return `${title} by ${artist} [${genre}]`
}

// TESTES //

console.log(describeTrack("Blinding Lights","The Weeknd","Pop"));
console.log(describeTrack("Blinding Lights","The Weeknd"));



const logTracks = (...titles) => {
    titles.forEach((title,index) => {
        console.log(`${index +1}.${title}`);
    });

};

// TESTES //

logTracks("Blinding Lights","Levitating","Stay");

// OBJETO NOVO //

const track = {
  
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    genre: "Pop",
    plays: 8400,
    liked: false,

    play () {
        this.plays++
        console.log(`Now playing : ${this.title} by ${this.artist} (plays : ${this.plays})`);
    },

    like () {
        this.like = !this.like
        if (this.like) {
            console.log(`${this.title} liked`);
        } else{
            console.log(`${this.title} unliked`);
        }
    },

    getInfo () {

        return `${this.title} - ${this.artist} | ${formatDuration(this.duration)} | ${this.genre} | ${formatPlays(this.plays)}`

    },

  }


// TESTES //

track.play();
track.play();
track.like();
console.log(track.getInfo());


// MOVA PROPRIEDADE DO OBJETO  //

track.album = {
  title: "After Hours",
  year: 2020,
  totalTracks: 14,

  getAlbumInfo() {
    console.log(`${track.title} is from the album ${this.title} (${this.year} - ${this.totalTracks} tracks)`);
  }
};

// TESTES //

track.album.getAlbumInfo();

// USO DO FOR... IN //

for (let key in track) {
  if (typeof track[key] !== "function" && typeof track[key] !== "object") {
    console.log(`${key}: ${track[key]}`);
  }
}

// NOVO ARRAY //

const catalogue = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    duration: 200,
    genre: "Pop",
    plays: 12500
  },
  {
    title: "Levitating",
    artist: "Dua Lipa",
    duration: 203,
    genre: "Pop",
    plays: 9800
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    duration: 233,
    genre: "Pop",
    plays: 15000
  },
  {
    title: "HUMBLE.",
    artist: "Kendrick Lamar",
    duration: 177,
    genre: "Hip-Hop",
    plays: 8700
  },
  {
    title: "Someone Like You",
    artist: "Adele",
    duration: 285,
    genre: "Soul",
    plays: 11000
  }
];

/* pedir para que receba um objeto e fazer igual ao exercicio 6 */
const getTrackInfo = (track) => 
    `${track.title} - ${track.artist} | ${formatDuration(track.duration)} | ${track.genre} | ${formatPlays(track.plays)} `;

/* percorrer o array e imprimir */

catalogue.forEach((track) => console.log(getTrackInfo(track)));

for (let track of catalogue) {
    if ( track.plays > 10000) {
        console.log(`${track.title} - ${formatPlays(track.plays)}`);
    }
}; 


/* adiconar duas novas faixas  */

catalogue.push (
    {
        title: "Redbone",
        artist: "Childish Gambino",
        duration: 325,
        genre: "R&B",
        plays: 7600,
    },
    {
    title: "Everlong",
    artist: "Foo Fighters",
    duration: 250,
    genre: "Rock",
    plays: 6200,
  },
);

catalogue.shift();
console.log(catalogue);

// CALCULAR A DURAÇÃO DO CATÁLOGO //

let totalDuration = 0;

catalogue.forEach((track)=> {
  totalDuration += track.duration;
});

console.log(`Total catalogue duration: ${formatDuration(totalDuration)}`);

// EXERCICIO INTEGRADOR //

const playlist = {

  name : "late night Vibes",

  createdBy : "mina_le6",

  tracks : [],

  addTrack () {
    this.tracks.push(track)

    console.log(`${track.title} added to ${this.name}`);
  }, 
  
  removeTrack(title) {
  for (let i = 0; i < this.tracks.length; i++) {
    if (this.tracks[i].title === title) {
      this.tracks.splice(i, 1);
      console.log("Removido!");
      return;
    }
  }
  console.log("Track not found.");
},
  getTotalDuration(){
    let total = 0;
    this.tracks.forEach((track) => {
      total += track.duration;



    });
    return `Total: ${formatDuration(total)}`;
    
  },
  
  getMostPlayed() {
    let most = null;
    for (const t of this.tracks) {
      if (most === null || t.plays > most.plays) {
        most = t;
      }
    }
    if (most) console.log(getTrackInfo(most));
    return most;
  },


  printAll() {
    console.log(`${this.name} - by ${this.describeTrack}`);
    this.tracks.forEach((t) => console.log(getTrackInfo(t)));
  }
}

// TESTES //

playlist.addTrack(catalogue[0]);
playlist.addTrack(catalogue[1]);
playlist.addTrack(catalogue[2]);

playlist.printAll();

playlist.removeTrack(catalogue[1].title);
playlist.printAll;

console.log(playlist.getTotalDuration());

playlist.getMostPlayed();


// DESAFIOS //

playlist.getByGenre = function (genre) {

  const resultado = this.tracks.filter(track =>track.genre === genre);

  resultado.length === 0 
  ? console.log(`No tracks found for genre : ${genre}`)
  : resultado.forEach(track => console.log(getTrackInfo(track)));

};










