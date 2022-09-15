import React, { useContext, useState, useEffect } from 'react'
import RecipeContext from '../context/RecipeContext'
import Recipe from '../components/Recipe';


const Home = () => {

    const { recipes, loading, getRecipes } = useContext(RecipeContext);

    useEffect(() => {

        rec()


    }, [recipes])
    const [search, setSearch] = useState('');
    const [query, setQuery] = useState('chicken');







    const updateSearch = e => {
        e.preventDefault();
        setSearch(e.target.value)
        console.log(search);

    }
    const getSearch = (e) => {
        e.preventDefault();
        getRecipes(search)
        setSearch('')

    }


    function rec() {
        console.log(recipes)

    }

    if (loading) {
        return <h3>Loading ...</h3>
    }
    return (
        <>
            <form action="" className='search-form' onSubmit={getSearch}>
                <input type="text" className='search-bar' value={search} onChange={updateSearch} />
                <button type='submit' className='search-button' >Search</button>
            </form>
            <div>
                {recipes.map((recipe) => (
                    <Recipe key={recipe.recipe.title} recipe={recipe.recipe} />
                ))
                }

            </div>


        </>
    )
}

export default Home