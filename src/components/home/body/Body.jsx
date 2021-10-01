import React from "react";

//components
import {HeroCard} from "../../common/index";
import {ArticleCard} from "../../common/index";
import {Sport1, Sport2, Sport3, Sport4} from '../../../images/index';

const Body = () => {
  return(
      <div className="body">
          <HeroCard
              src={Sport1}
              title={"Nunc sit amet condimentum leo. Aenean id. "}
              author={"prénom nom"}
              sportTag={"sport"}
              classes={"-mt-20 ml-4 w-3/4 z-10"}
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
export default Body;