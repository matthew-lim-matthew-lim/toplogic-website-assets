var feed = new Instafeed({
    accessToken: 'YOUR_ACCESS_TOKEN',  // Replace with your Instagram Access Token
    template: '<div class="insta-post"><a href="{{link}}" target="_blank"><img src="{{image}}" alt="{{caption}}"></a><p>{{caption}}</p></div>',
    limit: 9,  // Number of posts to display
    sortBy: 'most-recent',  // 'most-recent' or 'least-recent'
    resolution: 'standard_resolution',  // Image resolution: 'thumbnail', 'low_resolution', 'standard_resolution'
});

feed.run();
