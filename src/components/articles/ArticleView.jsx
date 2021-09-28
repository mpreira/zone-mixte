import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {instance as axios} from "../../config/axiosConfig";
import Moment from "react-moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faShare} from "@fortawesome/free-solid-svg-icons";

//components
import NotFound from "../404notfound/NotFound";
import Loader from "../common/Loader";

const ArticleView = ({articles}) => {

    let { articleId } = useParams();
    const [selected, setSelected] = useState({});
    const [loading, setLoading] = useState(true);
    const [notFound, setNotFound] = useState(false);

    useEffect(() => {
        if (articleId) {
            axios
                .get(`/articles/${articleId}`)
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
    }, [articleId]);

    return !loading? (!notFound ?(
        <div className="body article">
            <div className="flex flex-col items-center">
                <img src={selected.image} alt="" />

                <h2>{selected.title}</h2>

                <div className="details">
                    <span>publié par {selected.user_id} le <Moment format="L">{selected.created_at}</Moment></span>
                    <span>mis à jour le <Moment format="L">{selected.updated_at}</Moment></span>
                </div>

                <div className="flex justify-end w-full mt-2 text-gray-400">
                    <button>
                        <FontAwesomeIcon icon={faPaperPlane} className="lg:mr-2 mr-5" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faShare} className="lg:mr-2 mr-5" />
                    </button>
                </div>

                <div className="content">
                    {selected.content}
                </div>

            </div>
        </div>
    ) : <NotFound />) : (<Loader />)
}
export default ArticleView;