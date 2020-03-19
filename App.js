import React, { Component } from 'react'
export default class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
      page: 0
    }
  }
  componentDidMount() {
    this.setState(state => {
      state.data = this.props.txs.slice(0, 50)
      return state
    })
    window.addEventListener('scroll', () => {
      if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        console.log("you're at the bottom of the page");
        const page = this.state.page + 1
        this.setState(state => {
          state.page = page
          state.data = state.data.concat(this.props.txs.slice(page * 50, page * 50 + 50))
          return state
        })
      }
    })
  }
  componentWillUnmount() {
    console.log('unmounting')
    window.removeEventListener('scroll')
  }
  render() {
    console.log('this.state.data', this.state.data)
    return(
      this.state.data.flatMap((tx, i) => { 
        const videos = tx.out
          .filter(xput => Boolean(xput.f3) === true)
          .map(xput => xput.f3)
          .map(f3 => {
            return (
              <img
                key={i}
                width={300}
                align={'middle'}
                height={200}
                style={{ margin: 10 }}
                src={`http://x.bitfs.network/${f3}`}
              />
            ) 
          })
        return videos
      })
    )
  }
}