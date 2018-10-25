import React from "react";
import { Button, Text, View } from "react-native";
import actions from "../actions";
import { connect } from "react-redux";

class Toggle extends React.Component {
    render() {
        const { isButtonOn, pressButton } = this.props;

        return (
            <View>
                <Button
                    title='Dispatch action'
                    onPress={pressButton}
                    primary
                />
                {
                    isButtonOn &&
                    <Text>Yes, is button on!</Text>
                }
            </View>
        );
    }
}

const mapStateToProps = state => ({
    isButtonOn: state.exampleRedux.isButtonOn,
})

const mapDispatchToProps = dispatch => ({
    pressButton: () => dispatch(actions.pressButton.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);