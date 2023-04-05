import {RiLogoutCircleFill} from 'react-icons/ri'
import {FaUserAlt, FaClipboardList} from 'react-icons/fa'
import {HiTruck} from 'react-icons/hi'

import './index.css'

const NavbarItem = () => (
  <div className="navbar-container">
    <ul className="list-container">
      <li className="list-item1">
        <HiTruck className="navbar-items-logo" />
        <p className="navbar-list-heading">MY MOVES</p>
      </li>
      <li className="list-item">
        <FaUserAlt className="navbar-items-logo" />
        <p className="navbar-list-heading">MY PROFILE</p>
      </li>
      <li className="list-item">
        <FaClipboardList className="navbar-items-logo" />
        <p className="navbar-list-heading">GET QUOTE</p>
      </li>
      <li className="list-item">
        <RiLogoutCircleFill className="navbar-items-logo" />
        <p className="navbar-list-heading">LOGOUT</p>
      </li>
    </ul>
  </div>
)
export default NavbarItem
