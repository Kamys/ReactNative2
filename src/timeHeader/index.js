import React from "react";
import { Text, View, Picker } from "react-native";
import { Container } from 'native-base';
import { Row, Grid, Col } from 'react-native-easy-grid';

import THeader from "../app/components/THeader";
import TDatePicker from "./TDataPiker";

const Select = () => (
    <Picker
        selectedValue={2}
        style={{ height: 50, width: 50 }}
        onValueChange={console.log}
    >
        <Picker.Item label="2" value="2"/>
        <Picker.Item label="3" value="3"/>
        <Picker.Item label="4" value="4"/>
        <Picker.Item label="5" value="5"/>
    </Picker>

)

class TimeHeader extends React.Component {
    render() {

        return (
            <Container>
                <THeader/>
                <Grid>
                    <Row size={1}>
                        <Grid>
                            <Row
                                style={{
                                    justifyContent: 'space-evenly',
                                    alignItems: 'center'
                                }}
                                size={1}
                            >
                                <Text>When:</Text>
                                <TDatePicker/>
                                <Text>Pax:</Text>
                                <Select/>
                            </Row>
                            <Row size={1}/>
                        </Grid>
                    </Row>
                    <Row style={{ backgroundColor: '#5959af' }} size={6}/>
                </Grid>
            </Container>
        );
    }
}

export default TimeHeader;