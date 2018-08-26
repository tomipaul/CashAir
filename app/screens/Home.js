import React, { Component } from 'react'
import {
  AsyncStorage,
  Image,
  Text,
  Animated,
  PixelRatio,
  ImageBackground
} from 'react-native';


export default class Home extends Component {  
  state = {
    textAnim: new Animated.Value(2),
    imageAnim: new Animated.Value(5)
  }
  
  componentDidMount() {
    Animated.sequence(
      [
        Animated.timing(this.state.textAnim, {
          toValue: 20,
          duration: 2000
        }),
        Animated.timing(this.state.imageAnim, {
          toValue: PixelRatio.get() * 70,
          duration: 3000
        })
      ]
    ).start(() => {
      this.timeoutId = setTimeout(() =>
        this.navigateToNextScreen(), 3000
      )
    })
  }

  navigateToNextScreen = async() => {
    const { navigate } = this.props.navigation;
    const token = await AsyncStorage.getItem('cashair_token')
    if (token) {
      navigate("Transactions")
    } else {
      navigate("AuthScreen")
    }
  }

  componentWillUnmount() {
    this.timeoutId && clearTimeout(this.timeoutId)
  }

  render() {
    const { textAnim, imageAnim } = this.state
    return (
        <ImageBackground
          source={require('../images/b.png')}
          style= {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
            height: '100%'
          }}
        >
          <Animated.Image
            source={require('../images/transparent.png')}
            style ={{
              width: imageAnim,
              height: imageAnim
            }}
          ></Animated.Image>
          <Animated.Text
            style={{
              fontSize: 50,
              fontFamily: 'times new roman',
              fontWeight: 'bold',
              letterSpacing: textAnim
            }}
          >CASHAIR
          </Animated.Text>
        </ImageBackground>
    )
  }
}
