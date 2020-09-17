import React from "react";
import "./Card.css";

export default function Card(props) {
  //   console.log(props.recipes);
  const { recipes } = props;

  return (
    <div className="main_container">
      {recipes.map((recipe) => (
        <div className="card_body">
          <div className="card_image">
            <img className="__image" src={recipe.recipe.image} alt="recipe"/>
          </div>
          <div className="card_title">
            <h2>{recipe.recipe.label}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
