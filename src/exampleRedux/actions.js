import { createActionCreator } from "../store/asyncAction";


const actionCreator = createActionCreator('EXAMPLE');
const pressButton = actionCreator('PRESS_BUTTON')

export default {
    pressButton,
}
