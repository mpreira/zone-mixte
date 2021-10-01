import React, {useEffect, useState} from "react";
import {instance as axios} from "../../config/axiosConfig";
import {useRouteMatch, Route, Switch} from "react-router-dom";

//components
import {ArticleCard} from "../common/index";
import {ArticleView} from "./index";

const Articles = () => {

    const [articles, setArticles] = useState([]);

    useEffect( () => {
        const fetchArticles = async() => {
            await axios
                .get("/articles")
                .then((response) => {
                    setArticles(response.data);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
        fetchArticles();
    }, []);


    const displayArticles =
        articles.map((article, i) => (
            <ArticleCard
                src={article.image}
                title={article.title}
                author={article.user_id}
                sportTag={article.sport.name}
                classes={"bg-white p-4"}
                url={`/articles/${article.id}`}
            />
        ))
    ;

    let { path } = useRouteMatch();

    return(
        <Switch>
            <Route exact path={path}>
                <div className="body">
                    <h2>Articles</h2>

                    {displayArticles}
                </div>
            </Route>
            <Route path={`${path}/:articleId`}>
                <ArticleView articles={articles} />
            </Route>
        </Switch>
    )
}
export default Articles;