import React from "react";
import { Header, Left, Right, Body, Icon, Button, Title } from 'native-base';
import NavigationService from '../navigation/NavigationService';

const THeader = (
{
    title,
}) =>
(
    <Header>
        <Left>
            <Button onPress={() => NavigationService.goBack()} transparent>
                <Icon name='arrow-back'/>
            </Button>
        </Left>
        <Body>
            <Title>{title}</Title>
        </Body>
        <Right>
            <Button transparent>
                <Icon name='menu'/>
            </Button>
        </Right>
    </Header>
)

export default THeader;