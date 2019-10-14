import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Provider } from 'react-redux'
import store from './src/store'
import { connect } from 'react-redux'
import * as actions from './src/actions'


export default function App() {
  return (
    <Provider store={store}>
      <MainAfterConnect />
    </Provider>
  );
}

class Main extends React.Component { 
  render() {
    return(
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Button 
          title="click me"
          onPress = {this.props.doSomeThing}
        />
        <Text>{this.props.data}</Text>
      </View>
    )}
}

const mapStateToProps = (state, ownProps) => {
    
  return  {
    data: state.someThing.data,
  }
}

const MainAfterConnect = connect(mapStateToProps,actions)(Main)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// export default App

// ----------------------debug-----------------------
// const unsubscribe = store.subscribe(() => {
//   let date = new Date()
//   console.log(`--------DEBUG_APP_START-----${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}---`)
//   console.log(store.getState())
//   console.log('--------DEBUG_APP_END----------')
// })