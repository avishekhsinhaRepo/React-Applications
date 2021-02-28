import React from 'react';
import ReactDOM from 'react-dom';
import SeaSonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
import "semantic-ui-css/semantic.min.css";
class App extends React.Component {
  state = { lat: null, errorMessage: '' };
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      error => this.setState({ errorMessage: error.message })
    );
  }
  render() {
    if (this.state.errorMessage !== '' && this.state.lat === null)
      return <h1>Error: {this.state.errorMessage}</h1>;
    else if (this.state.lat !== null && this.state.errorMessage === '')
      return <SeaSonDisplay latitude={this.state.lat} />
    return <Spinner />;

  }
}
ReactDOM.render(<App />, document.getElementById('root'));