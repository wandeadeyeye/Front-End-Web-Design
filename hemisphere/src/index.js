import React from 'react';
import ReactDOM from 'react-dom/client';

class App extends React.Component {

  constructor(props) {
    super(props)

    this.state = { latitude: null, errorMessage: '' }
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState ({ latitude: position.coords.latitude })
      },
      (error) => 
      this.setState ({ errorMessage: error.message })
    );
  }

  render() {

    return(
      <div>
        { this.state.latitude }
        { this.state.errorMessage }
      </div>
    )
  };
}


// render

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);