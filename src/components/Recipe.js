import React from 'react'
import style from './recipe.module.css'
import PropTypes from 'prop-types'


const Recipe = ({ recipe: { ingredients, calories, image, title, label } }) => {



    return (
        <div className={style.recipe}>
            <h1 >{label}</h1>
            <ol>
                {ingredients.map(ingredient => (
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <p>{calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}


export default Recipe