const songInput = document.getElementById("song-input")
const videoInput = document.getElementById("video-input")

function getLyrics(artist, songname) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${songname}`)
        .then(res => res.json())
        .then(data => data.lyrics)
        .then(lyrics => console.log(lyrics))
}



getLyrics('Drake', "What's Next")

document.addEventListener('click', )