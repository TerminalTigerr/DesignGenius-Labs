import React, { Component } from 'react';
import {Navbar} from './components';

class App extends Component {
  render() {
    return (
      <header className= 'bg-primary overflow-hidden w-full'>
        <div className='flex justify-center items-center '>
          <div className='w-full py-6 px-4'>
            <Navbar />
          </div>
        </div>
      </header>
    );
  }
}

export default App;