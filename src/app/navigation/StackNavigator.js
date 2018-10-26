import React from "react";
import { createStackNavigator } from 'react-navigation';

import Home from "../screens/Home";
import SelectPointer from "../../pointers/SelectPointer";

const screensOptions = {
    Home: {
        screen: Home
    },
    SelectPointer: {
        screen: props => <SelectPointer {...props.navigation.state.params}/>
    },
}

const navigationOptions = {
    headerMode: 'none',
};

export default createStackNavigator(screensOptions, navigationOptions);