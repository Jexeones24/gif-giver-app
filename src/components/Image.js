import React from 'react'

export const Image = ({url}) => {
  return (
    <div className='img'>
      <img src={url} alt='img' />
      <div className='overlay'>
        <span>
          <div className='heart'></div>
          <div className='add'>+</div>
        </span>
      </div>
    </div>
  )
}
