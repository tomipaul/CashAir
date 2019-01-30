import React, { Component } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

import Button from './Button'
import Text from '../components/CustomText'

export class Picker extends Component {
  state = {
    active: false
  }

  tooglePickerStatus = () => {
    this.setState({ active: !this.state.active })
  }

  render() {
    const { placeholder, selected, onSelect, children, style={} } = this.props
    const { active } = this.state
    return (
      <View style={[styles.containerStyle, style]}>
        <Button
          buttonStyle={styles.pickerButtonStyle}
          onPress={this.tooglePickerStatus}
        >
          <View style={styles.pickerViewStyle}>
            <Text style={[styles.pickerTextStyle]}>
              {selected.value ? selected.value : placeholder}
            </Text>
            <Icon
              name={`md-arrow-${active ? 'dropup':'dropdown'}-circle`}
              style={styles.pickerIconStyle}
            />
          </View>
        </Button>
        {active &&
          (<ScrollView
            style={styles.scrollViewStyle}
            contentContainerStyle={styles.scrollViewContainerStyle}
            keyboardShouldPersistTaps='always'
            nestedScrollEnabled
          >
            {
              React.Children.map(children, child =>
                React.cloneElement(
                  child,
                  {
                    active: child.props.name === selected.name,
                    onPress: () => {
                      onSelect(child.props.name, child.props.value)
                    }
                  }
                )
              )
            }
          </ScrollView>)
        }
      </View>
    )
  }
}

export const PickerItem = ({ active, value, children, onPress }) => {
  return (
    <Button
      buttonStyle={{
        width: '100%',
        backgroundColor: active ? '#F0EFEF' : '#FAF9F9'
      }}
      onPress={onPress}
    >
      {children || value}
    </Button>
  )
}

const styles = StyleSheet.create({
  containerStyle: {
    width: '100%',
    height: '100%',
  },
  pickerButtonStyle: {
    width: '100%',
    height: '100%',
    backgroundColor: '#F0EFEF'
  },
  pickerViewStyle: {
    width: '100%',
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 10
  },
  pickerTextStyle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#6C6C6C',
  },
  pickerIconStyle: {
    fontSize: 35,
    fontWeight: '900',
    color: 'black'
  },
  scrollViewStyle: {
    width: '100%',
    height: 150,
    position: 'absolute',
    backgroundColor: '#FAF9F9',
    top: '100%',
    zIndex: 10
  },
  scrollViewContainerStyle: {
    width: '100%',
    minHeight: '100%',
  },
})
