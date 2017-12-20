import React from 'react';
import {
    Button,
     Text,
     View,
     TouchableHighlight,
     Image 
    } 
     from 'react-native';


export default class App extends React.Component {

    
    static navigationOptions = {
            alignItems: 'center',
           };



    render() {
  const {navigate} = this.props.navigation;
  return (
    <View style={{
      flex: 1,
     
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    }}>




<Text style={{    color:'black',fontSize:20}}>Pasirinkite ka norite treniruoti:</Text>
  <Image style={{width: 120, height: 120,}}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvm-FFgAlFG5cHqN7EyYiEvV8HbLkf_nwqnD-yZfjyznegwnxX7A'}}

      />  

<Button title="Krutine" onPress={ ()=> navigate('Krutine')}/>



  


  <Image style={{width: 120, height: 120,}}
      source={{uri:'https://thumb1.shutterstock.com/display_pic_with_logo/2828032/661412716/stock-vector-woman-legs-icon-wax-vector-background-661412716.jpg'}}
      />      
<Button title="Kojos" onPress={ ()=> navigate('Kojos')}/>

  </View>
  
  );
}
}