import React, { Component } from 'react'

import PageInput from './PageInput'

export default class SharedInputs extends Component {
  render() {
    const { state, onChangeText } = this.props
    return (
      <React.Fragment>
        <PageInput
          placeholder={'Amount'}
          keyboardType='numeric'
          value={state.amount}
          onChangeText={onChangeText('amount')}
        />
        <PageInput
          placeholder={'Price'}
          keyboardType='numeric'
          value={state.price}
          onChangeText={onChangeText('price')}
        />
        <PageInput
          placeholder={'Mobile number'}
          keyboardType='numeric'
          value={state.mobileNumber}
          onChangeText={onChangeText('mobileNumber')}
        />
      </React.Fragment>
    )
  }
}
