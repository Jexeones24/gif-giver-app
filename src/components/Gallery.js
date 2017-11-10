import React, {  Component } from 'react'
import { Image } from './Image'

export default class Gallery extends Component {
  renderImages = () => {
    return (
      this.props.images.map((url, idx) => <Image key={idx} url={url} />)
    )
  }
  render () {
    return (
      <section className='gallery'>
        {this.props.images ? this.renderImages() : []}
      </section>
    )
  }
}
