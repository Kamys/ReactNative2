import { createReducer } from 'redux-act';
import actions from './actions';

const initialState = {
    isButtonOn: false,
}

const reducer = createReducer({}, initialState);

reducer.on(actions.pressButton.request, state => ({
    ...state,
    isButtonOn: !state.isButtonOn,
}));

export default reducer;