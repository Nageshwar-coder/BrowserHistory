import {Component} from 'react'
import Item from '../Item/index'
import './index.css'

class Home extends Component {
  state = {searchInput: '', initialHistoryList: this.props.historyList}

  onSearch = event => {
    this.setState({searchInput: event.target.value})
  }

  deleteItem = id => {
    const {initialHistoryList} = this.state
    const resultantSearchHistory = initialHistoryList.filter(
      eachItem => eachItem.id !== id,
    )
    this.setState({initialHistoryList: resultantSearchHistory})
  }

  render() {
    const {searchInput, initialHistoryList} = this.state
    const filteredHistoryList = initialHistoryList.filter(eachItem =>
      eachItem.title.toLowerCase().includes(searchInput.toLocaleLowerCase()),
    )

    let div
    if (filteredHistoryList.length === 0) {
      div = (
        <div className="history">
          <p className="history-text">There is not history to show</p>
        </div>
      )
    } else {
      div = (
        <ul className="result-list">
          {filteredHistoryList.map(eachItem => (
            <Item itemDetails={eachItem} deleteItem={this.deleteItem} />
          ))}
        </ul>
      )
    }

    return (
      <div className="bg">
        <div className="navbar">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
            className="app-logo"
          />
          <div className="searchBar">
            <img
              src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              alt="search"
              className="search-logo"
            />
            <input
              type="search"
              className="input"
              placeholder="search history"
              onChange={this.onSearch}
            />
          </div>
        </div>
        <div className="display-setting">{div}</div>
      </div>
    )
  }
}

export default Home
