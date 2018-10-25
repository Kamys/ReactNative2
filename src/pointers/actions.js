import { createActionCreator } from "../store/asyncAction";


const actionCreator = createActionCreator('SCHEDULE_POINTER');

const startSelectPointer = actionCreator('START_SELECT_POINTER')
const selectPointer = actionCreator('SELECT_POINTER')

export default {
    selectPointer,
    startSelectPointer,
}
