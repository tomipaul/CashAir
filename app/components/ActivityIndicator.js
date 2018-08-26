import React, { Component } from 'react'
import {
  ActivityIndicator as AI,
  Modal,
  StyleSheet,
  View
} from 'react-native';

export default class ActivityIndicator extends Component {
  render() {
    return this.props.isAwaitingResponse &&
      <Modal
        animationType="slide"
        transparent={true}
        visible={true}
        onRequestClose={() => {}}
      >
        <View style={[
          styles.container,
          styles.horizontal
        ]}>
          <AI
            size={70}
            color="white" />
        </View>
      </Modal>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(90, 93, 93, 0.7)'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }
})
