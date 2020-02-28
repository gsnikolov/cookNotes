import React, {useState, useEffect} from 'react';
import {Container, Header, Left, Button, Icon, Body, Title} from 'native-base';
import MenuDrawer from './MenuDrawer'

const Overview = () => {
    const [count, setCount] = useState(1);
    const [openDrawer, setOpenDrawer] = useState(false)

    const handleOnPress = () => {
        setOpenDrawer(!openDrawer)
    }

    return (
        <Container>
            <Header>
                <Left>
                    <Button onPress={() => handleOnPress()} transparent>
                        <Icon name='menu'/>
                    </Button>
                </Left>
                <Body>
                    <Title>{count}</Title>
                </Body>
            </Header>
            <MenuDrawer open={openDrawer} />
        </Container>
    )
}

export default Overview