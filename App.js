import { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';
import uuid from 'react-native-uuid';


export default function App() {

  const [newTitle, setnewTitle] = useState(""); 
  const [newPrice, setNewPrice] = useState(""); 
  const [products, setProducts] = useState([]);


  const handleAdd = () => {

    const productDescription = {
      id: uuid.v4(),
      title: newTitle, 
      price: newPrice
    };

    setProducts(current => [...current, productDescription])
    setnewTitle("");
    setNewPrice("");
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
        {
          products.map(product => 
            <View style={styles.items} key={product.id}>
              <Text>{product.title}</Text>
              <Text>{product.price}</Text>
              <Button title="Delete"/>
            </View>
          )
        }
      </View>
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
