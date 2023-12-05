import { View, Button, Text, Modal, StyleSheet, Pressable } from 'react-native';


const ModalDelete = ({productSelected, setModalVisible, modalVisible, handleDelete}) => {


        return (
                <Modal visible={modalVisible} >
                    <View style={styles.container}>
                        <View style={styles.containerModal}>
                            <Text style={styles.texts} >"{productSelected.title}"</Text>
                            <Text style={styles.texts}>Are you sure you want to delete this product?</Text>
                            <View style={styles.buttonContainer}>
                                <Pressable onPress={handleDelete} style={styles.deleteButton}>
                                    <Text style={styles.textButtons}>
                                        Delete
                                    </Text>
                                </Pressable>
                                <Pressable onPress={() => setModalVisible(false)} style={styles.closeButton}>
                                    <Text style={styles.textButtons}>
                                        Close
                                    </Text>
                                </Pressable>
                            </View>
                        </View>
                    </View>
                </Modal>           
        )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#2c2c2c",
        height: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    containerModal: {
        width: "80%",
        height: 100,
        backgroundColor: "#444444",
        marginBottom: 20,
        alignItems: 'center',
        borderRadius: 20
    },
    texts: {
        color: "#9ca3af",
        fontWeight: 'bold',
        textAlign: 'center'
    },
    deleteButton: {
        height: 25,
        width: 70,
        backgroundColor: "#cd5c5c",
        borderRadius: 15,
        justifyContent: 'center'
    },
    closeButton: {
        height: 25,
        width: 70,
        backgroundColor: "#4169e1",
        borderRadius: 15,
        justifyContent: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
        padding: 20
    },
    textButtons: {
        color: "white",
        fontWeight: 'bold',
        textAlign: 'center'
    }
}); 

export default ModalDelete