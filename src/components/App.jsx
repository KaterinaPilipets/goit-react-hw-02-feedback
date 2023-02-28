import { Component } from 'react';
class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
      </div>
    );
  }
}
export default App;
