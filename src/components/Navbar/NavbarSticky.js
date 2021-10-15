import React from 'react';
import {
    Navbar,
    NavIcon,
    NavbarSticky,
    NavSticky,
    NavMobile,
    GradientLine,
    LogoTypeSmall,
    } from './Navbar.elements'
    
import { IconContext } from 'react-icons/lib';
import { FaYoutube } from 'react-icons/fa';
import { RiUser3Fill, RiTwitterFill, RiMenuFill } from 'react-icons/ri';

import DigidenLight from '../../images/digiden-type-light.svg'

const NavbarScroll = ({isScroll}) => {
    return (
        <>
            <IconContext.Provider value={{ size: 20, color: '#e6e6e6', cursor: 'pointer' }}>
                <NavbarSticky isScroll={isScroll}>
                    <GradientLine />                    
                    <Navbar>
                        <LogoTypeSmall  onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/" src={DigidenLight} />
                        <NavSticky  onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/" isFirst={true}>Reviews</NavSticky>
                        <NavSticky onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/">Tech</NavSticky>
                        <NavSticky onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/">Science</NavSticky>
                        <NavSticky onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/">Gaming</NavSticky>
                        <NavIcon><RiUser3Fill /></NavIcon>
                        <NavIcon><RiTwitterFill /></NavIcon>
                        <NavIcon><FaYoutube /></NavIcon>
                        <NavMobile><RiMenuFill /></NavMobile>
                    </Navbar>
                </NavbarSticky>
            </IconContext.Provider>
        </>
    )
}

export default NavbarScroll;