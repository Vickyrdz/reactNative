import { StyleSheet, View, TextInput, Pressable, Text} from 'react-native';


const AddProduct = ({newTitle, handleAdd, setnewTitle}) => {
    return (
        <View style={styles.firstBlockContainer}>
          <TextInput 
            style={styles.input}
            placeholder='Product Name..'
            value={newTitle}
            onChangeText={(t) => setnewTitle(t)}/>
          <Pressable onPress={handleAdd} style={styles.button}>
            <Text style={styles.textAdd} >Add</Text>
          </Pressable>
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
        textAlign: 'center',
        borderColor: "#9ca3af",
        color: "#9ca3af",
        borderRadius: 15,
        padding: "0.125rem"
      }, 
      button: {
        backgroundColor: "#4169e1",
        width: 35,
        justifyContent: 'center', 
        alignItems: 'center',
        borderRadius: 7
      },
      textAdd: {
        color: "white", 
        fontWeight: 'bold'
      }
}); 


export default AddProduct; 