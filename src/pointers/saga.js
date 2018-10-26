import { all, call, put, takeEvery } from 'redux-saga/effects';

import actions from "./actions";
import api from "../api";
import { PointerType } from "./constants";
import NavigationService from "../app/navigation/NavigationService";

function* selectPointer(action) {
    const { payload } = action;
    if (payload.pointer.type === PointerType.FACULTIES) {
        yield call(loadingSpecialty, action);
        return;
    }
    if (payload.pointer.type === PointerType.SPECIALTIES) {
        yield call(loadingCourses, action);
        return;
    }
}

function* startSelectPointer() {
    const faculties = yield call(api.getFaculties);
    const type = PointerType.FACULTIES;
    const payload = {
        type,
        listPointer: faculties,
    }
    const navigateProps = {
        key: type,
        routeName: 'SelectPointer',
        params: {
            title: 'Faculties',
            items: faculties,
        }
    }
    yield put(actions.startSelectPointer.success(payload));
    yield call(NavigationService.navigate, navigateProps);
    yield call(NavigationService.navigate, navigateProps);
}

function* loadingSpecialty(action) {
    const specialties = yield call(api.getSpecialty, action.payload.pointer.id);
    const type = PointerType.SPECIALTIES;
    const payload = {
        pointer: action.pointer,
        type,
        listPointer: specialties,
    }
    const navigateProps = {
        key: type,
        routeName: 'SelectPointer',
        params: {
            title: 'Specialty',
            items: specialties,
        },
    }
    yield put(actions.selectPointer.success(payload));
    yield call(NavigationService.navigate, navigateProps);
}

function* loadingCourses(action) {
    const courses = yield call(api.getCourses, action.payload.pointer.id);
    const type = PointerType.COURSES;
    const payload = {
        pointer: action.pointer,
        type,
        listPointer: courses,
    }
    const navigateProps = {
        key: type,
        routeName: 'SelectPointer',
        params: {
            title: 'Courses',
            items: courses,
        },
    }
    yield put(actions.selectPointer.success(payload));
    yield call(NavigationService.navigate, navigateProps);
}

function* watcher() {
    yield all([
        takeEvery(actions.selectPointer.request, selectPointer),
        takeEvery(actions.startSelectPointer.request, startSelectPointer),
    ]);
}

export default watcher;