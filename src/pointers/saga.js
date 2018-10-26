import { all, call, put, takeEvery } from 'redux-saga/effects';

import actions from "./actions";
import api from "../api";
import { PointerType } from "./constants";
import NavigationService from "../app/navigation/NavigationService";

function* selectPointer(action) {
    console.log('action: ', action);
    const { payload } = action;
    if (payload.pointer.type === PointerType.FACULTIES) {
        yield call(loadingSpecialties, action);
        return;
    }
}

function* startSelectPointer() {
    const faculties = yield call(api.getFaculties);
    const payload = {
        type: PointerType.FACULTIES,
        listPointer: faculties,
    }
    const navigateProps = {
        routeName: 'SelectPointer',
        params: {
            title: 'Faculties',
            items: faculties,
        }
    }
    yield put(actions.startSelectPointer.success(payload));
    yield call(NavigationService.navigate, navigateProps);
}

function* loadingSpecialties(action) {
    const specialties = yield call(api.getSpecialties, action.pointer.id);
    const payload = {
        pointer: action.pointer,
        type: PointerType.SPECIALTIES,
        listPointer: specialties,
    }
    const navigateProps = {
        routeName: 'SelectPointer',
        title: 'Specialties',
        items: specialties,
    }
    yield put(actions.selectPointer.success(payload));
    yield put(NavigationActions.navigate(navigateProps));
}

function* watcher() {
    yield all([
        takeEvery(actions.selectPointer.request, selectPointer),
        takeEvery(actions.startSelectPointer.request, startSelectPointer),
    ]);
}

export default [watcher];