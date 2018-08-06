import React from 'react';
import AppState from '../../stores/AppState';
import { observer } from 'mobx-react';

@observer
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.appState = new AppState();
  }
  render() {
    return <div>{this.appState.message}</div>;
  }
}
