import * as types from './actionTypes';
import * as productsApi from '../../api/productsApi';
import * as ajaxCallActions from './ajaxCallActions';

function getAllProductsSuccess(products) {
    return { type: types.GET_ALL_PRODUCTS_SUCCESS, products };
}

function getProductCategoriesSuccess(categories) {
    return { type: types.GET_CATEGORIES_SUCCESS, categories };
}

export function getAllProducts(dispatch) {
    return dispatch => {
        dispatch(ajaxCallActions.beginAjaxCall());
        productsApi.getProducts()
            .then(products => {
                dispatch(getAllProductsSuccess(products));
            })
            .catch(err => {
                dispatch(ajaxCallActions.endAjaxCall());
                throw(err);
            });
    };
}

export function getProductCategories() {
    return dispatch => {
        dispatch(ajaxCallActions.beginAjaxCall());
        productsApi.getProductCategories()
        .then(categories => {
            dispatch(getProductCategoriesSuccess(categories));
        })
        .catch(err => {
            dispatch(ajaxCallActions.endAjaxCall());
            throw(err);
        });
    };
}
