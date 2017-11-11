import React from 'react'

export const Image = ({url}) => {
  return (
    <div className='img'>
      <img src={url} alt='img' />
      {/* break out this overlay into own component */}
      <div className='overlay'>
          <span className='heart'></span>
          <span className='add'>+</span>
      </div>
    </div>
  )
}
