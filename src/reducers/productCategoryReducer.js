import * as actionTypes from '../actions/actionTypes';
import { initialState } from './initialState';

export default function productCategoryReducer(state=initialState.productCategories, action) {
    if(action.type === actionTypes.GET_CATEGORIES_SUCCESS) {
        return action.categories;
    }

    return state;
}