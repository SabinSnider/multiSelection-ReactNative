import React from 'react';
import {
  Pressable,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
const Data = [
  {name: 'Manjeet', id: '1'},
  {name: 'Yubraj', id: '3'},
  {name: 'Lopsang', id: '2'},
  {name: 'Bhoos', id: '4'},
  {name: 'Sabin', id: '5'},
]


function App(): React.JSX.Element {

  return (
    <SafeAreaView >
     <Pressable>
      
     </Pressable>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 ListItem: {
  backgroundColor: '#252628',
  marginBottom: 10,
  borderRadius: 5,
  overflow: 'hidden',
  },
 overlay: {
  position: 'absolute',
  top: 0,
  left: 0,
  width: '100%',
  height: '100%',
  backgroundColor: 'rgba(255,0,0,0.5)'
 }
});

export default App;
