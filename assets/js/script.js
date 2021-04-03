const songInput = document.getElementById("song-input")
const videoInput = document.getElementById("video-input")

function getLyrics(artist, songname) {
    return fetch(`https://api.lyrics.ovh/v1/${artist}/${songname}`)
        .then(res => res.json())
        .then(data => data.lyrics)
        // .then(lyrics => console.log(lyrics))
}

var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();
  
    // get value from input element
    // var songName = songInput.value.trim();
  
    if (songName) {
      getLyrics(songName);
      document.appendChild("div")
  
      // clear old content
    //   repoContainerEl.textContent = '';
    //   nameInputEl.value = '';
    } else {
      alert('Please enter a GitHub username');
    }
  };

getLyrics('Drake', "What's Next")

document.addEventListener('submit', formSubmitHandler )