import React from "react";
import { Header, Left, Right, Body, Icon, Button, Title } from 'native-base';
import NavigationService from '../navigation/NavigationService';
import { Text } from "react-native";

const THeader = (
{
    title,
}) =>
(
    <Header>
        <Left>
            <Button transparent>
                <Icon name='menu'/>
            </Button>
        </Left>
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right>
            <Text>Mr. John Smith</Text>
        </Right>
    </Header>
)

export default THeader;