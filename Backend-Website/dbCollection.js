import mongoose from 'mongoose';

const ticktockData = mongoose.Schema({
    url: String,
    channel: String,
    songs: String,
    discription: String,
    likes: String,
    shares: String,
    messages: String
})





export default mongoose.model('tiktockVideos', ticktockData)