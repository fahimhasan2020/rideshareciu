

import React, { Component } from 'react'
import {Provider} from 'react-redux'
import Index from './src/screens/home/Index'
import store from "./src/store/store";

export default class App extends Component {
  render() {
    return (
        <Provider store={store}>
          <Index />
        </Provider>
    )
  }
}
