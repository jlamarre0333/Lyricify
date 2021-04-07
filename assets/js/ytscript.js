 var getYoutubeVideos = function (search) {
    
    var addSearch = "";

    for ( var i = 0, n = search.length; i < n; i++){
        // if theres a space, replace with +
        if ( search[i] === "") {
            search[i] = "+";
        }

        // add each letter
        addSearch += search[i];
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

 getYoutubeVideos("smiles baby");
