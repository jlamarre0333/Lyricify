 var getYoutubeVideos = function (search) {
    
    var addSearch = search.split(" ").join("+");

    // grabbing whatever user searches
    var apiURL = "https://www.googleapis.com/youtube/v3/search?part=snippet&q=" + addSearch + "&order=viewCount&key=AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw";

    // making a request to url
    fetch(apiURL).then(function(response){
            response.json().then(function(data){
                console.log(data);
            });
        });
};

 getYoutubeVideos();
