import React, {useEffect, useState} from "react";
import {instance as axios} from "../../config/axiosConfig";
import {useRouteMatch, Route, Switch} from "react-router-dom";

//components
import VideoCard from "../common/cards/VideoCard";
import VideoView from './VideoView';

const Videos = () => {

    const [videos, setVideos] = useState([]);
    let { path } = useRouteMatch();

    useEffect( () => {
        const fetchVideos = async() => {
            await axios
                .get("/videos")
                .then((response) => {
                    setVideos(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        } ;
        fetchVideos();
    }, []);

    const displayVideos =
        videos.map((video, i) => (
            <VideoCard
                src={video.video}
                title={video.title}
                author={video.user_id}
                sportTag={video.sport.name}
                classes={"bg-white p-4"}
                url={`${path}/${video.id}`}
            />
        ))
    ;

  return(
      <Switch>
          <Route exact path={path}>
              <div className="body">
                  <h2>Vidéos</h2>

                  {displayVideos}
              </div>
          </Route>
          <Route path={`${path}/:videoId`}>
              <VideoView videos={videos} />
          </Route>
      </Switch>
  )
}
export default Videos;