import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { auth } from '../../firebase/Firebase';
import CartIcon from '../cart-icon/CartIcon';
import CartDropdown from '../cart-dropdown/CartDropdown';
import { selectCartHidden } from '../../redux/cart/CartSelectors';
import { selectCurrentUser } from '../../redux/user/UserSelectors';

import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.scss';

const Header = ({ currentUser, hidden }) => {
  return (
    <div className='header'>
      <Link className='logo-container' to='/'>
        <Logo className='logo'></Logo>
      </Link>
      <div className='options'>
        <Link className='option' to='/shop'>
          SHOP
        </Link>
        <Link className='option' to='/shop'>
          CONTACT
        </Link>
        {currentUser ? (
          <div className='option' onClick={() => auth.signOut()}>
            {' '}
            SIGN OUT
          </div>
        ) : (
          <Link className='option' to='/signin'>
            {' '}
            SIGN IN
          </Link>
        )}
        <CartIcon></CartIcon>
      </div>
      {hidden ? '' : <CartDropdown></CartDropdown>}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden,
});

export default connect(mapStateToProps)(Header);
