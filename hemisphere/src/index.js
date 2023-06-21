import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {

  constructor() {

  }
  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (error) => console.log(error)
    );
    return(
      <div>
        you are in the Northern hemisphere
      </div>
    )
  };
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);