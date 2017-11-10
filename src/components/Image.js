import React from 'react'

export const Image = ({url}) => {
  return (
    <div className='img'>
      <img src={url} alt='img' />
      <div className='overlay'>SHOW ON HOVER</div>
    </div>
  )
}
