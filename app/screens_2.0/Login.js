import React, { Component } from 'react'
import { View, StyleSheet } from 'react-native'
import AuthBase from './AuthBase'
import AuthInput from './AuthInput'
import Button from './Button'
import Text from '../components/CustomText'
import TextLink from './TextLink'


export default class Login extends Component {
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
          <Button
            text='SIGN IN'
            buttonStyle={styles.buttonStyle}
            textStyle={styles.buttonTextStyle}
            onPress={() => {}}
          />
          <View style={styles.linksViewStyle}>
            <TextLink
              text='Forgot Password'
              textStyle={styles.linkTextStyle}
              onPress={() => {}}
            />
            <Text
              style={[styles.linkTextStyle, styles.linkSeparatorPadding]}
            >|</Text>
            <TextLink
              text='Create Account'
              textStyle={styles.linkTextStyle}
              onPress={() => navigate('SignUpScreen')}
            />
          </View>
        </View>
      </AuthBase>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '80%',
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
  linkSeparatorPadding: {
    paddingLeft: 10,
    paddingRight: 10
  },
  linksViewStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: '80%',
    marginTop: 20,
    marginBottom: 20
  }
})
