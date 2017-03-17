import { combineReducers } from 'redux';
import ajaxCallsInProgress from './ajaxCallReducer';
import products from './productsReducer';
import categories from './productCategoryReducer';

const rootReducer = combineReducers({
    ajaxCallsInProgress,
    products,
    categories
});

export default rootReducer;