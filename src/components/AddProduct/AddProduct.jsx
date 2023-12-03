import { StyleSheet, View, TextInput, Button} from 'react-native';


const AddProduct = ({newTitle, handleAdd, setnewTitle}) => {
    return (
        <View style={styles.firstBlockContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Product Name..'
            value={newTitle}
            onChangeText={(t) => setnewTitle(t)}/>
          <Button title="Add" onPress={handleAdd}/>
        </View>
    )
}


const styles = StyleSheet.create({

      firstBlockContainer: {
        flexDirection: 'row',
        alignSelf: 'stretch', 
        justifyContent: 'space-around',
        marginTop: "10%"
    
      },
      input: {
        borderWidth: 1,
        paddingHorizontal: 10, 
        paddingVertical: 5,
        width: 180,
      }, 
}); 


export default AddProduct; 