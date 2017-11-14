import * as React from 'react';
import BracketContainer from '../BracketContainer';

import { RouteComponentProps } from 'react-router-dom';

import './App.css';

const App = ({ match, location, history }: RouteComponentProps<{ id: string }>) => {
  return (
    <div>
      <div className="App">
        <img className="logo" src="http://www.expressnews.com/img/modules/siteheader/logos/logo_home_large.png" alt="San Antonio Express-News" />
        <BracketContainer id={match.params.id} />
      </div>
    </div>
  )
}

export default App;

//WORKING BRACKETS

//10140488802

//16144782069095