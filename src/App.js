import React, { Component } from 'react'
import { fetchGifs } from './lib/gifService'
import Main from './components/Main'
import './App.css'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'

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
  renderMain = () => {
    return (
      <Main
        filterGifs={this.filterGifs}
        images={this.state.images}
      />
    )
  }
  render () {
    const links = ['Somewhere', 'There', 'Here']
    return (
      <Router>
        <div className='App'>
          <NavBar
            title='GIF GIVER'
            subtitle='the gif that keeps on giving...'
            links={links}
          />
          <Route exact path='/' render={this.renderMain} />
          <Route exact path='/login' render={Login} />
          <Route exact path='/register' render={Register} />
          <Route exact path='/profile/:username' render={Profile} />
        </div>
      </Router>
    )
  }
}

const NavBar = ({title, subtitle, links}) => {
  return (
    <header>
      <span className='title'>{title}</span>
      <span className='subtitle'>{subtitle}</span>
      <span className='nav-links'>
        {links.map((link, idx) => <Link to='#' key={idx}>{link}</Link>)}
      </span>
    </header>
  )
}

const Login = () => {
  return (
    <div className='login'>
      LOGIN
    </div>
  )
}
const Register = () => {
  return (
    <div className='register'>
      REGISTER
    </div>
  )
}
// also want search bar - same as Main
  // how to render same component with diff search params?
const Profile = () => {
  return (
    <div className='profile'>
      PROFILE
    </div>
  )
}

export default App
