import React, { useRef, useState } from 'react'
import './Video.css'
import VideoFooter from './VideoFooter';
import VideoSideBar from './VideoSideBar';

function Video({ url, channel, songs, discription, likes, shares, messages }) {
    let [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);
    const handleVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play()
            setPlaying(true)
        }
        console.log(videoRef)
    }
    return (
        <div className="video">
            <video className="video__play" loop onClick={handleVideoPress} ref={videoRef} src={url}></video>

            {/* VideoFooter */}
            <VideoFooter channel={channel} songs={songs} discription={discription} />
            {/* VideoSideBar */}
            <VideoSideBar likes={likes} shares={likes} messages={messages} />
        </div>
    )
}

export default Video
