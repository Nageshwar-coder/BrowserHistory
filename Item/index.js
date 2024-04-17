import './index.css'

const Item = props => {
  const {itemDetails, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = itemDetails
  const onDelete = () => {
    deleteItem(id)
  }
  return (
    <li className="listItem">
      <p className="time">{timeAccessed}</p>
      <img src={logoUrl} alt="domain logo" className="domain-logo" />
      <p className="title">{title}</p>
      <p className="url">{domainUrl}</p>
      <button
        className="deleteButton"
        type="button"
        onClick={onDelete}
      >
        <img
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
          alt="delete"
          className="delete"
        />
      </button>
    </li>
  )
}

export default Item
