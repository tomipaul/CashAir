/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Provider } from 'react-redux';

import {
  Platform,
  StyleSheet,
  TextInput,
  ImageBackground,
  Text,
  View,
  Button
} from 'react-native';

import { createStackNavigator } from 'react-navigation'
import Header from './app/components/Header.js'
import ActivityIndicator from './app/containers/ActivityIndicator.js'

// import Modal from './app/components/Modal.js'
import AuthScreen from './app/screens/AuthScreen.js'
import Home from './app/screens/Home.js'
import BuyAirtime from './app/screens/BuyAirtime.js'
import SellAirtime from './app/screens/SellAirtime.js'
import TransactionLog from './app/screens/TransactionLog.js'

import store from './app/redux/store'

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const mockData = [
  {
    id: 1,
    type: 'Buy',
    amount: '4000',
    mobile: '08107976596',
    isCompleted: true
  },
  {
    id: 2,
    type: 'Sell',
    amount: '2700',
    mobile: '08181567460',
    isCompleted: false
  },
  {
    id: 3,
    type: 'Sell',
    amount: '10000',
    mobile: '08023979673',
    isCompleted: true
  }
]

type Props = {};

const RootStack = createStackNavigator(
  {
    Home: { screen: Home },
    AuthScreen: { screen: AuthScreen },
    BuyAirtime: { screen: BuyAirtime },
    SellAirtime: { screen: SellAirtime },
    Transactions: { screen: TransactionLog }
  },
  {
    initialRouteName: 'Home',
    headerMode: "none"
  }
);

export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store()}>
        <RootStack
          ref={navigatorRef => Header.saveNavigatorRef(navigatorRef)}
        />
      </Provider>
    )
      /*<View style={styles.container}>*/
        {/*<Home />*/}
        {/*<BuyAirtime />*/}
        {/*<SellAirtime />*/}
        {/*<TransactionLog transactions={mockData}/>*/}
        {/*<Modal />*/}
        {/*<ImageBackground
          source={require('./app/images/m.png')}
          style= {{
            width: '100%',
            height: '100%'
          }}
        >*/}
          {/*<Header style={{
            width: '100%',
            height: '15%',
            marginBottom: '5%',
            backgroundColor: 'white',
            elevation: 2
          }} />
          <Label
            header={'Transaction History'}
            body={'See all buy and sell history'}
            style={{
              elevation: 4,
              width: "50%",
              height: "15%",
              borderWidth: 1,
              borderColor: "black",
              borderRadius: 3,
              backgroundColor: "white",
              padding: 3
            }}
          />*/}
          {/*<Dashboard style={styles.dashboard}/>*/}
          {/*<TextInput
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
            autoCorrect={false}
            placeholder={'this is an example'}
          />
          <TextInput
            style={styles.textInputStyle}
            underlineColorAndroid='transparent'
            autoCorrect={false}
            placeholder={'this is another example'}
          />*/}
          {/*<View style={styles.downview}></View>*/}
          {/*<Text style={styles.welcome}>
            Welcome to React Native!
          </Text>
          <Text style={styles.instructions}>
            To get started, edit App.js
          </Text>
          <Text style={styles.instructions}>
            {instructions}
          </Text>*/}
        {/*</ImageBackground>*/}
      /*</View>*/
    
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: '3%',
  },
  header: {
    width: '100%',
    height: '15%',
    marginBottom: '5%',
    backgroundColor: 'white',
  },
  downview: {
    height: '58%',
    width: '100%',
    backgroundColor: 'transparent'
  },
  textInputStyle: {
    marginBottom: '3%',
    backgroundColor: 'white',
    height: '10%',
    width:'80%',
    borderColor: 'gray',
    borderWidth: 1,
    fontSize: 20,
    padding: 15,
  }
});
//#F5FCFF
//#595959