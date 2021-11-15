import React from 'react';
import {
    TopContainer,
    Top,
    LogoType,
    NavbarContainer,
    Navbar,
    Nav,
    NavIcon,
    DateText,
    LinkThis
    } from './Navbar.elements'
    
import { IconContext } from 'react-icons/lib';
import { FaYoutube } from 'react-icons/fa';
import { RiUser3Fill, RiTwitterFill } from 'react-icons/ri';

import DigidenLight from '../../images/digiden-type.svg'

const Navbox = () => {
    const d = (new Date()).toString().split(' ').splice(1,3).join(' ');
    return (
        <>
            <IconContext.Provider value={{ size: 20, color: '#e6e6e6', cursor: 'pointer' }}>
                <TopContainer>
                    <Top />
                    <DateText>{d}</DateText>
                    <LinkThis to="/digiden"><LogoType src={DigidenLight} /></LinkThis>
                </TopContainer>
                <NavbarContainer>
                    <Navbar>
                        <Nav to="/digiden">Reviews</Nav>
                        <Nav onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/digiden">Tech</Nav>
                        <Nav onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/digiden">Science</Nav>
                        <Nav onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/digiden">Gaming</Nav>
                        <NavIcon><RiUser3Fill /></NavIcon>
                        <NavIcon><RiTwitterFill /></NavIcon>
                        <NavIcon><FaYoutube /></NavIcon>
                    </Navbar>
                </NavbarContainer>
            </IconContext.Provider>
        </>
    )
}

export default Navbox;