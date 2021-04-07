//     return fetch('https://www.googleapis.com/youtube/v3/search?part=snippet
//     &forMine=true
//     &q=Youtube+Data+API
//     &order=viewCount
//     &type=video
//     &key=AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw
//     ')
// };
 // api key does not require user authorization
 // key = 'AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw';
 // searchURL = 'https://www.googleapis.com/youtube/v3/search';

 var getYoutubeVideos = function () {
    var response = fetch('https://www.googleapis.com/youtube/v3/search?part=snippet&order=viewCount&key=AIzaSyDfubMGVZns1rWCJ_VTsHqjAoYaa2PKyDw')
        .then(function(response){
            response.json()
            
            .then(function(data){
                console.log(data);
            })
        });

};

 getYoutubeVideos();