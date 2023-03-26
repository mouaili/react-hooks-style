import { Component } from 'react';
import Profile from './components/Profile';
import UserContext from './context/DataContext';
import DataColor from './context/DataColor';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      user: {
        name: 'Lisa',
        age: 8,
      },
      data: {
        color: 'white',
        backgroundColor: 'crimson',
        padding: '12px',
        textAlign: 'center',
        listStyleType: 'none',
        fontSize: '1.26rem',
      },
    };
  }

  render() {
    return (
      <div>
        <h1 className="text-danger fw-bold fst-italic text-center m-5">
          Les Hooks - react.js
        </h1>
        <DataColor.Provider value={this.state.data}>
          <UserContext.Provider value={this.state.user}>
            <Profile />
          </UserContext.Provider>
        </DataColor.Provider>
      </div>
    );
  }
}

export default App;
