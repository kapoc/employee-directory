import React from 'react';

function ListInfoItem({title, value}) {
  return (
    <li className='list-group-item'>
      <div className='info-box'>
        <div className='values'>
          <div className='title'>
            {title}
          </div>

          <div className='value'>
            {value}
          </div>
        </div>

        <div className='caret'>
          <span>
            &#94;
          </span>
        </div>
      </div>
    </li>
  )
}

export default ListInfoItem;
