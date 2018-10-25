import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Toggle from "../../../exampleRedux/components/Toggler";

class Home extends React.Component {
    render() {
        return (
            <View style={styles.inCenter}>
                <Text>New redux app v4</Text>
                <Toggle/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inCenter: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Home;