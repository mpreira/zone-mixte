import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import {instance as axios} from "../../config/axiosConfig";
import Moment from "react-moment";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPaperPlane, faShare} from "@fortawesome/free-solid-svg-icons";

//components
import {NotFound} from "../404notfound/index";
import {Loader} from "../common/index";
import {Comments} from "../comments/index";
import {GoBackButton} from "../common/index";

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
        <>
            <GoBackButton />

            <div className="body article">
                <div className="flex flex-col items-center">
                    <img src={selected.image} alt="" />

                    <h2>{selected.title}</h2>

                    <div className="details">
                        <span>publié par {selected.user.username} le <Moment format="L">{selected.created_at}</Moment></span>
                        <span>mis à jour le <Moment format="L">{selected.updated_at}</Moment></span>
                    </div>

                    <div className="flex justify-end w-full mt-2 text-gray-400">
                        <button className="button-icon icon-primary mr-2">
                            <FontAwesomeIcon icon={faPaperPlane} className="" />
                        </button>
                        <button className="button-icon icon-primary mr-2">
                            <FontAwesomeIcon icon={faShare} />
                        </button>
                    </div>

                    <div className="content">
                        {selected.content}
                    </div>

                    <div className="flex flex-col w-full mt-16">
                        <Comments selected={selected} />
                    </div>

                </div>
            </div>
        </>
    ) : <NotFound />) : (<Loader />)
}
export default ArticleView;