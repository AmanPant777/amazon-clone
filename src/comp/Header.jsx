import React from 'react'
import './Header.css'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom'
import { useStateValue } from '../context/StateProvider';
import { auth } from '../firebase';
const Header = () => {
    const [{ basket, user }, dispatch] = useStateValue()
    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }
    return (
        <div className="header">
            <Link to='/'>
                <img src="/images/amazonlogo.png" alt="heade logo" className="header_logo" />
            </Link>
            <div className="header_search">
                <input type="text" className="header_searchInput" />
                <SearchIcon className='header_searchIcon' />
            </div>
            <div className="header_nav">
                <Link to={!user && '/login'}>
                    <div onClick={handleAuthentication} className="header_option">
                        <span className="header_optionLineOne">Hello,{user ? user.email : 'Guest'}</span>
                        <span className="header_optionLineTwo">{!user ? 'Sign In' : 'Sign Out'}</span>
                    </div>
                </Link>

                <div className="header_option">
                    <span className="header_optionLineOne">Returns</span>
                    <span className="header_optionLineTwo">& Orders</span>
                </div>
                <div className="header_option">
                    <span className="header_optionLineOne">Your</span>
                    <span className="header_optionLineTwo">Prime</span>
                </div>
                <div className="header_optionBasket">
                    <Link to='/checkout'>
                        <ShoppingBasketIcon />
                    </Link>

                    <span className='header_optionLineTwo header_basketCount'>{basket?.length}</span>
                </div>
            </div>
        </div>
    )
}
export default Header
