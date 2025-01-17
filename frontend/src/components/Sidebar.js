import React from 'react'

import { useDispatch } from 'react-redux'

import { account } from '../reducers/account'

import { Link } from 'react-router-dom'

const Sidebar = () => {

  const dispatch = useDispatch()
  return (
    <aside className="sidebar">
      <nav className="sidebar-nav">
        <ul className="sidebar-list">
          <Link to="/authorized/profile"><li className="sidebar-list-item">Profile</li></Link>
          <li 
            className="sidebar-list-item" 
            onClick={() => {
              dispatch(account.actions.logOut())
              localStorage.removeItem('user')
            }}>Log out</li>
        </ul>
      </nav>

    </aside> 

  )
}

export default Sidebar 