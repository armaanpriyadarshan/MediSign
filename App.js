import { StyleSheet, Text, View, Image, Header, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image
            source={require('./assets/favicon.png')}
          />
          <Text style = {styles.title}>MediSign</Text>
          <Text style = {styles.title}>Contact Us</Text>
      </View>
    </View>
  );
}

const HomeScreen = ({navigation}) => {
  return (
    <View style={styles.header}>
      <Image
          source={require('./assets/logo.svg')}
        />
        <Text style = {styles.title}>MediSign</Text>
        <Text style = {styles.title}>Contact Us</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071221',
    alignItems: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#C0C0C0',
    marginTop: 50,
    width: '100%'
  },
  
  title: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    paddingHorizontal: 10
  }
});
