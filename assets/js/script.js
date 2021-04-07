const songInput = document.getElementById("song-input")
const artistInput = document.getElementById("artist-input")
const lyricsDisplay = document.getElementById("lyrics")
const submitSearch = document.getElementById("search-button")

function getLyrics(artist, songname) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${songname}`)
        .then(res => res.json())
        .then(data => data.lyrics)
        .then(lyrics => {
            lyricsDisplay.textContent = lyrics;
        })
}

var formSubmitHandler = function (event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    const songName = songInput.value.trim();
    const artistName = artistInput.value.trim();

    if (songName) {
        getLyrics(artistName, songName);
        

        // clear old content
        //   repoContainerEl.textContent = '';
        //   nameInputEl.value = '';
    } else {
        alert('Invalid Search');
    }
    
};


submitSearch.addEventListener('click', formSubmitHandler);
<<<<<<< HEAD
=======

>>>>>>> ac37a65a544ef3ef986618bf9126df0823c34af4
