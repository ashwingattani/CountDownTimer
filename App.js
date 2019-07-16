import React, {Component} from 'react';
import { StyleSheet, View, TextInput, Button, Text, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
import * as Actions from './actions/timerActions';

class App extends Component {

state = {
  seconds: 0,
  startTime: 0,
  decrementValue: 1,
  status: 'stopped'
 }

startTimer = () => {
  console.log("timer started");
  this.props.startTimer(this.state.seconds)
  this.props.decrementTimer(this.state.seconds)
  this.timerInterval = setInterval( () => {
    console.log('decrementing');
    this.props.decrementTimer(this.props.seconds)
  }, 1000);
}

stopTimer = () => {
  console.log("timer stopped");
  clearInterval(this.timerInterval);
}

onChangeTime = (value) => {
  this.setState({seconds: value * 60});
}

render() {
   return (
    <View style={ styles.container }>
       <SafeAreaView style = { styles.inputContainer }>
        <TextInput
           placeholder = "timer value"
           style = { styles.placeInput }
           onChangeText = { this.onChangeTime }
        ></TextInput>
        <Button title = 'Start'
            style = { styles.placeButton }
            onPress = { this.startTimer }
        />
        <Button title = 'Stop'
            style = { styles.placeButton }
            onPress = { this.stopTimer }
        />
        <Text>
          Seconds: {this.props.seconds > 0 ? this.props.seconds : this.state.seconds}
        </Text>
        </SafeAreaView>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  inputContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%'
  },
  placeInput: {
    width: '70%'
  },
  placeButton: {
    width: '30%'
  },
  listContainer: {
    width: '100%'
  }
});

const mapStateToProps = state => {
  return {
    seconds: state.timer.seconds,
    startTime: state.timer.startTime,
    status: state.timer.status
  }
}

const mapDispatchToProps = dispatch => {
  return {
    startTimer: (startTime) => {
      dispatch(Actions.startTimer(startTime))
    },
    stopTimer: () => {
      dispatch(Actions.stopTimer())
    },
    decrementTimer: (seconds) => {
      dispatch(Actions.decrementTimer(seconds))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)