import React from "react";
import NavigationService from "./NavigationService";
import StackNavigator from "./StackNavigator";



class Navigation extends React.Component {

    componentDidMount() {
        NavigationService.setNavigator(this.navigator);
    }

    onInitNavigator = nav => {
        this.navigator = nav;
    }

    render() {
        return (
            <StackNavigator ref={this.onInitNavigator}/>
        );
    }
}

export default Navigation;