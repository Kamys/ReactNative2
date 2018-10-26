import React from 'react';
import { registerRootComponent } from "expo";
import { Provider } from 'react-redux';
import store from './store';

import AssetsLoader from "./app/components/AssetsLoader";
import Navigation from "./app/navigation";

export default class Root extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <AssetsLoader>
                    <AssetsLoader>
                        <Navigation/>
                    </AssetsLoader>
                </AssetsLoader>
            </Provider>
        );
    }
}

registerRootComponent(Root);