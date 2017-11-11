import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

export default class Main extends Component {
  render () {
  console.log('main props:', this.props)
    return (
      <div className='main'>
        <SearchBar filterGifs={this.props.filterGifs} />
        <Gallery images={this.props.images} />
      </div>
    )
  }
}
