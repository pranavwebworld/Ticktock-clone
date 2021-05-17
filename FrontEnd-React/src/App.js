import { react, useEffect, useState } from 'react'
import './App.css';
import Video from './Components/Video';
import axios from './axios'


function App() {
  let [videos, setVideos] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios.get('/v2/posts');
      setVideos(response.data)

      return response;
    }

    fetchData();
  }, [])


  return (
    <div className="app">
      <div className="app__videos">
        {
          videos.map((video, key) => {
            return (
              <Video key={key} url={video.url}
                channel={video.channel}
                discription={video.discription}
                songs={video.songs}
                likes={video.likes}
                shares={video.shares}
                messages={video.messages}
              />
            )
          })
        }
      </div>

    </div>
  );
}

export default App;
