// Your use of the YouTube API must comply with the Terms of Service:
// https://developers.google.com/youtube/terms
// Helper function to display JavaScript value on HTML page.
function showResponse(response) {
 
    var responseString = JSON.stringify(response, '', 3);
    document.getElementById('response').innerHTML += responseString;
}

// Called automatically when JavaScript client library is loaded.
function onClientLoad() {
    gapi.client.load('youtube', 'v3', onYouTubeApiLoad);
}

// Called automatically when YouTube API interface is loaded (see line 9).
function onYouTubeApiLoad() {
    // This API key is intended for use only in this lesson.
    // See http://goo.gl/PdPA1 to get a key for your own applications.
    gapi.client.setApiKey('AIzaSyDz_nT_p5zxjonFRMbha3JXGQUOQXx4WsY');

    search();
}

function search(q) {
    // Use the JavaScript client library to create a search.list() API call.
    q = q +" drone footage";

    var request = gapi.client.youtube.search.list({
        part: 'snippet',
        q:q
       
    });
    
    // Send the request to the API server,
    // and invoke onSearchRepsonse() with the response.
    
    request.execute(onSearchResponse);

    ;
}

// Called automatically with the response of the YouTube API request.
function onSearchResponse(response) {
    showResponse(response);
     
     
}



