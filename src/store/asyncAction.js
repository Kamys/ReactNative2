import { createAction } from "redux-act";

export const createActionCreator = moduleName => actionName => ({
    request: createAction(`${moduleName}_${actionName}_REQUEST`),
    success: createAction(`${moduleName}_${actionName}_SUCCESS`),
    failure: createAction(`${moduleName}_${actionName}_FAILURE`),
})