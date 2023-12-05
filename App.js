import { useState } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import uuid from 'react-native-uuid';
import ModalDelete from './src/components/ModalDelete/ModalDelete';
import AddProduct from './src/components/AddProduct/AddProduct';
import ItemList from './src/components/ItemList/ItemList';



export default function App() {

  const [newTitle, setnewTitle] = useState(""); 
  const [products, setProducts] = useState([]);
  const [modalVisible, setModalVisible] = useState(false); 
  const [productSelected, setProductSelected] = useState([]);


  const handleAdd = () => {

    const productDescription = {
      id: uuid.v4(),
      title: newTitle, 
      completed: false,
    };

    setProducts(current => [...current, productDescription])
    setnewTitle("");
  };
  

  const handleModal = (item) => {
    setProductSelected(item)
    setModalVisible(true)
  }; 


  const handleDelete = () => {
    setProducts(current => current.filter(product => product.id !== productSelected.id)); 
    setModalVisible(false); 
  }; 



  return (
    <View style={styles.container}>
      <View style={styles.containerNewShoppList}>
        <View style={styles.containerTitle}>
          <Text style={styles.title}>
            MyListTask
          </Text>
        </View>
        <AddProduct 
          newTitle={newTitle} 
          handleAdd={handleAdd}
          setnewTitle={setnewTitle}
        />
        <View style={styles.itemsContainer}>
          <ItemList 
            products={products} 
            handleModal={handleModal}
            setProducts={setProducts} 
            productDescription={handleAdd}

          />
        </View>
        <ModalDelete 
          productSelected = {productSelected}
          setModalVisible = {setModalVisible}
          modalVisible = {modalVisible}
          handleDelete = {handleDelete}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c2c2c"
  },
  containerNewShoppList: {
    backgroundColor: '#444444',
    justifyContent: "start",
    alignItems: "center",
    marginTop: 90,
    height: "80%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 20,
    
  },
  containerTitle:{
    backgroundColor:"#4169e1",
    width: 150,
    height: 50,
    borderRadius: 50,
    justifyContent: "center",
    position: "relative",
    bottom: 20,
  },
  title: {
    color: "white",
    fontSize: 24,
    fontWeight: "bold",
    alignSelf: "center",
 
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
