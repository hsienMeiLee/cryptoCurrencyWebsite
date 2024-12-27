import React, { useContext } from 'react';
import './Navbar.css';
import logo from '../../assets/logo.png';
import arrow_icon from '../../assets/arrow_icon.png';
import { CoinContext } from '../../context/CoinContext';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {setCurrency} = useContext(CoinContext);

  const currencyHandler = (event) => {
    switch(event.target.value){
      case "twd" :{
        setCurrency({name : "twd", symbol : "NT$"});
        break;
      }
      case "usd" : {
        setCurrency({name : "usd", symbol : "$"});
        break;
      }
      case "jpy" : {
        setCurrency({name : "jpy", symbol : "¥"});
        break;
      }
      default : {
        setCurrency({name : "twd" , symbol : "NT$"});
        break;
      }
    }
  }

  return (
    <div className='navbar'>
      <Link to={`/`}>
        <img src={logo} alt="logo" className='logo' />
      </Link>
        <ul>
            <Link to={`/`}><li>Home</li></Link>
            <li>Features</li>
            <li>Pricing</li>
            <li>Blog</li>
        </ul>
        <div className="nav-right">
            <select onChange={currencyHandler}>
                <option value="twd">TWD</option>
                <option value="usd">USD</option>
                <option value="jpy">JPY</option>
            </select>
            <button>Sign Up <img src={arrow_icon} alt="arrow_icon" /></button>
        </div>
    </div>
  )
}

export default Navbar