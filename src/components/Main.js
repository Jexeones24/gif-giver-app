import React, { Component } from 'react'
import SearchBar from './SearchBar'
import Gallery from './Gallery'

export default class Main extends Component {
  render () {
    return (
      <div className='layout'>
        <SearchBar filterGifs={this.props.filterGifs} />
        <Gallery images={this.props.images} />
      </div>
    )
  }
}
