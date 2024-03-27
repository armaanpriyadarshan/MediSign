import { StyleSheet, Text, View, Image, Alert, TouchableOpacity, Linking, SafeAreaView, TextInput, Button, ScrollView, StatusBar, ImageBackgroun } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";


const Stack = createNativeStackNavigator();

export default function App() {
  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Questions" component={Questions} />
        <Stack.Screen name="Symptoms" component={Symptoms} />
        <Stack.Screen name="Responses" component={Responses} />
        <Stack.Screen name="Pain" component={PainScale} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./assets/medisign.png')}
          />
          <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.title}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.text}>MediSign</Text>   
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <View style = {styles.container}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Questions')}>
          <Text style={styles.text}>Questions</Text> 
          <Image
            style={styles.circle}
            source={require('./assets/question.png')}
          />
        </TouchableOpacity>
        
        <TouchableOpacity style = {styles.frontPanelButtons}
          onPress={() => navigation.navigate('Symptoms')}>
          <Text style={styles.text}>Symptoms</Text>
          <Image
            style={styles.circle}
            source={require('./assets/thermometer.png')}
          />
        </TouchableOpacity>

        <TouchableOpacity style = {styles.frontPanelButtons}
          title = 'Responses'
          onPress={() => navigation.navigate('Responses')}>
          <Text style={styles.text}>Responses</Text>
          <Image
            style={styles.circle}
            source={require('./assets/speechbubble.png')}
          />
        </TouchableOpacity>

        <SafeAreaView>
            <TextInput
              style={styles.input}
              placeholder="Search for a word: "
              placeholderTextColor='#989CA2'
            />
          </SafeAreaView>
      </View>
    </View>
  );
}

function Questions({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Question</Text> 
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function Symptoms({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Symptom</Text> 
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function Responses({navigation}) {
  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <ScrollView style={styles.scrollView}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Response</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Pain')}>
          <Text style={styles.phrase}>Pain Scale</Text> 
        </TouchableOpacity>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          style = {styles.list}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.phrase}>Body Chart</Text> 
        </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function PainScale({ navigation }) {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('./assets/painscale.jpg')}
      />
  </View>
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
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginHorizontal: 20,
    borderRadius: 10,
  },

  text: {
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 20,
    paddingHorizontal: 10,
  },
  
  icon: {
    color: '#ECECEC',
    fontWeight: 'bold',
    fontFamily: 'JetBrainsMono', 
    fontSize: 36,
  },
  
  circle: {
    backgroundColor: "#232B35",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },

  frontPanelButtons: {
    backgroundColor: '#313945',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    width: '90%',
    height: 80,
    margin: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6F7F97',
  },

  input: {
    backgroundColor: '#313945',
    fontFamily: 'JetBrainsMono',
    fontSize: 16,
    padding: 10,
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6F7F97',
  },
    
   list:{
    backgroundColor: '#313945',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 375,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6F7F97',
  },

  phrase:{
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
