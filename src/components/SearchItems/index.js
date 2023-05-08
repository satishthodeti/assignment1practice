import './index.css'

const SearchItems = props => {
  const {ItemDetails, onDeleteCode} = props
  const {timeAccessed, logoUrl, url, title, domainUrl, id} = ItemDetails
  const onDelete = () => {
    onDeleteCode(id)
  }

  return (
    <li className="Items-container">
      <p>{timeAccessed}</p>
      <div className="details-center-container">
        <img src={logoUrl} alt="domain logo" />
        domainUrl
        <p>{title}</p>
        <p href={url} rel="noreferrer" target="_blank">
          {domainUrl}
        </p>
      </div>
      <button type="button" onClick={onDelete} data-testid="delete">
        <img
          className="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
        />
      </button>
    </li>
  )
}

export default SearchItems
