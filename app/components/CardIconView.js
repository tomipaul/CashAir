import React, { Component } from 'react'
import {
  View,
  Image,
  PixelRatio,
  StyleSheet,
} from 'react-native';

export default class CardIconView extends Component {
  render() {
    const { style } = this.props;
    return (
      <View style={{
          flex: 1,
          flexDirection: 'row',
          ...style
        }}
      >
        <Image
          source={require('../images/mastercard.jpg')}
          style={styles.imageStyle}
        />
        <View style={{ width: '5%' }}></View>
        <Image
          source={require('../images/visa_icon.png')}
          style={styles.imageStyle}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 40,
    height: 40,
    padding: 5
  }
})
