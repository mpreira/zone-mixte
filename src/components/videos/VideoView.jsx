import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {instance as axios} from "../../config/axiosConfig";
import Moment from "react-moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faShare} from "@fortawesome/free-solid-svg-icons";

//components
import NotFound from "../404notfound/NotFound";
import Loader from "../common/Loader";
import Comments from "../comments/Comments";
import GoBackButton from "../common/GoBackButton";

const VideoView = ({videos}) => {

    let { videoId } = useParams();
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (videoId) {
            axios
                .get(`/videos/${videoId}`)
                .then((response) => {
                    setSelected(response.data);
                    setNotFound(false);
                    setLoading(false);
                    console.log(response);
                })
                .catch((err) => {
                    setNotFound(true);
                    setLoading(false);
                    console.log(err);
                });
        }
    }, [videoId]);

    return !loading? (!notFound ?(
        <>
            <GoBackButton />

            <div className="body article">
                <div className="flex flex-col items-center">
                    <img src={selected.video} alt="" />

                    <h2>{selected.title}</h2>

                    <div className="details">
                        <span>publié par {selected.user.username} le <Moment format="L">{selected.created_at}</Moment></span>
                        <span className="text-right">mis à jour le <Moment format="L">{selected.updated_at}</Moment></span>
                    </div>

                    <div className="flex justify-end w-full mt-4 text-gray-400">
                        <button className="button-icon icon-primary mr-2">
                            <FontAwesomeIcon icon={faPaperPlane} className="fa-xs" />
                        </button>
                        <button className="button-icon icon-primary mr-2">
                            <FontAwesomeIcon icon={faShare} className="fa-xs" />
                        </button>
                    </div>

                    <div className="content">
                        {selected.summary}
                    </div>

                    <div className="flex flex-col w-full mt-16">
                        <Comments selected={selected} />
                    </div>

                </div>
            </div>
        </>
    ) : <NotFound />) : (<Loader />)
}
export default VideoView;