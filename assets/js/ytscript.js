var artistEl = document.querySelector("#artist-input");
var songEl = document.querySelector("#song-input");
var buttonEl = document.querySelector("#search-button");
var videoListEl = document.querySelector("#videoListPlaceholder");
 
var getYoutubeVideos = function (artist, song) {
    var search = artist + song;
    var addSearch = search.split(" ").join("+");

    // grabbing user searches
    var apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + addSearch + "&order=viewCount&key=AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw";

    // making a request to url
    fetch(apiURL).then(function(response){
            response.json().then(function(data){
                console.log(data);
            });
        });
};

var formSubmitHandler = function(event) {
    event.preventDefault();
    console.log(event);
};


buttonEl.addEventListener("submit", formSubmitHandler);