const key = "AIzaSyDgSqMELyj0QOSFENULzSbzGDp1WxjKNLg"
const url = "https://www.googleapis.com/youtube/v3/channels"

let x = "https://developers.google.com/youtube/v3/docs/activities/list"
let y = "https://developers.google.com/youtube/v3/docs/channelSections/list"
let z = "https://developers.google.com/youtube/v3/docs/thumbnails/set"

async function youtube() {
    let yt_url = url + '?id=7lCDEYXw3mM' + '&key=' + key
        + '&part=snippet,contentDetails,statistics,status'
    const res = await fetch(z)
    console.log('res', res)
}

youtube()
