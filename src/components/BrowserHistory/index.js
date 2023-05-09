import {Component} from 'react'
import BrowserList from '../BrowserList'
import './index.css'

const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '06:45 AM',
    logoUrl:
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAABIFBMVEX///8AK00Bb8gAasf///0AIUYAI0gAJ0psoNdoeowAKUzz9PUAJUpaZnkAHkUADT7e5OZPkNAAYK220OgAZ8jz+PstQ10AET4AFkEBJkNpm9UmeclzgJEAIj3Gys/I3e8AYcUyfcYBZrgAFjy7wskTOlk0SWIAADkBXqgAADWmr7pRZnstRGHe7PQAW6IBU5SUoawAZb0AAC5ijbYAUp0ATJUAbcEAW6xjksMAW7jS19uBkZ0AGzkZOFGWu+KewuF7qtgvc7ORsdFMgLUAS5sOYKC6y9zk8fd2nMJTkc6outEATqNFc6VPhryJp78zg8YbY55CVm1SgKc8d7RypNMAEDFNX3SMmaY2S1wAM1mssrYYL0YAAB+st72gqrlccIWYAOMFAAAMHklEQVR4nO2cC3faRhbHB3uEgqQIJbZAJA6uDRjjV8D1U9jNy+u8upvSTeymW8r3/xY7jzujkRBpdr08vOf+zmlPERKev+6d+xiNSgiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAgyeyjN+UTTR8cu4V/TvzqNfPPL6UN/eiB48sI8Gj6RR19SclsC+pmRhmdnnz+Ls9bVj+TzdpZ6xqFnq8uC3r6hIPxBHtygJG77RYZltXfS1jg7Pe0JNgh5tDyZ1f1Za0pDf+wtCZY/pRTKg0wh6UYFgRO55oXXHx8/3uT01pnCpcksz13h6bIcyepKYiNQyG1IyKAoJfpr5nWvTqXC3mv6TYXL81d4vAljOQnzFcZVqbAQxfoq8poJ5Ap7r+hiK6T0x6MDNZYH+nBKIemDn3pb6hbQ/aPHgs1zMf4FV/hcGXF5XSlIKyQtG4zYVZe9AYXn74RrP1qerHDOkUbY8OAERrMxQWG96shgcxHI76+vTqXCV6H4/PKJ4lFvUwTYE33kybyzBVe4re73TyAxo5CsNaQRrV1xjfs3fhETeLqe/b3r4+eCN7OT8BcIhQfKT1fhfmcVunvgp9Um//ju6kAoPPo8VrBc868ODo5+naGGb0PPTh9vbz9WRnwvR6wVqtOaZQg2l8wt14/5XTnY3t4Ox35PKVwgG56dspFuayOuiBoTFPa0QlLyIdj0CfkgVRx8vB7/veurbcFCKeQRQ83EpaehVHgiSBS6jgN+GhD687Gw01nO761ACPr7zBT8FUrhpqpsXvKj4bkQaNiQNCHv21uE7B8/5xLdnN8DhaeLo5CcwZDeKz/l6Ss8lyWnoZCMLDAiS4r/YH56/CHv51bgysVTeL6+AcHmE5uJoHDTVBhY4Kc+89Nfnk+IJSs9qfD9bEb/HVCtcH9VSvzhRb4NyRDiaXFAaXx8nJ/IV3onMijPZPTfAz2TN/18nTyAqXjyloSn0oavUufueoaffsjv3VfkfVp+NJPRfw+GwvBESlx9oL00rXAHKnBrwBqOIH/pYjEV8jqSKSQvwE9X18Nz2TmkFIYNR3dR9Oc390kh2JBQ1QQ9DT/mKHwISb9xS8jrq6vcULroCvd1UoQUYiocQkL0KpS8PT56npsOF1OhSO5CIXmp+rzNMYXuVyi+O3VCfmWF6dGPeW662ApZt6g6xaUxhaow5as1sjC9yilLF1HhA6aQZ0HZ6V1rI26nFTbbULS1XPL2uay88/x0ERUumwrpeyUxrdB11GpUU9Zsk0rvBVT4RA5JKdxfSoy4nShcUz7Km3xpQ/Z9Tvu0iAqXTYVJUlx6zERIhZQ1wLBQ4wvH/MAXMbiRx1vge6CQbigrMjuBDV212Fb+U5xC34DE0zE/vQcKybphxF9kQlALUd5AXsMaRGFCJvE6U9rcA4WUqgp8SSmMO0m5Brz+uA1Lwhk/vQcKWSCBCnypd/SLOEUvCPeTy/6p1rwzfnovFFIdbE6Fwj74qF0x8t86PLcQ5Z7BvVBIyCfVKXIvjSPw0XbTvPCdevb0NOWnC6eQZvKhZB8eHy6/oiSsqIdro/SFJ7JL7vU+m8FGKVygHv/ByVPOiamQvnwq+URJt1AB0jUaXd/c2NiQl5oK5c89fTKb4X8HNARSB/VRSlxN9tIwzLs27xiCIMj3M+fdTbNgZ94DmDJ07bA+7zFMFXcQWaV5D2J6UBI7FmsvchdJ/z/Y8XkP1fjGTLx7HJprJOvLlRro8iXhmtiWGehz1EbNrKHjkTw+GsK+1bo+NaEbk7nBitNdWNJ3ImMczbbFKKuNUmRHfLas9jDzA6NIHPfL8uK4VfWtDEUrikbzmwJBCxYT0xsUd0Vf5eimI4RWubibudyWHaZ3Iz42O3YhD8cvzEtivVP11DDsr3oUATxOLOvOWK2qRkHqevXcUW43Cpx8gWo1dh64cXdXS0z0qC2LiclieA6ud/hJbqQkx5I7Hf0xZdqK1fnlW/fwGdx5FmvEQCnx1Up/W5mM3sgbYbeMS2kAjzz8W/FZbiBzfMs3kRemNulOm3Tkrh8+Y9RqBb/aAT3DSDuXXoNT/lg2bdFP+a4rY5ZTWksh703x4fSFTeD2C1f47Es32CmBC27p6eQUVEfvtqRdzdqHfnVMZ3blTk4vPVXhfs1MId0Z7XZTce3mQij8g49LWjfWJmTW0XUAxBrHSq6ul1MT2JWJtThXhUEhKhajyPA095L76LOLreRQyQgYSR2g9oQnmtVeKq8iDQ0K52rDUMYC207sEDRqnMZtcqTgJAqNOmDgZTS7VduMMwuhcDge84eHQuFhUtDAWxiwY9FaU5EJLnZ0StypinzvlOFASmG3NJdIo/K2UYOu+bZt12oVHWBpRcb8vYqUqHsOWnPS8XVwUeMSoZ7JKNytqqpNmn4qCus7nKYRVwoqSJYhRFIyKDqMRpKtYM+wvwY5I7E35AanBQGJ+TdXqAuFlEK131ExFYXDw4hRbum4ohK0qrL4qIo8JZgVB5SkURzKmtMpqG/UYw4hiZK+UOjYLWX+tA07DUlkT08hPN+1LT1xxjO5rMbspDAOOuIEu6JjapLjoa6xRkwfDS8vmELbSWJUSmHcVFw605uHMO20nyWew4oveee7omkoJo9mwBX9rk53SXE6lB2G0+b7qes8RLE53NChc0IslfN6Ogohdeu4ItJAJHzND0zRkW77XEgVbVedn5zLcqeT3LLShQjCVnJz8hWG01RItoRbOVVVq7AZ59RjPk6lSYroaCeF8FK84TPt1k+7tDIw3xAeHj6TiTR59DgPhd3UTOLTkJeV3DOhvHTbKSPrqSbjYyCHzDdLSYLDAoQhFsZYJcTc1Og18hXSvWkqlAJU0cGjJA+aPKTaeyJfNIXJIv0OKZRmDoxbxtVCVTvxAKqYNfKbKGfNWiitsPS1BRSmF0v1ED0xYFGN+fy/eO8ga9OR+F53gSo2qTpsmJnIKlk6lfhCtFy1QyPbpvOh7wDTVQgjsm5it75VFDUYkW5qt5phIOeVrV8+dCHjWf3ff+fVQhfG11Y1XQg9lPebVHhhjnv2GZ8kodH3iw1Pz8iAN3J25PnZSKJeDC58OWQ0qmong6VLHr17Q7RctUNzi0PGhjbgTFWh7sKlMRwZM6hsE/TbQLrqhq20Tk22/Wp0RnEaqM5KKLy4NNcLUgrX9raAiRmfkv/FSrHZzSa26JpH7T01/Drs4pPDZ7PM0Qp1cQoLV/ImfLk1/1ZKIVVAJaUV0i7QpH92ZYiLu3dZM94yF/hU+RnopSbupHpd4qGVuCBPBbzshCO6QW6qN9yFDVOJYUJNk1FIqp1O5Jc7hyPaqvKFZEp2y507PNwzzeXoxDYwdOuqO+WBaYXJSarQ4Sd9eUgmeulEhbTZrA+ifr0Zs35crMAFlhPdQaF+p6lgruh1G4lsRy02qVVSbsILFitrdlHPxKRyhUKnwNw088zxO21IePPIFbl7nsdL/tvIu4tCspuE7WR9Joi0bl1Yq62mTu0SEAlb7e1T4w7ayogX/0r/JVBoD+spZLBLKyyDwhv2H+5e8aZ6F4XqLVg2dDs5uqfdVFfd8NaFEwUqRvA9XyrfJMULFDqF2pf0+rc+NaqmkDZPPYFVCqNhVCHNzlqpfBeF1FPmMpedEzdt67nppW0K/+8WvYqYvWX2H9mnLaVMljeJzMypFFbjUSfebQejuyikenqJF0YU0OjyF/LgSNzJ2FQdB4fWywKwYJeT4eKqU5iAXTE3iymF5bhZvvG34PN/TeBDuWw+AiUlGHhbyQZb2WPPwSo18YV6qsEiQ2PshgH9zgSJTieV8BKF9NJic/COCknd8j3bq26lhh7elFmktOQGdv7noMqKxnYsdCP5jS59AstjH4t7Y/UI6yirvmdncGwvcuqpvLLblgpZvduvOi58vgNBf2tv8GfmIB3eVLZK+tYOW3IjZmusunBhk+alLl9L4sRu9kT5pwaVMW66Gb8Y2XwquAMvZh0Piw4jL/ts+T9nfMsklQd1W5HsyswCXxmbNCecCF+6Gcb+NpUbPqn4t/hnfAMogiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIMk3+Dd4ggOb7OWjtAAAAAElFTkSuQmCC',

    title: 'NxtWave Edutech',
    link: 'https://learning.ccbp.in/',
    domainUrl: 'nxtwave.com',
  },
  {
    id: 1,
    timeAccessed: '07:45 AM',
    logoUrl:
      'https://img.freepik.com/free-icon/css_318-698167.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=ais',
    title: 'CSS properties',
    link: 'https://www.w3schools.com/css/css_intro.asp',
    domainUrl: 'css.com',
  },
  {
    id: 2,
    timeAccessed: '08:35 AM',
    logoUrl:
      'https://img.freepik.com/free-icon/snakes_318-368381.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=ais',
    title: 'Python to Introduction',
    link: 'https://www.python.org/about/gettingstarted/',
    domainUrl: 'python.org',
  },
  {
    id: 3,
    timeAccessed: '09:25 AM',
    logoUrl:
      'https://img.freepik.com/premium-vector/bootstrap-flat-logo-vector-illustration_582637-461.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=ais',
    title: 'BootStrap Web',
    link: 'https://getbootstrap.com/',
    domainUrl: 'getbootstrap.com',
  },
  {
    id: 4,
    timeAccessed: '10:00 AM',
    logoUrl:
      'https://img.freepik.com/free-icon/nodejs_318-698166.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=ais',
    title: 'Authentication with Nodejs and JWTs',
    domainUrl: 'nodejs.org',
    link: 'https://nodejs.org/en',
  },
  {
    id: 5,
    timeAccessed: '12:25 PM',
    logoUrl:
      'https://img.freepik.com/free-vector/creative-data-logo-template_23-2149212796.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=sph',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
    link: '',
  },

  {
    id: 6,
    timeAccessed: '01:45 PM',
    logoUrl:
      'https://img.freepik.com/free-vector/atom-illustration-model-with-electrons-neutron-isolated_1284-53084.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=sph',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
    link: '',
  },
  {
    id: 7,
    timeAccessed: '03:25 PM',
    logoUrl:
      'https://img.freepik.com/free-icon/html-5_318-698168.jpg?size=626&ext=jpg&ga=GA1.1.812633379.1679888130&semt=ais',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
    link: '',
  },

  {
    id: 8,
    timeAccessed: '05:25 PM',
    logoUrl:
      'data:image/png;base64,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',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
    link: '',
  },
  {
    id: 9,
    timeAccessed: '08:00 PM',
    logoUrl:
      'data:image/jpeg;base64,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',
    title: 'Google',
    domainUrl: 'google.com',
    link: '',
  },
]

class BrowserHistory extends Component {
  state = {
    searchInput: '',
    browserHistoryItem: initialHistoryList,
  }

  searchInputResults = event => {
    this.setState({searchInput: event.target.value})
  }

  updateDelete = id => {
    const {browserHistoryItem} = this.state
    const filteredHistory = browserHistoryItem.filter(each => each.id !== id)
    this.setState({browserHistoryItem: filteredHistory})
  }

  render() {
    const {searchInput, browserHistoryItem} = this.state
    const searchResults = browserHistoryItem.filter(each =>
      each.title.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="bg-container">
          <div className="top-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png "
              alt="app logo"
              className="app-logo"
            />
            <div className="search-bar-container">
              <div className="search-container">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/search-img.png"
                  alt="search"
                  className="search"
                />
              </div>
              <input
                type="search"
                placeholder="Search history"
                className="search-bar"
                value={searchInput}
                onChange={this.searchInputResults}
              />
            </div>
          </div>
          {searchResults.length <= 0 ? (
            <div className="error-msg">
              <p className="no-history">There is no history to show</p>
            </div>
          ) : (
            <div className="bottom-container">
              <ul className="history-list">
                {searchResults.map(each => (
                  <BrowserList
                    browserDetails={each}
                    key={each.id}
                    updateDelete={this.updateDelete}
                  />
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    )
  }
}

export default BrowserHistory
