import { NavigationActions } from 'react-navigation';

const config = {};

function setNavigator(nav) {
    if (nav) {
        config.navigator = nav;
    }
}

function navigate(params) {
    if (config.navigator && params) {
        let action = NavigationActions.navigate(params);
        config.navigator.dispatch(action);
    }
}

function goBack() {
    if (config.navigator) {
        let action = NavigationActions.back({});
        config.navigator.dispatch(action);
    }
}

export default {
    setNavigator,
    navigate,
    goBack,
}