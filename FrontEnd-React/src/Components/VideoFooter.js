import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'

function VideoFooter({ channel, discription, songs }) {
    return (
        <div className="videoFooter">
            <div className="videoFooter__text">
                <h3>@{channel}</h3>
                <p>{discription}</p>
                <div className="videoFooter__ticker">
                    <MusicNoteIcon className="music_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{songs}</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src='/Icons/record.svg' className="videoFooter_record_icon" />
        </div>
    )
}

export default VideoFooter
