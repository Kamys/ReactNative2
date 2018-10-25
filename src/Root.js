import React from 'react';
import { registerRootComponent } from "expo";
import { Provider } from 'react-redux';

import Home from './app/screens/Home';
import AssetsLoader from "./app/components/AssetsLoader";

export default class Root extends React.Component {
    render() {
        return (
            <AssetsLoader>
                <Home/>
            </AssetsLoader>
        );
    }
}

registerRootComponent(Root);