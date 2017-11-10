import * as React from 'react';
import NotificationContainer from '../NotificationContainer';
import BracketContainer from '../BracketContainer';

import { RouteComponentProps } from 'react-router-dom';

const App = ({ match, location, history }: RouteComponentProps<{ id: string }>) => {
  return (
    <div>
      <NotificationContainer />
      <BracketContainer id={match.params.id} />
    </div>
  )
}

export default App;
