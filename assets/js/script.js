function getLyrics(artist, songname) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${songname}`)
    .then(res => res.json())
    .then(data => data.lyrics)
    .then(lyrics => console.log(lyrics))
}

getLyrics('Drake', "What's Next")

// function youtubeSearch(){

//     var key = 'AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw';
//     var searchURL = 'https://www.googleapis.com/youtube/v3/search';
// }
