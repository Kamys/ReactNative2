import React from "react";
import { AppLoading, Font } from "expo";

export default class AssetsLoader extends React.Component {
    state = {
        loading: true,
    }

    loadResourcesAsync = async () => {
        return Promise.all([
            Font.loadAsync({
                'Roboto_medium': require('../../../node_modules/native-base/Fonts/Roboto_medium.ttf'),
            }),
        ]);
    };

    handleLoadingError = error => {
        console.warn(error);
    };

    handleFinishLoading = () => {
        this.setState({ loading: false });
    };

    render() {
        const { loading } = this.state;

        if (loading) {
            return (
                <AppLoading
                    startAsync={this.loadResourcesAsync}
                    onError={this.handleLoadingError}
                    onFinish={this.handleFinishLoading}
                />
            )
        }

        const { children } = this.props;
        return children;
    }
}