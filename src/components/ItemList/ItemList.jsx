import { FlatList, View, Text, Button, StyleSheet, Pressable } from "react-native";

const ItemList = ({ products, handleModal, setProducts }) => {

    const handleSetCompleted = (id) => {
        const updatedList = products.map(item => {
            if (item.id === id) {
                return {
                    ...item, completed: !item.completed
                }
            }
            return item;
        })
        setProducts(updatedList);
    };


    return (
        <FlatList
            data={products}
            keyExtractor={item => item.id}
            renderItem={({ item }) =>
                <View>
                    <View style={styles.items}>
                        <View style={styles.selectAndTitle}>
                                <Pressable
                                    onPress={() => handleSetCompleted(item.id)}
                                    style={item.completed ? styles.selected : styles.notSelected}>
                                    {item.completed ?
                                        <View>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#0b8b36" >
                                                <path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clip-rule="evenodd" />
                                            </svg>
                                        </View> : null
                                    }
                                </Pressable>
                            <Text style={styles.title}>{item.title}</Text>
                        </View>
                        <Pressable style={styles.deleteButton} onPress={()=> handleModal(item)}>
                                <svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4169e1">
                                    <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
                                </svg>
                            </Pressable>
                    </View>
                    <View style={styles.divider}></View>
                </View>
            } />
    )
}

const styles = StyleSheet.create({
    items: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        marginTop: 30,
        width: "60%",
        alignSelf: "center"
    },
    selectAndTitle: {
        flexDirection: "row",
        gap: 15,
        width: "70%"
    },
    selected: {
        height: 20,
        width: 20,
        borderColor: "red",
        borderRadius: 100,
        cursor: "pointer"
    },
    notSelected: {
        cursor: "pointer",
        height: 20,
        width: 20,
        border: "solid 1px",
        borderColor: "#9ca3af",
        color:"#9ca3af",
        backgroundColor: "#444444",
        borderRadius: 100,
        cursor: "pointer",
    },
    divider: {
        color:"#9ca3af",
        backgroundColor: "#9ca3af",
        height: 1,
        width: "60%",
        alignSelf: "center",
        marginTop: 10
    },
    title:{
        color: "white"
    },
    deleteButton: {
        width: "30%",
        height: 20,
        alignItems: "flex-end"
    }

})




export default ItemList; 