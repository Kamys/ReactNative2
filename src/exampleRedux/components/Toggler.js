import React from "react";
import { Button, View } from "react-native";
import actions from "../../pointers/actions";
import { connect } from "react-redux";

class Toggle extends React.Component {
    render() {
        const { startSelectPointer } = this.props;

        return (
            <View>
                <Button
                    title='Start'
                    onPress={() => startSelectPointer()}
                    primary
                />
            </View>
        );
    }
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = dispatch => ({
    startSelectPointer: () => dispatch(actions.startSelectPointer.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Toggle);