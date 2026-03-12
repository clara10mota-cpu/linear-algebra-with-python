

const formatDuration = (seconds => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return m + ":" + (s < 10 ? "0" + s : s);
})

const greetArtist = (name, genre) => {
    console.log("Welcome to SoundBase, " + name + "! Your genre is " + genre + ".");
}

const isLongTrack = duration => duration > 240 ;

const formatPlays = plays =>
    plays >= 1000 
? (plays / 1000).toFixed(1)+"k"
: plays.toString();

console.log(formatDuration(215));
greetArtist("Billie Eilish","Pop");
console.log(isLongTrack(215));
console.log(formatPlays(12500));





