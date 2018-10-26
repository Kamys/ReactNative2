import React from 'react';
import { Container, Content } from 'native-base';

import THeader from "../app/components/THeader";
import ItemsList from "./components/ItemsList";
import actions from "./actions";
import connect from "react-redux/es/connect/connect";

class SelectPointer extends React.Component {

    static defaultProps = {
        title: null,
    }

    onSelect = item => {
        this.props.selectPointer({
            pointer: item,
        })
    }

    render() {
        const { title, items } = this.props;

        return (
            <Container>
                <THeader title={title}/>
                <Content>
                    <ItemsList items={items} onSelectItem={this.onSelect}/>
                </Content>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    pointers: state.pointers,
})

const mapDispatchToProps = dispatch => ({
    selectPointer: payload => dispatch(actions.selectPointer.request(payload)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectPointer);