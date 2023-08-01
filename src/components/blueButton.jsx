import React, { Component } from 'react';

class BlueButton extends Component {
  render() {
    return (
      <div>
        <a href='#' className='bg-blue-600 px-8 py-4 rounded-full text-white
          font-poppins text-base font-medium'>
          start a project?
        </a>
      </div>
    );
  }
}

export default BlueButton;