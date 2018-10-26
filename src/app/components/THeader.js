import React from "react";
import { Header, Left, Right, Body, Icon, Button, Title } from 'native-base';

const THeader = (
{
    title,
}) =>
(
    <Header>
        <Left>
            <Button transparent>
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