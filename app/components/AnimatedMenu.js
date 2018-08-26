import React, { Component } from 'react'
import {
  Animated,
  View,
  Image,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import Text from './CustomText.js'

export default class AnimatedMenu extends Component {
  state = {
    rotateY: new Animated.Value(70),
  }

  componentDidMount() {
    Animated.sequence(
      [
        Animated.timing(this.state.rotateY, {
          toValue: 0,
          duration: 1000
        })
      ]
    ).start()
  }

  render() {
    const { items, clickHandler } = this.props;
    return (
      <Animated.View style={{
        ...StyleSheet.flatten(styles.container),
        transform: [
          {rotateY: this.state.rotateY.interpolate({
            inputRange: [0, 360],
            outputRange: ['0deg', '360deg']
          })},
          {perspective: 1000},
        ],
      }}>
        {
          items.map(item =>
            <TouchableOpacity
              key={item}
              style={styles.button}
              onPress={() => clickHandler(item)}
            >
              <Text style={styles.textStyle}>{item}</Text>
            </TouchableOpacity>
          )
        }
      </Animated.View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 70,
    backgroundColor: "#bfbfbf"
  },
  button: {
    padding: 2,
    width: '30%',
    // backgroundColor: "#bfbfbf",
    borderColor: "white",
    // borderStyle:'solid',
    borderRightWidth: 4,
    // borderRadius: 5,
    // elevation: 2
  },
  textStyle: {
    textAlign: 'center',
    color: '#3F443F',
    fontSize: 22,
  }
})

// #797D7F #bfbfbf
