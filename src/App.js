import { Authenticator } from '@aws-amplify/ui-react';
import './App.css';
import { Transactions } from './components';

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <>
          <button onClick={signOut}>Log out</button>
          <div className="App">
            <Transactions />
          </div>
        </>
      )}
    </Authenticator>
  );
}

export default App;
