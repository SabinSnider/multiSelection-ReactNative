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
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
