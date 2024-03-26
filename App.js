import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Linking, SafeAreaView, TextInput, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";


function HomeScreen({ navigation }) {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./assets/medisign.png')}
          />
          <Text style={styles.title}>MediSign</Text>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.title}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <View style = {styles.container}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Questions')}>
          <Text style={styles.title}>Questions          </Text> 
          <Text style={styles.title}>?</Text> 
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Symptoms')}>
          <Text style={styles.title}>Symptoms</Text>
        </TouchableOpacity>

        <TouchableOpacity style = {styles.frontPanelButtons}
          title = 'Responses'
          onPress={() => navigation.navigate('Responses')}>
          <Text style={styles.title}>Responses</Text>
        </TouchableOpacity>

        <SafeAreaView style = {styles.frontPanelButtons}>
            <TextInput
              style={styles.input}
              value={"Search for a word: "}
            />
          </SafeAreaView>
      </View>
    </View>
  );
}


function QuestionsScreen({navigation}) {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  return (
    <View style = {styles.container}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.title}>Return to HomeScreen</Text> 
        </TouchableOpacity>
      </View>
  );
}

function SymptomsScreen({navigation}) {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  return (
    <View style = {styles.container}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.title}>Return to HomeScreen</Text> 
        </TouchableOpacity>
      </View>
  );
}

function ResponsesScreen({navigation}) {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  return (
    <View style = {styles.container}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.title}>Return to HomeScreen</Text> 
        </TouchableOpacity>
      </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Questions" component={QuestionsScreen} />
        <Stack.Screen name="Symptoms" component={SymptomsScreen} />
        <Stack.Screen name="Responses" component={ResponsesScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#071221',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginTop: 50,
    width: '100%',
  },
  
  logo: {
    width: 100,
    resizeMode: 'cover',
  },

  title: {
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 20,
    
    paddingHorizontal: 10,
  },

  circle: {
    fontFamily: 'JetBrainsMono', 
    fontSize: 20,
    fontWeight: 'bold',
  },

  frontPanelButtons: {
    backgroundColor: '#313945',
    textDecorationColor: '#ECECEC',
    textAlign: 'center',
    width: 375,
    height: 70,
    marginTop: 20, 
    marginBottom: 40,
    marginLeft: 40, 
    marginRight: 40, 
    paddingTop:20,
    paddingBottom:20,
    borderRadius:10,
    borderWidth: 1,
    borderColor: '#6F7F97',
    justifyContent: 'center',
    flexDirection: 'row',
  },

  input: {
    backgroundColor: '#313945',
    color:'#'
  }
});
