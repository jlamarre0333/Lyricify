 var getYoutubeVideos = function (search) {
    
    // if the amount of words in the search is greater than an array of 0
    if(search.length > 0){
        // search word placeholder
        var addSearch = "";

        for ( var i = 0, n = search.length + 1; i < n; i++){
            // add each word
            addSearch += search[i];
        }
    }
    else{
        addSearch = search;
    }

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
