import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthBase from './AuthBase'
import AuthInput from './AuthInput'
import Button from './Button'
import TextLink from './TextLink'

export default class Signup extends Component {
  render() {
    const { navigate } = this.props.navigation;
    return (
      <AuthBase>
        <View style={styles.container}>
          <AuthInput
            placeholder={'Mobile number'}
            keyboardType='numeric'
            onChangeText={() => {}}
          />
          <AuthInput
            placeholder={'Secret pin'}
            onChangeText={() => {}}
            secureTextEntry={true}
          />
          <AuthInput
            placeholder={'Confirm pin'}
            onChangeText={() => {}}
            secureTextEntry={true}
          />
          <Button
            text='SIGN UP'
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => {}}
          />
          <View style={styles.linksViewStyle}>
            <TextLink
              text='Have Account?  Sign In'
              textStyle={styles.linkTextStyle}
              onPress={() => navigate('SignInScreen')}
            />
          </View>
        </View>
      </AuthBase>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    width: '100%',
    height: '85%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonStyle: {
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    backgroundColor: 'white',
    marginBottom: 20,
    marginTop: 20,
    elevation: 5
  },
  buttonTextStyle: {
    color: 'black',
    fontSize: 20
  },
  linkTextStyle: {
    color: 'rgba(251, 252, 252, 0.5)',
    fontSize: 16,
  },
  linksViewStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
    marginBottom: 20
  }
})