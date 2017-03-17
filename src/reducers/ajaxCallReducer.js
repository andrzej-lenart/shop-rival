import * as actionTypes from '../actions/actionTypes';
import * as ajaxActions from '../actions/ajaxCallActions';
import { initialState } from './initialState';

function isSuccessAction(type) {
    return type.substring(type.length - 8) === '_SUCCESS';
}

export default function ajaxCallReducer(state = initialState.ajaxCallsInprogress, action) {
    if (action.type === actionTypes.BEGIN_AJAX_CALL) {
        state =  state + 1;
    }
    else if (action.type === actionTypes.END_AJAX_CALL || isSuccessAction(action.type)) {
        state = state > 0 ? state - 1 : 0;
    }

    return state;
}