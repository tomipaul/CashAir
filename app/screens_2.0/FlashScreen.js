import React, { Component } from 'react'
import { Animated } from 'react-native';
import GradientBackground from './GradientBackground'

export default class FlashScreen extends Component {
  state = {
    widthAnim: new Animated.Value(0),
    heightAnim: new Animated.Value(0)
  }
  
  componentDidMount() {
    Animated.sequence(
      [
        Animated.timing(this.state.widthAnim, {
          toValue: 200,
          duration: 2000,
        }),
        Animated.timing(this.state.heightAnim, {
          toValue: 65,
          duration: 2000,
        })
      ]
    ).start(() => {
      this.timeoutId = setTimeout(() =>
        this.navigateToNextScreen(), 2000
      )
    })
  }

  navigateToNextScreen = async() => {
    const { navigate } = this.props.navigation;
    navigate("SignInScreen")
  }

  render() {
    const { widthAnim, heightAnim } = this.state
    return (
      <GradientBackground>
        <Animated.Image
          source={require('../images/cashair_new.png')}
          style ={{
            width: widthAnim,
            height: heightAnim,
          }}
          resizeMode='stretch'
          resizeMethod='scale'
        ></Animated.Image>
      </GradientBackground>
    )
  }
}