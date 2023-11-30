import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, FlatList, Modal } from 'react-native';
import uuid from 'react-native-uuid';


export default function App() {

  const [newTitle, setnewTitle] = useState(""); 
  const [newPrice, setNewPrice] = useState(""); 
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 
  const [productSelected, setProductSelected] = useState([]);


  const handleAdd = () => {

    const productDescription = {
      id: uuid.v4(),
      title: newTitle, 
      price: newPrice
    };

    setProducts(current => [...current, productDescription])
    setnewTitle("");
    setNewPrice("");
  };
  

  const handleModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }; 


  const handleDelete = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id)); 
    setModalVisible(false); 
  }





  return (
    <View style={styles.container}>
      <View style={styles.firstBlockContainer}>
        <TextInput 
          style={styles.input}
          placeholder='Product Name..'
          value={newTitle}
          onChangeText={(t) => setnewTitle(t)}/>
        <TextInput 
          style={styles.input}
          placeholder='Price..'
          value={newPrice}
          onChangeText={(t) => setNewPrice(t)}/>
        <Button title="Add" onPress={handleAdd}/>
      </View>
      <View style={styles.itemsContainer}>
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
      </View>
      <Modal
        visible={modalVisible}>
          <View>
            <Text>"{productSelected.title} {productSelected.price}"</Text>
            <Text>Are you sure you want to delete this product?</Text>
            <Button title='Delete' onPress={handleDelete}/>
            <Button title='Close' onPress={()=> setModalVisible(false)}/>
          </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "start",
    alignItems: "center",
    marginTop: 50,
    
  },
  input: {
    borderWidth: 1,
    paddingHorizontal: 10, 
    paddingVertical: 5,
    width: 180,
  }, 
  firstBlockContainer: {
    flexDirection: 'row',
    alignSelf: 'stretch', 
    justifyContent: 'space-around'
  },
  itemsContainer:{
    width: "100%"
  },
  items: {
    flexDirection: 'row',
    padding: 10, 
    margin: 10,
    justifyContent: 'space-around',
    alignItems: 'center',
    borderWidth: 1,
    marginTop: 30,

  }
});
