import React from 'react'
import "./nav.style.css"
import { Routes, Route, NavLink} from 'react-router-dom'
import Home from './Components/Home'
import Account from './Components/Account'

const App = () => {
  return (
    <div>
      <nav className="nav">
        <h2 >
          {" "}
          <NavLink to="/"> YourPins</NavLink>{" "}
        </h2>
        <ul className="navUl">
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "txtgreen" : "txtblack"}`
              }
              to="/"
            >
              Home
            </NavLink>{" "}
          </li>
          <li>
            {" "}
            <NavLink
              className={({ isActive }) =>
                `${isActive ? "txtgreen" : "txtblack"}`
              }
              to="/account"
            >
              My Pins
            </NavLink>{" "}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/account" element={<Account />} />
      </Routes>
    </div>
  );
}

export default App