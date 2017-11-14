import * as React from 'react';
import NotificationContainer from '../NotificationContainer';
import BracketContainer from '../BracketContainer';

import { RouteComponentProps } from 'react-router-dom';

import './App.css';

const App = ({ match, location, history }: RouteComponentProps<{ id: string }>) => {
  return (
    <div className="App">
      <NotificationContainer />
      <BracketContainer id={match.params.id} />
    </div>
  )
}

export default App;

//WORKING BRACKETS

//10140488802

//16144782069095