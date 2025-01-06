import React from 'react';
import './CardBox.css';
const CardBox = ({children}) => {
  return (
    <div className='CardBox'>
        {children}
    </div>
  )
}

export default CardBox