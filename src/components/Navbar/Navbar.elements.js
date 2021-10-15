import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'


/* colores viejos */
/* #48ffbb #3bff51 #3f49ff #9c9c9c */

/* colores nuevos */
/* rgba(223,254,28,1) rgba(253,249,240,1) rgba(0,0,0,1)*/
/* #dffe1c #fdf9f0 #000000*/

export const TopContainer = styled.div`
    z-index: 10;
	top: 0;
	left: 0;
	right: 0;
	height: 0;    
	text-align: center;
    align-items: center;
    background: #fdf9f0;
    background: radial-gradient(circle, rgba(223,254,28,1) 40%, rgba(253,249,240,1) 71%, rgba(253,249,240,1) 100%);
    height: 200px;
    width: 100%;
    transition: all .3s ease-in-out;

    &:hover{
        margin-left: 15%;
        width: 70%;
    }
`

export const GradientLine = styled.div`
    background: #fdf9f0;
    background: radial-gradient(circle, rgba(223,254,28,1) 40%, rgba(253,249,240,1) 71%, rgba(253,249,240,1) 85%, rgba(253,249,240,0) 100%);
    height: 5px;
    margin-top: -6px;
    z-index: 999;
`

export const Top = styled.span`
    color: #000;
    display: inline-block;
    vertical-align: middle;
`

export const LinkThis = styled(Link)`
    cursor: default;
`

export const LogoType = styled.img`
    width: 280px;
    height: 80%;
    display: block;
    margin: auto;
    margin-top: -0.4em;
    cursor: pointer;
    transition: all .3s ease-in-out;

    &:hover{
        width: 300px;
    }
`

export const LogoTypeSmall = styled.img`
    height: 52px;
    width: 150px;
    display: inline-block;
    padding: 0.85em 1em 0.80em 0.9em;
    position: absolute;
    border-radius: 10px 0px 0px 10px;
    border: 1px solid #565656;
    border-left: 0px solid #000;
    z-index: 999;
    cursor: pointer;
    transition: all .1s ease-in-out;

    &:hover{
        background-color: #1c1c20;
    }
`

export const NavbarContainer = styled.div`
    width: 80%;
    margin-left: 10%;
    height: 50px;
    background-color: #000000;
    border: 1px solid #565656;
    border-radius: 10px;
    z-index: 999;
    
    @media screen and (max-width: 1500px) {
        width: 95%;
        margin-left: 2.5%;
    }
    
    @media screen and (max-width: 991px) {
        width: 99%;
        margin-left: 0.5%;
    }
`

export const NavbarSticky = styled.div`
    margin-left: 9.95%;
    background-color: #000000;
    border: 1px solid #565656;
    border-radius: 10px;
    margin-top: 0px;
    height: 52px;
    transition-duration: 0.25s;
    position: fixed;
    width: 80.1%;
    top: 0;
    z-index: 999;
    margin-top: ${({isScroll}) => (isScroll ? '5px' : '-55px')};
    
    @media screen and (max-width: 1500px) {
        width: 95%;
        margin-left: 2.5%;
    }

    @media screen and (max-width: 991px) {
        width: 99%;
        margin-left: 0.5%;
    }
`

export const BackBlock = styled.div`
    width: 101%;
    margin-left: -0.5%;
    height: 42px;
    background-color: #fdf9f0;
    position: absolute;
    margin-top: ${({isScroll}) => (isScroll ? '-5px' : '-55px')};
    z-index: 500;
    border: 1px red solid;
`

export const Navbar = styled.div`
    display: relative;
    width: 100%;
    margin: auto;
    z-index: 999;
`

export const Nav = styled(Link)`
    display: inline-block;
    color: #e6e6e6;
    height: 46px;
    padding: 0.8em 1.1em;
    font-weight: 400;
    text-decoration: none;    
    background-color: rgba(0,0,0,0);
    border-radius: 8px;
    margin: 1px;
    transition: all .1s ease-in-out;
    border: 1px solid #000;
    z-index: 999;

    &:hover {
    background-color: rgba(46,46,46,1);
    border: 1px solid #000;
    }
    
    @media screen and (max-width: 991px) {
        width: 25%;
        text-align: center;
        margin: 0;
        height: 48px;
    }
`

export const NavSticky = styled(Nav)`
    margin-top: 3px;
    padding: 0.8em 1.3em;
    padding-top: 0.75em;
    z-index: 999;
    border-radius: 5px;
    margin-left: ${({isFirst}) => (isFirst ? '151px' : '0px')};

    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const NavIcon = styled.div`
    height: 50px;
    width: 50px;
    padding: 0.85em;
    float: right;
    cursor: pointer;
    margin-left: 0.5em;
    transition: all .1s ease-in-out;
    z-index: 999;

    &:hover{
    opacity: 0.5;
    }
    
    @media screen and (max-width: 991px) {
        display: none;
    }
`

export const NavMobile = styled.div`
    height: 50px;
    width: 50px;
    padding: 0.95em;
    float: right;
    cursor: pointer;
    margin-left: 0.5em;
    transition: all .1s ease-in-out;
    z-index: 999;
    display: none;

    @media screen and (max-width: 991px) {
        display: inline-block;
    }
`

export const DateText = styled.a`
    display: inline-block;
    color: #000;
    height: 50px;
    font-weight: 400;
    text-decoration: none;    
    margin-top: 10px;
    margin-bottom: -10em;
`