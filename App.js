import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, Text, View, StyleSheet, Pressable, TextInput, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Barberprofile from './Screens/Barberprofile';
import MapScreen from './Screens/MapScreen';
import Servicechoice from './Screens/Servicechoice';
import { Provider } from "react-redux";
import { store } from './store';

// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

function HomeScreen({ navigation }) {
  return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80, position: 'relative', bottom: 110}} />
        <Text style={{ fontSize: 22, letterSpacing: 2, fontWeight: '500', bottom: 60}}>HOUSE CALL</Text>
        <Button
        style={{position: 'relative', bottom: 140}}
        title="Need a Trim?"
        onPress={() => navigation.navigate('Who are you?')}
        />
      </View>
  );
}

function Whoareyou({ navigation }) {

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, position: 'relative', bottom: 100, fontWeight: '500', letterSpacing: 2}}>Are You a Barber or a Client?</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Barber Entry')}>
      <Text style={styles.text}>Barber</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Client Entry')}>
      <Text style={styles.text}>Client</Text>
      </Pressable>

    </View>
);
}

function Barbersigninorlogin({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, position: 'relative', bottom: 100, fontWeight: '500', letterSpacing: 2}}>Sign Up or Login</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Barber Signup')}>
      <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Barber Login')}>
      <Text style={styles.text}>Login</Text>
      </Pressable>
      <Button title="Go Back" onPress={() => navigation.navigate('Who are you?')}></Button>

    </View>
  )
}

function Clientsigninorlogin({navigation}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{ fontSize: 20, position: 'relative', bottom: 100, fontWeight: '500', letterSpacing: 2, letterSpacing: 2}}>Sign Up or Login</Text>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Client Signup')}>
      <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Pressable style={styles.button} onPress={() => navigation.navigate('Client Login')}>
      <Text style={styles.text}>Login</Text>
      </Pressable>

    </View>
  )
}

function Barberlogin({navigation}) {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopView}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80, position: 'relative', top: 60}} />
      <Text style={{ fontSize: 26, position: 'relative', top: 80, fontWeight: '400', letterSpacing: 2}}>Login</Text>
      </View>
      <View style={styles.BottomView}>
        <Text style={{ bottom: 50, fontSize: 24, color: 'white', fontWeight: '400', letterSpacing: 2}}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Pressable style={styles.buttonLogin} onPress={() => navigation.navigate('Client Entry')}>
      <Text style={styles.text}>Login</Text>
      </Pressable>
      <Button title="Go back" color="white" onPress={() => navigation.navigate('Barber Entry')}></Button>
      </View>

    </View>
  )
}

function Barbersignup({navigation}) {

  const [name, onChangeName] = React.useState(null);
  const [age, onChangeAge] = React.useState(null);
  const [street, onChangeStreet] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [zipcode, onChangeZipcode] = React.useState(null);
  const [years, onChangeYears] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopViewSignup}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80, top: 60}} />
      <Text style={{ fontSize: 26, fontWeight: '500', letterSpacing: 2, top: 90}}>Sign Up</Text>
      </View>
      <View style={styles.BottomViewSignup}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Age"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeStreet}
        value={street}
        placeholder="Street Address"
      />
      <TextInput
        style={{height: 45, width: 120, magrin: 8, padding: 10, borderRadius: 20, backgroundColor: 'white', borderWidth: 1, flexDirection: 'row', right: 80}}
        onChangeText={onChangeCity}
        value={city}
        placeholder="City"
      />
      
      <TextInput
        style={{height: 45, width: 120, magrin: 8, padding: 10, borderRadius: 20, backgroundColor: 'white', borderWidth: 1, flexDirection: 'row', left: 80, bottom: 45}}
        onChangeText={onChangeZipcode}
        value={zipcode}
        placeholder="Zipcode"
      />
      <TextInput
        style={styles.smallInput}
        onChangeText={onChangeYears}
        value={years}
        placeholder="Years of Experience"
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Barber Create Account')}>
      <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      <Button title="Go back" color="white" onPress={() => navigation.navigate('Barber Entry')}></Button>
      </View>

    </View>
  )
}
function Barbercreateaccount({navigation}) {

  const [userName, onChangeUserName] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);
  const [confirmPassword, onChangeConfirmPassword] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopViewSignup}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80}} />
      <Text style={{ fontSize: 26, fontWeight: '500', letterSpacing: 2}}>Sign Up</Text>
      </View>
      <View style={styles.BottomViewSignup}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeConfirmPassword}
        value={confirmPassword}
        secureTextEntry={true}
        placeholder="Confirm Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <Pressable style={styles.button} onPress={() => navigation.navigate('Barber Profile')}>
      <Text style={styles.text}>Create Account</Text>
      </Pressable>
      <Button title="Go back" color="white" onPress={() => navigation.navigate('Barber Signup')}></Button>
      </View>

    </View>
  )
}

/*Client section login and sigup */

function Clientlogin({navigation}) {

  const [text, onChangeText] = React.useState(null);
  const [number, onChangeNumber] = React.useState(null);

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopView}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80, position: 'relative', top: 60}} />
      <Text style={{ fontSize: 26, position: 'relative', top: 80, fontWeight: '400', letterSpacing: 2}}>Login</Text>
      </View>
      <View style={styles.BottomView}>
        <Text style={{ bottom: 50, fontSize: 24, color: 'white', fontWeight: '400', letterSpacing: 2}}>Welcome Back</Text>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        placeholder="Username"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        secureTextEntry={true}
        placeholder="Password"
        keyboardType="numeric"
      />
      <Pressable style={styles.loginButton} onPress={() => navigation.navigate('Service Choice')}>
      <Text style={styles.text}>Login</Text>
      </Pressable>
      <Button title="Go back" color="white" onPress={() => navigation.navigate('Barber Entry')}></Button>
      </View>

    </View>
  )
}

function Clientsignup({navigation}) {

  const [name, onChangeName] = React.useState(null);
  const [age, onChangeAge] = React.useState(null);
  const [street, onChangeStreet] = React.useState(null);
  const [city, onChangeCity] = React.useState(null);
  const [zipcode, onChangeZipcode] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);



  function handleSubmit() {
    const body = {name, age, address: street, city, zipcode, password}
    fetch('http://localhost:3000/clients',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  }).then(res => res.json())
  .then((body) => navigation.navigate('Client Create Account'))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopViewSignup}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80}} />
      <Text style={{ fontSize: 20, fontWeight: '700'}}>Sign Up</Text>
      </View>
      <View style={styles.BottomViewSignup}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeName}
        value={name}
        placeholder="Name"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeAge}
        value={age}
        placeholder="Age"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeStreet}
        value={street}
        placeholder="Street Address"
      />
      <TextInput
        style={{height: 45, width: 120, magrin: 8, padding: 10, borderRadius: 20, backgroundColor: 'white', borderWidth: 1, flexDirection: 'row', right: 80}}
        onChangeText={onChangeCity}
        value={city}
        placeholder="City"
      />
      
      <TextInput
        style={{height: 45, width: 120, magrin: 8, padding: 10, borderRadius: 20, backgroundColor: 'white', borderWidth: 1, flexDirection: 'row', left: 80, bottom: 45}}
        onChangeText={onChangeZipcode}
        value={zipcode}
        placeholder="Zipcode"
      />
      <TextInput
        style={{height: 45, width: 280, borderRadius: 20, backgroundColor: 'white', bottom: 35}}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="  Password"
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
      <Text style={styles.text}>Sign Up</Text>
      </Pressable>
      </View>

    </View>
  )
}
function Clientcreateaccount({navigation}) {

  const [userName, onChangeUserName] = React.useState(null);
  const [email, onChangeEmail] = React.useState(null);
  const [password, onChangePassword] = React.useState(null);

  function handleUserSubmit() {
    const userBody = {userName, email, password}
    fetch('http://localhost:3000/clients',
    {method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userBody)
  }).then(res => res.json())
  .then((userBody) => navigation.navigate('Service Choice'))
  }

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <View style={styles.TopViewSignup}>
      <Image source={require('./images/housecall-01.png')} style={{width: 80, height: 80}} />
      <Text style={{ fontSize: 20, fontWeight: '700'}}>Sign Up</Text>
      </View>
      <View style={styles.BottomViewSignup}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeUserName}
        value={userName}
        placeholder="Username"
      />
      <TextInput
        style={{height: 45, width: 280, borderRadius: 20, backgroundColor: 'white', bottom: 4}}
        onChangeText={onChangePassword}
        value={password}
        secureTextEntry={true}
        placeholder="  Password"
      />
      <TextInput
        style={styles.input}
        onChangeText={onChangeEmail}
        value={email}
        placeholder="Email"
      />
      <Pressable style={styles.button} onPress={handleUserSubmit}>
      <Text style={styles.text}>Create Account</Text>
      </Pressable>
      <Button title="Go back" color="white" onPress={() => navigation.navigate('Client Signup')}></Button>
      </View>

    </View>
  )
}

/*Barber photo upload */


const Stack = createNativeStackNavigator();

function App() {
  return(
    <Provider
    store={store}>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Who are you?" component={Whoareyou} options={{headerShown:false}}/>
        <Stack.Screen name="Barber Entry" component={Barbersigninorlogin} options={{headerShown:false}}/>
        <Stack.Screen name="Client Entry" component={Clientsigninorlogin} options={{headerShown:false}}/>
        <Stack.Screen name="Barber Login" component={Barberlogin} options={{headerShown:false}}/>
        <Stack.Screen name="Barber Signup" component={Barbersignup} options={{headerShown:false}}/>
        <Stack.Screen name="Barber Create Account" component={Barbercreateaccount} options={{headerShown:false}}/>
        <Stack.Screen name="Client Login" component={Clientlogin} options={{headerShown:false}}/>
        <Stack.Screen name="Client Signup" component={Clientsignup} options={{headerShown:false}}/>
        <Stack.Screen name="Client Create Account" component={Clientcreateaccount} options={{headerShown:false}}/>
        <Stack.Screen name="Barber Profile" component={Barberprofile} options={{headerShown:false}}/>
        <Stack.Screen name="Service Choice" component={Servicechoice} options={{headerShown:false}}/>
        <Stack.Screen name="Map Screen" component={MapScreen} options={{headerShown:false}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>

  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 180,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#7474ac',
    marginTop: 11,
    
  },
  buttonLogin: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 180,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#7474ac',
    marginTop: 11,
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  input: {
    height: 45,
    margin: 8,
    marginTop: 0,
    borderWidth: 1,
    padding: 10,
    width: 280,
    borderRadius: 20,
    backgroundColor: 'white'
  },
  smallInput: {
    height: 45,
    width: 280,
    magrin: 8,
    padding: 10,
    borderRadius: 20,
    backgroundColor: 'white',
    borderWidth: 1,
    bottom: 40
  },
  TopView: {
    width: '100%',
    height: '40%', 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  BottomView: {
    width: '100%',
    height: '60%',
    backgroundColor: '#171774',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  GoBackButton: {
    color: 'white',
    top: 20
  },
  TopViewSignup: {
    width: '100%',
    height: '30%',
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  BottomViewSignup: {
    width: '100%',
    height: '80%',
    backgroundColor: '#171774',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30, 
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
  loginButton: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    width: 180,
    borderRadius: 24,
    elevation: 3,
    backgroundColor: '#7474ac',
    marginTop: 11,
    bottom: 0
  }
});

export default App;