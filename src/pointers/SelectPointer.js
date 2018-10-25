import React from 'react';
import { Container } from 'native-base';

import THeader from "../app/components/THeader";
import ItemsList from "./components/ItemsList";
import actions from "./actions";
import connect from "react-redux/es/connect/connect";

class SelectPointer extends React.Component {

    static defaultProps = {
        title: null,
    }

    render() {
        const { title, items, selectPointer } = this.props;
        console.log('SElectPointer this.props: ', this.props);

        return (
            <Container>
                <THeader title={title}/>
                <ItemsList items={items} onSelectItem={selectPointer}/>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    pointers: state.pointers,
})

const mapDispatchToProps = dispatch => ({
    selectPointer: () => dispatch(actions.selectPointer.request()),
})

export default connect(mapStateToProps, mapDispatchToProps)(SelectPointer);