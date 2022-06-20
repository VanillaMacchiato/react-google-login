/* global google */
import './App.css';
import { useEffect } from 'react';

function App() {

  const handleCallbackResponse = (response) => {
    console.log(response)

  }

  useEffect(() => {
    google.accounts.id.initialize({
      client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
      callback: handleCallbackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { theme: "filled_yellow", size: "large"}
    )
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Google Login App</h1>
        <div className="g-signin2"></div>
        <div id="signInDiv">
        </div>
      </header>
    </div>
  );
}

export default App;
