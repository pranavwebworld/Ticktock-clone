import React, { useState } from 'react'
import './VideoSideBar.css'
import FavoriteIcon from '@material-ui/icons/Favorite';
import MessageIcon from '@material-ui/icons/Message';
import ShareIcon from '@material-ui/icons/Share';

function VideoSideBar({ likes, messages, shares }) {
    let [liked, setLiked] = useState(false)
    return (
        <div className="videoSideBar">
            <div className="videoSideBar_button">
                {
                    liked ? (
                        <FavoriteIcon fontSize="large" style={{ color: 'red' }} onClick={(e) => setLiked(false)} />
                    ) :
                        (
                            <FavoriteIcon fontSize="large" onClick={(e) => setLiked(true)} />
                        )
                }
                <p>{liked ? likes + 1 : likes}</p>

            </div>
            <div className="videoSideBar_button">
                <MessageIcon fontSize="large" />
                <p>{messages}</p>
            </div>
            <div className="videoSideBar_button">
                <ShareIcon fontSize="large" />
                <p>{shares}</p>
            </div>
        </div>
    )
}

export default VideoSideBar
