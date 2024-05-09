import React, { useEffect, useState, useCallback } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Linking, SafeAreaView, TextInput, ScrollView, ActivityIndicator, Button, Modal } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from "expo-font";
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, query, orderBy } from 'firebase/firestore';
import YoutubePlayer from 'react-native-youtube-iframe';


const firebaseConfig = {
  apiKey: "AIzaSyA-8MKSKaCkzMJ5YKfj7mk-4LUiEBiCwDI",
  authDomain: "medisign-e097b.firebaseapp.com",
  projectId: "medisign-e097b",
  storageBucket: "medisign-e097b.appspot.com",
  messagingSenderId: "713093819854",
  appId: "1:713093819854:web:b834b7b8ba373f3a0d8f9f",
  measurementId: "G-BD636MP8Q6"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

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
        <Stack.Screen name="Body" component={BodyChart} />
        <Stack.Screen name="Video" component={VideoDisplay} />
        <Stack.Screen name="SearchBar" component={SearchBar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


function Home({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  // useEffect(() => {
  //   const fetchData = async () => 
  // });

  useFonts({
    'JetBrainsMono': require('./assets/fonts/JetBrainsMono-Regular.ttf'),
  });

  const [showModal, setShowModal] = useState(false)
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
          <Image
            style={styles.logo}
            source={require('./assets/medisign.png')}
          />
          <TouchableOpacity style={styles.button} onPress={() => setShowModal(true)}>
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

        <TouchableOpacity style={styles.input} onPress={() => setShowModal(true)}>
            <Text style={styles.text}>Search for a word</Text>
        </TouchableOpacity>
          <Modal 
          transparent = {true}
          visible = {showModal}
          >
            <View style = {styles.centerView}>
              <View style={styles.modalView}>
              <ScrollView style={styles.scrollView}>
                <Text style = {styles.modalText}>Welcome to our app!</Text>
                <Text style = {styles.modalText}>There are a few things you should know as you start interacting with your deaf and hard of hearing patients:</Text>
                <Text style = {styles.modalTextTab}>Features. There are three buttons that take you to three separate pages.</Text>
                <Text style = {styles.modalTextDoubleTab}>a.	The “Questions” button takes you to a page with a list of commonly used questions.</Text>
                <Text style = {styles.modalTextDoubleTab}>b.	The “Symptoms” button takes you to a page with a list of common symptoms.</Text>
                <Text style = {styles.modalTextDoubleTab}>c.	The “Responses” button takes you to a page with potential responses to your questions. Additionally, the Responses page includes a “Body Chart” and “Pain Scale” feature. These buttons take you to a page with an anatomy chart and scale from 1 – 10 that patients can use to describe where and how much it hurts.</Text>
                <Text style = {styles.modalTextDoubleTab}>d.	Additionally, there is a search function on the home page you can use to find the word or phrase you are looking for quickly.</Text>
                <Text style = {styles.modalTextDoubleTab}>• On each of these pages, the scrollable list of questions, symptoms, and responses are buttons. You can click on the question/symptom/response you need, and it will take you to a screen that will display the sign(s) you need to use to communicate with your patient.</Text>
                <Text style = {styles.modalTextTab}>2)	ASL Tips. It’s important to remember that ASL is a very animated language. Since it isn’t spoken, you can’t use tone of voice to convey meaning. Instead, you use facial expressions. Body language and facial expressions are almost as important as the signs themselves. Here are a few quick tips to help you communicate:</Text>
                <Text style = {styles.modalTextDoubleTab}>a.	When asking a “what” or “how” question, make sure to furrow your eyebrows at the end of the question. When asking a yes or no question, make sure to raise your eyebrows. This will indicate not only that you are asking a question but also what type of question you are asking.</Text>
                <Text style = {styles.modalTextDoubleTab}>b.	There isn’t really a sign for “and” or “or”. Instead, move your body. For example, if you are asking, “do you like apples or bananas?”, you would sign the word “apple” on your left and then shift your position and sign the word “banana” on your right. </Text>
                <Text style = {styles.modalTextDoubleTab}>c.	Be expressive! Try to use your body to emphasize your meaning. It is important for communicating effectively. </Text>
                <Text style = {styles.modalTextDoubleTab}>Side note: if you are struggling with a sign, each word/phrase comes with a reference image, so if worse comes to worse, you can show your patient the image, and it’ll help explain your meaning. Don’t worry, you’ve got this!</Text>              
               </ScrollView>
               <Button title = 'Done' onPress={() => setShowModal(false)}/>
              </View>
            </View>
          </Modal>
          
      </View>
    </View>
  );
}

function SearchBar({ navigation, route }) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'questions'), orderBy('question')));
        const questionsData = querySnapshot.docs.map(doc => doc.data());
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);
  
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
          <Text style={styles.text}>Home</Text>   
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <TextInput style = {styles.frontPanelButtons} >
          </TextInput>
    </View>
  )
}

function Questions({navigation}) {
  const [questions, setQuestions] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'questions'), orderBy('question')));
        const questionsData = querySnapshot.docs.map(doc => doc.data());
        setQuestions(questionsData);
      } catch (error) {
        console.error("Error fetching questions: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchQuestions();
  }, []);

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
          <Text style={styles.text}>Home</Text>   
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.screenHeader}>
          <View style={styles.rectangle}>
            <Text style={styles.screenText}>Questions</Text>
          </View>
      </View>
      <SafeAreaView style={styles.container}>
        { loading ? (
          <ActivityIndicator size="large" color="#6F7F97" />
        ) : (
          <ScrollView style={styles.scrollView}>
            {questions.map((question, index) => (
              <TouchableOpacity
                key={index}
                style={styles.list}
                onPress={() => {
                  if (question.playList) {
                    navigation.navigate('Video', { text: question.question, playList: question.playList, referenceImage: question.referenceImage });
                  } else if (question.videoId) {
                    navigation.navigate('Video', { text: question.question, videoId: question.videoId, referenceImage: question.referenceImage, start: question.start, end: question.end });
                  } else {
                    console.error("Invalid display format: ", question);
                  }
                }}>
                <Text style={styles.phrase}>{question.question}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
          </SafeAreaView>
    </View>
  );
}

function Symptoms({navigation}) {
  const [symptoms, setSymptoms] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSymptoms = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'symptoms'), orderBy('symptom')));
        const symptomsData = querySnapshot.docs.map(doc => doc.data());
        setSymptoms(symptomsData);
      } catch (error) {
        console.error("Error fetching symptoms: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSymptoms();
  }, []);

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
          <Text style={styles.text}>Home</Text>   
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.screenHeader}>
          <View style={styles.rectangle}>
            <Text style={styles.screenText}>Symptoms</Text>
          </View>
      </View>
      <SafeAreaView style={styles.container}>
        { loading ? (
            <ActivityIndicator size="large" color="#6F7F97" />
          ) : (
          <ScrollView style={styles.scrollView}>
            {symptoms.map((symptom, index) => (
              <TouchableOpacity
                key={index}
                style={styles.list}
                onPress={() => {
                  if (symptom.playList) {
                    navigation.navigate('Video', { text: symptom.symptom, playList: symptom.playList, referenceImage: symptom.referenceImage });
                  } else if (symptom.videoId) {
                    navigation.navigate('Video', { text: symptom.symptom, videoId: symptom.videoId, referenceImage: symptom.referenceImage, start: symptom.start, end: symptom.end });
                  } else {
                    console.error("Invalid display format: ", symptom);
                  }
                }}>
                <Text style={styles.phrase}>{symptom.symptom}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        )}
      </SafeAreaView>
    </View>
  );
}

function Responses({navigation}) {
  const [responses, setResponses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResponses = async () => {
      try {
        const querySnapshot = await getDocs(query(collection(db, 'responses'), orderBy('response')));
        const responsesData = querySnapshot.docs.map(doc => doc.data());
        setResponses(responsesData);
      } catch (error) {
        console.error("Error fetching responses: ", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResponses();
  }, []);

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
          <Text style={styles.text}>Home</Text>
        </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={ () => Linking.openURL('mailto:apriyadarshan@wpi.edu') }>
            <Text style={styles.text}>Contact Us</Text>
          </TouchableOpacity>
      </View>
      <View style={styles.screenHeader}>
          <View style={styles.rectangle}>
            <Text style={styles.screenText}>Responses</Text>
          </View>
      </View>
      <SafeAreaView style={styles.container}>
        { loading ? (
              <ActivityIndicator size="large" color="#6F7F97" />
            ) : (
        <ScrollView style={styles.scrollView}>
          {responses.map((response, index) => (
            <TouchableOpacity
              key={index}
              style={styles.list}
              onPress={() => navigation.navigate('Video', { text: response.response, videoId: response.videoId })}
            >
              <Text style={styles.phrase}>{response.response}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}  
      </SafeAreaView>
      <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
            style = {styles.list}
            onPress={() => navigation.navigate('Pain')}>
            <Text style={styles.text}>Pain Scale</Text>   
          </TouchableOpacity>
          <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
            style = {styles.list}
            onPress={() => navigation.navigate('Body')}>
            <Text style={styles.text}>Body Chart</Text>   
          </TouchableOpacity>
    </View>
  );
}


function PainScale({ navigation }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
          <View style={styles.rectangle}>
            <Text style={styles.screenText}>Pain Scale</Text>
          </View>
      </View>
        { loading && <ActivityIndicator size="large" color="#6F7F97" />}
          <Image
            style={styles.picture}
            source={require('./assets/painscale.jpg')}
            onLoadEnd={() => setLoading(false)}
          />
  </View>
  );
}

function BodyChart({ navigation }) {
  const [loading, setLoading] = useState(true);

  return (
    <View style={styles.container}>
      <View style={styles.screenHeader}>
          <View style={styles.rectangle}>
            <Text style={styles.screenText}>Anatomy Chart</Text>
          </View>
      </View>
        { loading && <ActivityIndicator size="large" color="#6F7F97" />}
          <Image
            style={styles.picture}
            source={require('./assets/bodychart.jpg')}
            onLoadEnd={() => setLoading(false)}
          />
  </View>
  );
}

function VideoDisplay({ navigation, route }) {
  const { text, videoId, playList, referenceImage, start, end } = route.params;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {    
    if (state === "ended") {      
      setPlaying(false);      
    }  
  }, []);
  
  const togglePlaying = () => {
    setPlaying((prev) => !prev);
  }

  return (
    <View style={styles.container}>
            <View style={styles.headerwmargin}>
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
      <View style={styles.screenHeader}>
        <TouchableOpacity // Credit to Touchable Opacity Code from https://stackoverflow.com/questions/44798426/how-to-change-background-color-of-react-native-button
          onPress={() => navigation.navigate('Home')}>
          <Image
            style={styles.backarrow}
            source={require('./assets/backarrow.png')}
          /> 
          </TouchableOpacity>
        <Text style={styles.screenText}>{text}</Text>
      </View>
      <View style = {styles.videoDisplay}>
        {videoId ? (
          <YoutubePlayer
            height={400}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
            initialPlayerParams={{start: start, end: end}}
          />
        ) : (
          <YoutubePlayer
            height={400}
            play={playing}
            playList={playList}
            onChangeState={onStateChange}
          />
        )}
      </View>
      <View style={styles.screenHeader}>
        <Text style={styles.screenText}>Reference Image</Text>
      </View>
      <View>
        <Image
          style={styles.referenceImage}
          source={{uri: referenceImage}}
        />
      </View>
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
    marginBottom: 50,
    width: '100%',
  },

  headerwmargin: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: 100,
    width: '100%',
  },
    
  logo: {
    width: 70,
    height: 70,
    resizeMode: 'cover',
    marginHorizontal: 20,
    borderRadius: 10,
  },

  referenceImage: {
    textAlign: 'center',
    width: '100%',
    aspectRatio: 40/22,
    marginTop: 10,
  },

  text: {
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 16,
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
    marginTop: '10%',
    paddingVertical: 10,
    paddingLeft: 20,
    paddingRight: 50,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6F7F97',
  },
    
   list: {
    backgroundColor: '#313945',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 375,
    content: 'fill',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#6F7F97',
  },

  phrase: {
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 20,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
  picture: {
    width: '100%',
    height: '75%',
    backgroundColor: "#071221",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    resizeMode: 'contain',
    marginHorizontal: 20,
    borderRadius: 10,
  },

  videoDisplay: {
    width: '100%',
    aspectRatio: 40/22,
    backgroundColor: "#232B35",
    marginBottom: 10,
  },

  screenHeader: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },

  screenText: {
    color: '#ECECEC',
    fontFamily: 'JetBrainsMono', 
    fontSize: 30,
    paddingHorizontal: 10,
  },

  rectangle: {
    width: '90%',
    marginTop: 20,
    marginBottom: 20,
    height: 80,
    backgroundColor: "#6F7F97",
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  backarrow: {
    backgroundColor: "#FFFFFF",
    height: 60,
    width: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  centerView:{
    flex:1,
    justifyContent:'center',
    alignItems:"center"
  },

  modalText:{
    fontSize:20,
    marginBottom:10
  },

  modalTextTab:{
    fontSize:20,
    marginBottom:10,
    paddingLeft:30
  },

  modalTextDoubleTab:{
    fontSize:20,
    marginBottom:10,
    paddingLeft:60
  },

  modalView:{
    backgroundColor:'white',
    padding:35,
    borderRadius:20,
    shadowColor:'#000',
    elevation:5
  }
});