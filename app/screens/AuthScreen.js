import React, { Component } from 'react'
import { connect } from 'react-redux'

import {
  AsyncStorage,
  TextInput,
  Image,
  ImageBackground,
  NativeModules,
  View,
  PixelRatio,
  ScrollView,
  StyleSheet
} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome'
import Ionicon from 'react-native-vector-icons/Ionicons'
import SubmitButton from '../components/SubmitButton.js'
import Input from '../components/Input.js'
import Text from '../components/CustomText.js'
import ActivityIndicator from '../containers/ActivityIndicator.js'
import { authenticateUser } from '../redux/actions'


export class AuthScreen extends Component {
  state = {
    email: "",
    secretKey: ""
  }

  setStateItem = (item) => {
    return (value) => {
      this.setState({
        [item]: value
      })
    }
  }

  componentDidUpdate() {
    const { isAuth } = this.props.authentication
    const { navigate } = this.props.navigation;
    if (isAuth) {
      navigate("Transactions")
    }
  }

  handleSubmit = () => {
    const { email, secretKey } = this.state
    const { authenticateUser } = this.props
    return authenticateUser({ email, secretKey })
  }

  render() {
    const {
      isAwaitingResponse,
      authenticateUser
    } = this.props
    return (
      <ImageBackground
        source={require('../images/background.jpg')}
        imageStyle={{
          resizeMode:'cover',
          width: '100%',
          height: '100%'
        }}
        style= {{
          flex: 1,
          width: '100%',
          height: '100%',
        }}
      >
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={styles.main}
        contentContainerStyle= {styles.contentContainerStyle}
      >
        <View style={{
          width: '100%',
          height: '20%',
          /*backgroundColor: '#CACFD2',*/
          justifyContent: 'center',
        }}>
          <Image
            source={require('../images/cashAir.png')}
            style={styles.image}
          />
        </View>
        <View style={{ height: 30 }} />
        <View style={{
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: 20
        }}>
          <View style={styles.inputView}>
            <Ionicon
              name="ios-at"
              size={35}
              color="white"
              style={styles.iconStyle}
            />
            <Input
              placeholder="Email"
              placeholderTextColor="white"
              onChangeText={this.setStateItem('email')}
              customStyle={{
                width: '80%',
                color: 'white',
                fontSize: 20,
                paddingLeft: 10,
                borderWidth: 0,
              }}
            />
          </View>
          <View style={styles.inputView}>
            <Ionicon
              name="ios-unlock"
              size={35}
              color="white"
              style={styles.iconStyle}
            />
            <Input
              placeholder="Secret KEY"
              placeholderTextColor="white"
              secureTextEntry={true}
              keyboardType='numeric'
              onChangeText={this.setStateItem('secretKey')}
              customStyle={{
                width: '80%',
                color: 'white',
                fontSize: 20,
                paddingLeft: 10,
                borderWidth: 0,
              }}
            />
          </View>
        </View>
        <SubmitButton
          text='Sign In'
          onPress={this.handleSubmit}
        />
      </ScrollView>
      {
        isAwaitingResponse && <ActivityIndicator />
      }
      </ImageBackground>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    isAwaitingResponse: state.isAwaitingResponse,
    authentication: state.authentication,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  { authenticateUser }
)(AuthScreen)

const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
    // backgroundColor: 'white'
  },
  contentContainerStyle: {
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  image: {
    alignSelf: "center",
    width: 80,
    height: 80,
    borderWidth: 4,
    borderRadius: 90,
    borderColor: 'white',
  },
  inputView: {
    flexDirection: 'row',
    width: '90%',
    borderColor: 'white',
    borderWidth: 2,
    borderRadius: 3,
    borderStyle: 'solid',
    marginBottom: 10
  },
  iconStyle: {
    padding: 5,
    textAlign: 'center',
    textAlignVertical: 'center',
    borderRightWidth: 2,
    borderColor: 'white',
    backgroundColor: '#595959',
    width: '15%'
  }
})