import { put, all, fork, call, takeEvery } from 'redux-saga/effects' 
import * as types from './actionTypes';
import { getRecipe }  from "./api";


export function* onLoadRecipeAsync({query}) {
    try {
        console.log(query)
   
        const response = yield call(getRecipe, query);
        yield put({ type: types.FETCH_RECIPE_SUCCESS, payload: response.data })
        console.log(response.data)
    }
    catch(err){
        yield put({ type: types.FETCH_RECIPE_FAIL, payload: err })
    }
}


export function* onLoadRecipe() {
    yield takeEvery(types.FETCH_RECIPE_START , onLoadRecipeAsync)
}

const recipeSaga = [fork(onLoadRecipe)];

export default function* rootSaga() {
    yield all([...recipeSaga])
    console.log(recipeSaga)
}