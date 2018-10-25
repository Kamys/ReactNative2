import { createReducer } from 'redux-act';
import actions from './actions';

const initialState = {
    selectedPointer: [],
    currentPointer: null,
    listPointer: null,
}

const reducer = createReducer({}, initialState);

reducer.on(actions.startSelectPointer.success, (state, {type, listPointer}) => ({
    ...state,
    listPointer: {
        ...state.listPointer,
        [type]: listPointer,
    },
}));

reducer.on(actions.selectPointer.success, (state, {pointer, type, listPointer}) => ({
    ...state,
    selectedPointer: [
        ...state.selectedPointer,
        pointer,
    ],
    listPointer: {
        ...state.listPointer,
        [type]: listPointer,
    },
    currentPointer: pointer,
}));

export default reducer;