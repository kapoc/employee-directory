import React from 'react';

function Header({title}){
  return (
    <div className='header'>
      <h4 className='header-title'>
        {title}
      </h4>
    </div>
  )
}

export default Header;
