import './index.css'

const BrowserList = props => {
  const {browserDetails, updateDelete} = props
  const {timeAccessed, logoUrl, title, domainUrl, id, link} = browserDetails

  const onDeleteHistory = () => {
    updateDelete(id)
  }

  return (
    <li className="history-container">
      <div className="container">
        <p className="time-accessed">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" className="logo-url" />
        <p className="title">{title}</p>

        <a href={link} rel="noreferrer" target="_blank" className="link1">
          www.{domainUrl}
        </a>
      </div>
      <div>
        <button
          className="button"
          type="button"
          data-testid="delete"
          onClick={onDeleteHistory}
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
            className="delete-image"
          />
        </button>
      </div>
    </li>
  )
}

export default BrowserList
