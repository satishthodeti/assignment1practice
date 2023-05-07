import './index.css'

const SearchItems = props => {
  const {ItemDetails} = props
  const {timeAccessed, logoUrl, url, title, domainUrl} = ItemDetails

  return (
    <li className="Items-container">
      <p>{timeAccessed}</p>
      <img src={logoUrl} alt="app logo" />
      <p>{title}</p>
      <a href={url} rel="noreferrer" target="_blank">
        {domainUrl}
      </a>
      <img
        className="delete"
        src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
        alt="delete"
      />
    </li>
  )
}

export default SearchItems
