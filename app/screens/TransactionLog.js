import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  ScrollView,
  StyleSheet,
} from 'react-native';


import Transaction from '../components/Transaction.js'
import AnimatedMenu from '../components/AnimatedMenu.js'
import ActivityIndicator from '../containers/ActivityIndicator.js'
import Header from '../containers/Header.js'
import { getTransactions } from '../redux/actions'


export class TransactionLog extends Component {
  componentDidMount() {
    this.props.getTransactions()
  }

  render() {
    const { transactions, isAwaitingResponse} = this.props
    return (
      <ScrollView
        style={styles.main}
        contentContainerStyle={styles.contentContainerStyle}
      >
        <Header text='TRANSACTIONS' activeMenu='LOG' />
        {
          transactions.map(transaction =>
            <Transaction key={transaction.id} {...transaction} />
          )
        }
        <ActivityIndicator />
      </ScrollView>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    transactions: state.transactions,
    isAwaitingResponse: state.isAwaitingResponse,
    ...ownProps
  }
}

export default connect(
  mapStateToProps,
  { getTransactions }
)(TransactionLog)


const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  contentContainerStyle: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})
