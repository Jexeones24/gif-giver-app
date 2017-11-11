import React, { Component } from 'react'
import { fetchGifs } from './lib/gifService'
import Layout from './components/Layout'
import './App.css'

class App extends Component {
  state = {
    images: []
  }
  filterGifs = (input, limit) => {
    let queryStr = this.makeQueryStr(input)
    fetchGifs(queryStr, limit)
    .then(gifs => {
      let images = gifs.data.map(gif => gif.images.downsized.url)
      console.log(images)
      this.setState({images})
    })
  }
  makeQueryStr = (str) => {
    let trimmed = str.trim()
    let replaced = trimmed.split(' ').join('+')
    return replaced
  }
  render () {
    return (
      <div className='App'>
        <header>
          <h1>GIF GIVER</h1>
          <p>the gif that keeps on giving...</p>
        </header>
        <Layout
          filterGifs={this.filterGifs}
          images={this.state.images}
        />
      </div>
    )
  }
}

export default App
