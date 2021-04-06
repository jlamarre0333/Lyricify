var searchButtonEl = document.querySelector("#search-button");

function ytInfo(){
    gapi.client.setApiKey('AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw');
    gapi.client.load("youtube", "v3", function(){

    });

 // api key does not require user authorization
 // key = 'AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw';
 // searchURL = 'https://www.googleapis.com/youtube/v3/search';
}

var video = document.createElement("script");
    video.src = "https://www.googleapis.com/youtube/v3/search"
