import React, { Component } from 'react';
import {Navbar, Hero} from './components';

class App extends Component {
  render() {
    return (
      <div className='bg-primary overflow-hidden w-full'>
        <div className='flex p-8 justify-center items-center '>
          <div className='w-full'>
            <Navbar />
          </div>
        </div>

        <div className='bg-primary justify-center items-center'>
          <div className='w-full py-10'>
            <Hero />
          </div>
        </div>
      </div>
    );
  }
}

export default App;