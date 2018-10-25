import {
    createStackNavigator,
} from 'react-navigation';

import Home from "../screens/Home";
import SelectPointer from "../../pointers/SelectPointer";
import React from "react";

const StackNavigator = createStackNavigator({
    Home: { screen: Home },
    SelectPointer: { screen: props => <SelectPointer {...props.navigation.state.params}/> },
});

export default StackNavigator;