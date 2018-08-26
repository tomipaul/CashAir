import React, { Component } from 'react'
import {
  AsyncStorage,
  Text,
  View,
  Image,
  PixelRatio,
  StyleSheet,
  TouchableOpacity
} from 'react-native';

import { NavigationActions } from 'react-navigation'
import AnimatedMenu from './AnimatedMenu.js'

let navigator

export default class Header extends Component {
  static saveNavigatorRef(navigatorRef) {
    navigator = navigatorRef
  }

  getUnfocusedMenuItems = () => {
    const { activeMenu } = this.props
    return ["BUY", "SELL", "LOG", "EXIT"]
    .filter(item => item !== activeMenu)
  }

  navigateToMenuItem = (item) => {
    if (item == 'BUY') {
      navigator.dispatch(
        NavigationActions.navigate({ routeName: 'BuyAirtime'})
      )
    } else if (item == 'SELL') {
      navigator.dispatch(
        NavigationActions.navigate({ routeName: 'SellAirtime'})
      )
    } else if (item == 'LOG') {
      navigator.dispatch(
        NavigationActions.navigate({ routeName: 'Transactions'})
      )
    } else if (item == 'EXIT') {
      this.props.clearAuthStatus()
      navigator.dispatch(
        NavigationActions.navigate({ routeName: 'AuthScreen'})
      )
    }
  }

  render() {
    const { style, text, activeMenu } = this.props;
    const { isMenuVisible, toggleMenu } = this.props;
    return (
      <React.Fragment>
        <View
          style={[
            styles.viewStyle,
            styles.viewBorderStyle
          ]}
        >
          <TouchableOpacity
            onPress={toggleMenu}
          >
            <Image
              source={require('../images/cashAir.png')}
              style={styles.image}
            />
          </TouchableOpacity>
          <Text
            style={styles.textStyle}
          >{text}</Text>
        </View>
        {
          isMenuVisible &&
          <AnimatedMenu
            items={this.getUnfocusedMenuItems()}
            clickHandler={this.navigateToMenuItem}
          />
        }
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    position: 'relative',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    height: '20%',
    elevation: 5,
    backgroundColor: '#bfbfbf'
  },
  viewBorderStyle: {
    borderColor: "black",
    borderWidth: 1,
    opacity: 0.8,
  },
  image: {
    width: 80,
    height: 80,
    borderWidth: 4,
    borderRadius: 90,
    borderColor: 'white'
  },
  textStyle: {
    fontSize: (PixelRatio.get() > 2.5) ? 30 : PixelRatio.get() * 16,
    fontFamily: 'times new roman',
    width: '65%'
  }
})