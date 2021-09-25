import React from "react";

//components
import ArticleCard from "../common/cards/ArticleCard";
import {Sport1, Sport2, Sport3, Sport4} from '../../images/index';

const Articles = () => {

    return(
        <div className="body">
            <h2>Articles</h2>

            <ArticleCard
                src={Sport1}
                title={"In hac habitasse platea dictumst. Etiam arcu. "}
                author={"prénom nom"}
                sportTag={"sport"}
                classes={"bg-white p-4"}
            />

            <ArticleCard
                src={Sport2}
                title={"In hac habitasse platea dictumst. Etiam arcu. "}
                author={"prénom nom"}
                sportTag={"sport"}
                classes={"bg-white p-4"}
            />

            <ArticleCard
                src={Sport3}
                title={"Cras facilisis sollicitudin ornare. Maecenas vitae egestas."}
                author={"prénom nom"}
                sportTag={"sport"}
                classes={"bg-white p-4"}
            />

            <ArticleCard
                src={Sport4}
                title={"Proin pretium mi et massa egestas, non. "}
                author={"prénom nom"}
                sportTag={"sport"}
                classes={"bg-white p-4"}
            />
        </div>
    )
}
export default Articles;