import React from "react";
import { Text } from "react-native";
import { Icon, Left, List, ListItem, Right } from "native-base";

class ItemsList extends React.Component {

    state = {
        selectedId: null,
    }

    static defaultProps = {
        items: [],
        onSelectItem: () => {},
    }

    onSelect = item => () => {
        this.setState({
            selectedId: item.id,
        });
        this.props.onSelectItem(item);
    }


    render() {
        const { selectedId } = this.state;
        const { items } = this.props;
        console.log('ItemList items: ', items);
        return (
            <List>
                {
                    items.map(item => (
                        <ListItem
                            key={item.id}
                            onPress={this.onSelect(item)}
                            selected={selectedId === item.id}
                        >
                            <Left>
                                <Text>{item.id}</Text>
                            </Left>
                            <Right>
                                <Icon name="arrow-forward"/>
                            </Right>
                        </ListItem>
                    ))
                }
            </List>
        );
    }
}

export default ItemsList;