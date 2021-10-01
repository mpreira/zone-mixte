import React from "react";
import Moment from "react-moment";

const CommentCard = ({selected}) => {
    return(
        <>
            {
                selected.comments === null ?
                    (<p>Aucun commentaire pour le moment</p>) : (

                        selected.comments.map((comment, i) => (
                            <div
                                key={i}
                                className="comments"
                            >
                                <div className="comment-username">
                                    <span>
                                        {comment.username}
                                    </span>
                                    <span>
                                        <Moment fromNow>{comment.updated_at}</Moment>
                                    </span>
                                </div>
                                <p>{comment.message}</p>
                            </div>
                        ))
                    )
            }
        </>
    )
}
export default CommentCard;