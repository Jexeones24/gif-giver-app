import React, { Component } from 'react'
import './App.css'
const API_KEY = 'byA0c6xHILWpQAtFjZnFdPrQwmDnXUfk'
const base_URL = 'http://api.giphy.com/v1/gifs/search?q='

class App extends Component {
  state = {
    formInput: '',
    limit: 12,
    images: []
  }
  fetchGifs = (queryStr) => {
    fetch(`${base_URL}${queryStr}&api_key=${API_KEY}&limit=${this.state.limit}`)
    .then(resp => resp.json())
    .then(gifs => {
      console.log(gifs.data)
      let images = gifs.data.map(gif => gif.images.downsized.url)
      console.log(images)
      this.setState({images})
    })
  }
  handleChange = (evt) => {
    let formInput = evt.target.value
    this.setState({ formInput })
  }
  makeQueryStr = (str) => {
    // are numbers acceptable?
    // symbols?
    // char limit?
    let trimmed = str.trim()
    let replaced = trimmed.split(' ').join('+')
    return replaced
  }
  handleSubmit = (evt) => {
    evt.preventDefault()
    let queryStr = this.makeQueryStr(this.state.formInput)
    this.fetchGifs(queryStr)
  }

  render () {
    console.log(this.state)
    return (
      <div className='App'>
        SEARCH GIFS
        <form onSubmit={this.handleSubmit}>
          <input type="text" name='formInput' value={this.state.formInput} onChange={this.handleChange} placeholder='search'/>
          <button type='submit'>GO</button>
        </form>
          {this.state.images.map((img, idx) => <img src={img} alt='img' key={idx}/>)}
      </div>
    )
  }
}

export default App
