import { FlatList, View, Text, Button, StyleSheet} from "react-native";

const ItemList = ({products, handleModal}) => {
    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({item}) => 
              <View style={styles.items}>
              <Text>{item.title}</Text>
              <Text>{item.price}</Text>
              <Button title="Delete" onPress={()=> handleModal(item)} />
            </View>
            }/>
    )
}

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        padding: 10, 
        margin: 10,
        justifyContent: 'space-around',
        alignItems: 'center',
        borderWidth: 1,
        marginTop: 30,
    }
})




export default ItemList; 