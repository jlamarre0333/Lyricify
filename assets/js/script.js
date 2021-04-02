function getLyrics(artist, songname) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${songname}`)
    .then(res => res.json())
    .then(data => data.lyrics)
    .then(lyrics => console.log(lyrics))
}

getLyrics('Drake', "What's Next")