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
      console.log('gifs:', gifs)
      let images = gifs.data.map(gif => gif.images.downsized.url)
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
        <Banner
          title='GIF GIVER'
          subtitle='the gif that keeps on giving...'
        />
        <Layout
          filterGifs={this.filterGifs}
          images={this.state.images}
        />
      </div>
    )
  }
}

const Banner = ({title, subtitle}) => {
  return (
    <header>
      <span className='title'>{title}</span>
      <span className='subtitle'>{subtitle}</span>
    </header>
  )
}

export default App
