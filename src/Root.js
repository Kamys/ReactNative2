import React from 'react';
import { registerRootComponent } from "expo";
import { Provider } from 'react-redux';

import store from './store';
import Home from './app/screens/Home';

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <Home/>
            </Provider>
        );
    }
}

registerRootComponent(Root);