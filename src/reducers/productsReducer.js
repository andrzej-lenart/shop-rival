import * as actionTypes from '../actions/actionTypes';
import { initialState } from './initialState';

export default function productsReducer(state = initialState.products, action) {
    switch (action.type) {
        case actionTypes.GET_ALL_PRODUCTS_SUCCESS: 
        return action.products;
    }

    return state;
}