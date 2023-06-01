import React, { useEffect ,useState} from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { cartSelector } from '../Redux/CartSlice';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Cart from './Cart';

function Navbar() {
  const cartItems = useSelector(cartSelector);
  const numberCart = cartItems.length;
  const [ loginStatus, setLoginStatus ] = useState(false)

  useEffect(() => {
    let token = localStorage.getItem('token')
    if(!token) {
      setLoginStatus(false)
    }else{
      setLoginStatus(true)
    }
  }, [loginStatus])

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light justify-content-start">
      <a className="navbar-brand shop" href="/">
        Shop <span className="lane">Lane</span>
      </a>

      <div className="navbarRight topnav-right">
        <div className="dropdown">
          <button
            className="btn btn-light dropdown-toggle dropDownBtn"
            type="button"
            data-toggle="dropdown"
          >
            <div className="dropDownButtonContent">
              <div className="loginSignupButton">
                <span>
                  <Link className="btn btn-link" to="/login">
                    Login
                  </Link>
                </span>
                <span>
                  <Link className="btn btn-link" to="/signup">
                    Signup
                  </Link>
                </span>
              </div>
            </div>
          </button>
          <div className="topnav-centered">
            <Link to="/Cart">{numberCart} cart</Link>
            <Link to="/Cart" className="navbarCartDiv">
              <div>
                <AiOutlineShoppingCart color="black" size={'2.5rem'} />
              </div>
              
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
