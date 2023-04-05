import './index.css'

const InventoryDetailsContainer = prop => {
  const {itemDetails} = prop
  const {displayName, items} = itemDetails
  console.log(items)

  const getSelectedType = type => {
    const randomNumber = Math.ceil(Math.random() * type.length)
    console.log(randomNumber)
    return type.length > 0 ? (
      <p className="option">{type[randomNumber - 1].option}</p>
    ) : (
      ' '
    )
  }
  return (
    <li className="Inventory-detailed-description-list-item">
      <h1 className="furniture">{displayName}</h1>
      {items.map(each => (
        <div className="quantity-container">
          <div>
            <p className="furniture-name">{each.displayName}</p>
            {each.meta.hasType ? getSelectedType(each.type) : ''}
          </div>
          <p className="quantity">{each.qty}</p>
        </div>
      ))}
    </li>
  )
}

export default InventoryDetailsContainer
