import React from "react";
import { Container, Header, Left, Right, Body, Icon, Button, Title } from 'native-base';

const THeader = (
{
    title,
}) =>
(
    <Container>
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
    </Container>
)

export default THeader;