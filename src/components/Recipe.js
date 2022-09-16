import React from 'react'
import style from './recipe.module.css'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Recipe = ({ recipe: { ingredients, calories, image, title, label, digest } }) => {

    const protein = Math.round(digest[2].total)

    return (
        <div className={style.recipe}>
            <Header image={image}>
                <h1 >{label}</h1>
            </Header>

            <ol>
                {ingredients.map((ingredient, idx) => (
                    <li key={idx} >{ingredient.text}</li>
                ))}
            </ol>
            <p>{`Calories: ${Math.round(calories)} kcal`}</p><p>Protein: {`${protein}g`}</p>
            {/* <img className={style.image} src={image} alt="" /> */}
        </div>
    )
}
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired
}


export default Recipe


const Header = styled.div`
width:300px;
height:250px;
margin-top:5px;
background-image: url(${props => props.image});
backround-size:contain;
background-repeat:no-repeat;
display:flex ;
align-items:center;
justify-content:center;

h1{
    color:#fff;
    text-shadow:1px 1px #000;
}
`;