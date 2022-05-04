import React from "react";
import LogoImg from '../../assets/logo.png';
import {
    Nav,
    NavLink,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink
  } from './NavbarElements';
const Navbar = () => {
    return (
        <>
        <Nav>
            <NavLink to='/'>
            <img src={ LogoImg } alt='logo' 
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '8vh'
              }}
            
            />
            </NavLink>
            <Bars />
            <NavMenu>
                <NavLink to='/sobre' activeStyle>
                    Sobre
                </NavLink>

                <NavLink to='/produtos' activeStyle>
                    Produtos
                </NavLink>

                <NavLink to='/contato' activeStyle>
                    Contato
                </NavLink>

                <NavLink to='/sign-up' activeStyle>
                    Sign Up
                </NavLink>
                {/* Second Nav */}
                {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
            </NavMenu>

            <NavBtn>
                <NavBtnLink to='/signin'>Sign In</NavBtnLink>
            </NavBtn>
        </Nav>
        </>
    );
};

export default Navbar;