import {Component} from 'react'
import SearchItems from '../SearchItems'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
    url: 'https://www.instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
    url: 'https://www.twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
    url: 'https://www.facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
    url: 'https://www.linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
    url: 'https://www.hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
    url: 'https://www.github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
    url: 'https://www.reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
    url: 'https://www.stackoverflow.com',
  },
  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
    url: 'https://www.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
    url: 'https://www.google.com',
  },
]

class SearchDetails extends Component {
  state = {
    searchInput: '',
    itemsInitialHistoryList: initialHistoryList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
    console.log(event.target.value)
  }

  onDeleteCode = id => {
    const {itemsInitialHistoryList} = this.state
    const filteredData = itemsInitialHistoryList.filter(each => each.id !== id)
    this.setState({
      itemsInitialHistoryList: filteredData,
    })
  }

  render() {
    const {searchInput, itemsInitialHistoryList} = this.state

    const searchHistoryResults = itemsInitialHistoryList.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )
    console.log(searchHistoryResults)

    return (
      <div>
        <div className="searchDetails-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            className="img-main"
            alt="app logo"
          />
          <img
            src="https://assets.ccbp.in/frontend/react-js/search-img.png"
            alt="search"
            className="search"
          />
          <input
            type="Search"
            className="input"
            placeholder="Search history"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </div>
        {searchHistoryResults.length <= 0 ? (
          <div className="error-msg">
            <p>There is no history to show</p>
          </div>
        ) : (
          <div className="button-container">
            <ul className="unorder-list">
              {searchHistoryResults.map(eachItemDetails => (
                <SearchItems
                  onDeleteCode={this.onDeleteCode}
                  ItemDetails={eachItemDetails}
                  key={eachItemDetails.id}
                />
              ))}
            </ul>
          </div>
        )}

        <div className="footer">
          <div className="bottom">
            <a
              href="https://www.linkedin.com/in/satishthodeti/"
              rel="noreferrer"
              target="_blank"
              className="link1"
            >
              www.linkedin.com
            </a>
            <p>Developed By Satish Thodeti</p>

            <a
              href="https://github.com/satishthodeti"
              rel="noreferrer"
              target="_blank"
              className="link2"
            >
              www.github.com
            </a>
          </div>
        </div>
      </div>
    )
  }
}
export default SearchDetails
