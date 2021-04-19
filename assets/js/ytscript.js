var artistEl = document.querySelector("#artist-input");
var songEl = document.querySelector("#song-input");
var buttonEl = document.querySelector("#search-button");
var videoListEl = document.querySelector("#videoListPlaceholder");

var getYoutubeVideos = function (artist, song) {
    var search = artist + " " + song;
    var addSearch = search.split(" ").join("+");

    // grabbing user searches


    var apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + addSearch + "&order=viewCount&key=AIzaSyD2qBXYddXp5C3zOfxsc2aj-EkeN3oXcuE";


    // apiurl sample
    // https://www.googleapis.com/youtube/v3/search?part=snippet&q=john+legend+all+of+me&order=viewCount&key=AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw

    // making a request to url
    fetch(apiURL).then(function (response) {


        response.json()
        .then(function (data) {
            displayYtVideos(data);
        })
       

    });
};

var formSubmitHandler = function (event) {
    event.preventDefault();

    var artistInput = artistEl.value;
    var songInput = songEl.value;

    if (artistInput || songInput) {
        getYoutubeVideos(artistInput, songInput);
        artistEl.value = "";
        songEl.value = "";
    }
    //else {
    // figure out a way to display invalid search without alerts
    //    alert("Try again");
    // }
};



var displayYtVideos = function (vidList) {



    // grabbing div named videoContainers
    var videoContainerEl = document.querySelector("#videosContainer");



    // var vidLinkEmb = "https://www.youtube.com/embed/f-wMpSz1oa4";
    var vidLinkEmb = "https://www.youtube.com/embed/" + vidList.items[0].id.videoId;

    // add to  iframe element
    var playerFrameEl = document.getElementById("videoIframe");


    // customizing attributes to iframe
    // shorten this by creating an object array
    playerFrameEl.setAttribute("src", vidLinkEmb);
    playerFrameEl.setAttribute("height", "360");
    playerFrameEl.setAttribute("width", "480");
    playerFrameEl.setAttribute("frameborder", "0");
    playerFrameEl.setAttribute("allow", "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture");


    


buttonEl.addEventListener("click", formSubmitHandler);