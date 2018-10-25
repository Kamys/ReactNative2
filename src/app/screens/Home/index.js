import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default class Root extends React.Component {
    render() {
        return (
            <View style={styles.inCenter}>
                <Text>New redux app v2</Text>
                <Button title='Dispatch action' primary/>
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