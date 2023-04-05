import {MdKeyboardArrowDown, MdKeyboardArrowUp} from 'react-icons/md'

import InventoryDetailsContainer from '../InventoryDetailsContainer'

import './index.css'

const InventoryItemDetails = prop => {
  const {
    inventoryItemDetails,
    checkingInventoryItem,
    isInventoryItemChecked,
    isChecked,
  } = prop
  console.log(isChecked)
  const {id, displayName, category} = inventoryItemDetails
  const inventoryDetailsItemCountArray = category.map(each => each.items.length)
  const itemsCount = inventoryDetailsItemCountArray.reduce((a, b) => a + b)
  const onClickingDropDownIcon = () => checkingInventoryItem(id)
  const toDisplayFurnitureItems = (
    <ul className="Inventory-detailed-description-list-container">
      {category.map(each => (
        <InventoryDetailsContainer itemDetails={each} key={each.id} />
      ))}
    </ul>
  )
  return (
    <li className="inventory-item-details-list-item">
      <div className="inventory-item-container">
        <div className="inventory-item-name-container">
          <h1 className="inventory-item-heading">{displayName}</h1>
          <div className="itemsCountContainer">
            <p className="items-count">{itemsCount}</p>
          </div>
        </div>
        <button
          type="button"
          className="arrow-button"
          onClick={onClickingDropDownIcon}
        >
          {isInventoryItemChecked && isChecked ? (
            <MdKeyboardArrowUp size={25} />
          ) : (
            <MdKeyboardArrowDown size={25} />
          )}
        </button>
      </div>
      {isInventoryItemChecked && isChecked ? toDisplayFurnitureItems : ''}
    </li>
  )
}

export default InventoryItemDetails
