const functions = require('firebase-functions')
const express = require('express')
const app = express()
exports.api = functions.https.onRequest(app)

/* OAuth2 security: */
function oauth2(req, res, next) {
    if (req.headers.authorization !== 'Basic OAuth2token')
        return res.status(401).send('Missing Authorization')
    next()
}

/* YouTube API: */
const Titles = 'titles'
const Transcripts = 'transcripts'
const Thumbnails = 'thumbnails'

function YouTubeApi(data, channel) {
    let videos = ''
    // with access, set videos = fetch('YouTube', channel)
    // instead, returning mock data
    if (data === Titles) videos = ['title1', 'title2', 'title3']
    if (data === Transcripts) videos = ['transcript1', 'transcript2', 'transcript3']
    if (data === Thumbnails) videos = ['thumbnail1', 'thumbnail2', 'thumbnail3']
    return videos
}

/* OpenAI API: */
function OpenAIApi(data, videos) {
    let result = ''
    // with access, set videos = fetch('OpenAI', prompt, videos)
    // instead, returning mock data
    if (data === Titles) result = ['title1', 'title2', 'title3']
    if (data === Transcripts) result = ['transcript1', 'transcript2', 'transcript3']
    if (data === Thumbnails) result = ['thumbnail1', 'thumbnail2', 'thumbnail3']
    return result
}

/* DBMS: */
function DBMS(data, channel, videos) {
    // store channel and videos in SQL or NoSQL database
}

/* API requests (each one is a microservice): */
app.get('/api/titles', oauth2, async(req, res) => {
    const channel = req.query.channel
    if (!channel)
        return res.status(400).send('Missing channel')
    const videos = YouTubeApi(Titles, channel)
    const result = OpenAIApi(Titles, videos)
    DBMS(Titles, channel, videos)
    res.send(result)
})

app.get('/api/transcripts', oauth2, async(req, res) => {
    const channel = req.query.channel
    if (!channel)
        return res.status(400).send('Missing channel')
    const videos = YouTubeApi(Transcripts, channel)
    const result = OpenAIApi(Transcripts, videos)
    DBMS(Transcripts, channel, videos)
    res.send(result)
})

app.get('/api/thumbnails', oauth2, async(req, res) => {
    const channel = req.query.channel
    if (!channel)
        return res.status(400).send('Missing channel')
    const videos = YouTubeApi(Thumbnails, channel)
    const result = OpenAIApi(Thumbnails, videos)
    DBMS(Thumbnails, channel, videos)
    res.send(result)
})