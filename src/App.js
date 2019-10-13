import React, { Component } from "react"
import logo from "./logo.svg"
import "./App.css"
import request from 'superagent'

class LambdaDemo extends Component {
  constructor(props) {
    super(props)
    this.state = { loading: false, msg: null }
  }

  handleClick = api => e => {
    e.preventDefault()

    this.setState({ loading: true })
    request.get("/.netlify/functions/" + api)
      .accept('application/json')
      .end((err, res) => this.setState({ loading: false, msg: res.body() }))
  }

  render() {
    const { loading, msg } = this.state
    console.log(msg)

    return (
      <p>
        <button onClick={this.handleClick("hello")}>{loading ? "Loading..." : "Call Lambda"}</button>
        <button onClick={this.handleClick("async-dadjoke")}>{loading ? "Loading..." : "Call Async Lambda"}</button>
        <br />
        <br />
        <h2>hello!</h2>
      </p>
    )
  }
}

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <LambdaDemo />
        </header>
      </div>
    )
  }
}

export default App
