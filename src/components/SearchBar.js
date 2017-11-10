import React, { Component } from 'react'

export default class SearchBar extends Component {
  state = {
    input: '',
    limit: 25
  }
  handleInputChange = (evt) => {
    let input = evt.target.value
    let limit = this.state.limit
    this.setState({ input }, () => this.props.filterGifs(input, limit))
  }
  render () {
    return (
      <div className='search-bar'>
        <form>
          <input type="text" name='input' value={this.state.input} onChange={this.handleInputChange} placeholder='search' />
        </form>
      </div>
    )
  }
}
