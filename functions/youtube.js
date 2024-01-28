//const fetch = require("node-fetch")

function getChannelVideoTitles(channelId) {
    // Replace with your actual YouTube API key
    const apiKey = 'AIzaSyDgSqMELyj0QOSFENULzSbzGDp1WxjKNLg';
  
    // Start with the first page of results
    let nextPageToken = '';
  
    const videoTitles = [];
  
    async function fetchVideos() {
      try {
        console.log(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&key=${apiKey}&maxResults=50&pageToken=${nextPageToken}`);
        const response = await fetch(`https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&playlistId=${channelId}&key=${apiKey}&maxResults=50&pageToken=${nextPageToken}`);
        const data = await response.json();
        console.log('data', data)
  
        nextPageToken = data.nextPageToken; // Update nextPageToken for pagination
  
        videoTitles.push(...data.items.map(item => item.snippet.title));
  
        if (nextPageToken) {
          fetchVideos(); // Recursively fetch next page if available
        } else {
          // Display or use the collected video titles
          console.log(videoTitles);
        }
      } catch (error) {
        console.error('Error fetching videos:', error);
      }
    }
  
    fetchVideos();
  }
  
  // Example usage:
  const channelId = 'g56QT0k2Jb4'; // Replace with the actual channel ID
  getChannelVideoTitles(channelId);