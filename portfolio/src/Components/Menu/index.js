import React from 'react'
import { Link } from 'react-router-dom'
import './styles.css'

function MenuHorizontal(){


    return(
        <div>
      <ul id="menu">
      <h2>Business</h2>
      <Link to="/about">
      <button> about </button>
      </Link>

      <Link to="/work">
      <button> work </button>
      </Link>

      <Link to="/team">
      <button> team </button>
      </Link>

      <Link to="/">
      <button> home </button>
      </Link>

      <Link to="/contact">
      <button> contact </button>
      </Link>
      
      <Link to="/login">
      <button className="tron"> Login </button>
      </Link>
    </ul>
    </div>
    )
}

export default MenuHorizontal;
