import * as  types from "./actionTypes";

const initialState = {
    
    error: null,
    isLoading: false,
    recipes: []
};




export const recipeReducer = (state = initialState, action) => {
  
    
    switch (action.type) {
        case types.FETCH_RECIPE_START: 
            return {
                ...state,
                isLoading: true,
                
            }
        case types.FETCH_RECIPE_SUCCESS:
            return {
                ...state,
                isLoading: false,
                recipes : action.payload,
            }
        case types.FETCH_RECIPE_FAIL:
            return {
                ...state,
                isLoading: false,
                error: action.payload

            }
        case types.ADD_FAVORITES:
            return {
                ...state,
                isLoading: false,
                recipes: action.payload
      
        }
        default:
            return state;
    }
}

