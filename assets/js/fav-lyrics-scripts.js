const songInput = document.getElementById("song-input")
const artistInput = document.getElementById("artist-input")
const lyricsDisplay = document.getElementById("lyrics")
const submitSearch = document.getElementById("search-button")

var logo = function (data) {
    var lyricURL = "https://api.lyrics.ovh/v1/${artist}/${songname}"
    fetch(lyricURL).then(function(response) {
        if (response.ok) {
            response.json().then(function (data) {
               console.log(data)
            });
var displayfavlyrics = function () 
            {
            
            favlryics = new Array();
            Object.values(localStorage).forEach((value) => 
                {
            favlyrics.push(value);
                });
    
        // Add span to put favorite btn
        var favlyrics = document.createElement("span");
        favlyrics.id = "btn-span";
        favlyrics.className = "song-title";
        FavlyricsEl.appendChild(watchList);
                     
        // button for favorite lyrics
        var favlyricsbtn = document.createElement("button");
        favlyricsbtn.id = "fav-lyrics-btn" + savedlyrics[i].id;
        favlyricsbtn.className = "remove-btn btn-floating halfway-fab waves-effect waves-light red small material-icons";
        favlyricsbtn.setAttribute("type", "button");
        favlyricsbtn.setAttribute("value", i);
       favlyricsbtn.textContent = "remove";
        favlyricsbtn.onclick = (function() 
        {
            var currentI = i;
             return function() 
            { 
             var lyrics = JSON.parse(savedlyrics[currentI])
            localStorage.removeItem(video)
            displayWatchList(1)
            }
        })();
        favlyrics.appendChild(favlyricsbtn);
            
        // This handler will be executed every time the cursor is moved over a different list item
        FavLyricsEl.addEventListener("mouseover", function (event) {
        // highlight the mouseover target
        event.target.style.opacity = "0.5";
        event.target.style.transition = "0.3s"
            
        event.target.addEventListener("mouseout", function (event) {
             event.target.style.opacity = "";
            })
          }, false);
        }
<<<<<<< HEAD
    };
=======
    };
>>>>>>> b0de3f06051558acd240a0c3f1edbd9624bdb31b
