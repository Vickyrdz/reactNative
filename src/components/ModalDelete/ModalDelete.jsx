import { View, Button, Text, Modal, StyleSheet } from 'react-native';


const ModalDelete = ({productSelected, setModalVisible, modalVisible, handleDelete}) => {


        return (
            <Modal visible={modalVisible}>
                <View>
                    <Text>"{productSelected.title}"</Text>
                    <Text>Are you sure you want to delete this product?</Text>
                    <Button title='Delete' onPress={handleDelete} />
                    <Button title='Close' onPress={() => setModalVisible(false)} />
                </View>
            </Modal>
        )
}



export default ModalDelete