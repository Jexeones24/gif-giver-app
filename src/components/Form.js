import React, { Component } from 'react'

export default class Form extends Component {
  render () {
    return (
      <div className='form'>
        <div className={this.props.className}>
          <label>{this.props.label}</label>
          <form>
            {this.props.inputs.map((field, idx) =>
              <Input
                key={idx}
                type={this.props.type}
                name={this.props.name}
                value=''
                placeholder={field}
              />
            )}
            <button className='btn-submit'>SUBMIT</button>
          </form>
        </div>
      </div>
    )
  }
}

const Input = (props) => {
  return (
    <div>
      <input
        key={props.key}
        type={props.type}
        name={props.name}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  )
}
