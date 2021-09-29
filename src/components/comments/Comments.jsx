import React, {useEffect, useState} from "react";
import {instance as axios} from "../../config/axiosConfig";

//components
import CommentCard from "../common/cards/CommentCard";
import {Redirect} from "react-router-dom";

const Comments = ({selected}) => {

    const [data, setData] = useState({});
    const [isSuccessful, setIsSuccessful] = useState(false);

    const handleChange = e => {
        setData({...data,[e.target.name]:e.target.value});
    };

const postComment = async() => {
    data.commentable_id = selected.id;
    data.commentable_type = selected.category_id === 1? ("App\\Models\\Article") : ("App\\Models\\Video");

    await axios
        .post('/commentaires', data)
        .then((response) => {
            if(response.status === 200){
                setIsSuccessful(true);
            }
            setData(response.data);
            console.log(response.data);
        })
        .catch((err) => {
            console.log(err);
        })
}

    const handleSubmit = e => {
        e.preventDefault();
        console.log("commentaire soumis");
    }

    return isSuccessful?(
        <Redirect to={`/videos/${selected.id}`} />
    ) : (
        <>
            <h3 className="text-gold">Commentaires</h3>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="comment-username"></label>
                    <input
                        type="text"
                        name="username"
                        onChange={handleChange}
                        value={data.username}
                        id="comment-username"
                    />
                </div>
                <textarea
                    className="textarea"
                    name="message"
                    onChange={handleChange}
                    value={data.message}
                    id="comment-message"
                >
                </textarea>
                <div className="flex w-full justify-center">
                    <button
                        className="button button-primary"
                        onClick={postComment}
                    >
                        poster
                    </button>
                </div>

            </form>

            <CommentCard selected={selected} />
        </>
    )

}

export default Comments;