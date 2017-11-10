import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

export default class Layout extends Component {
  render () {
    console.log('layout props:', this.props)
    return (
      <div className='layout'>
        LAYOUT
        <SearchBar filterGifs={this.props.filterGifs} />
        <Gallery images={this.props.images} />
      </div>
    )
  }
}
