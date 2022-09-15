import { createContext, useReducer } from "react";
import recipeReducer from './RecipeReducer'
const RecipeContext = createContext()


export const RecipeProvider = ({ children }) => {
    const initialState = {
        recipes: [],
        loading: false,
    }

    const [state, dispatch] = useReducer(recipeReducer, initialState)

    // Get Recipes

    const getRecipes = async (item) => {
        setLoading()
        const params = new URLSearchParams({
            q: { item },
            app_id: ,
            app_key: ,
            type: 'public',
        })
        const response = await fetch(`https://api.edamam.com/api/recipes/v2?${params}`)

        const data = await response.json()

        dispatch({
            type: 'GET_RECIPES',
            payload: data.hits,
        })
        console.log(data.hits)
    }



    const setLoading = () => {
        dispatch({ type: 'SET_LOADING' })
    }
    return <RecipeContext.Provider value={{ recipes: state.recipes, loading: state.loading, getRecipes }} >{children}</RecipeContext.Provider>
}

export default RecipeContext