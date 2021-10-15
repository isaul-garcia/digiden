import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const SectionContainer = styled.div`
    width: 80%;
    height: 100%;
    display: flex;
    margin: auto;
    
    @media screen and (max-width: 991px) {
        width: 100%;
        display: inline-block;
    }
`

export const LinksSection = styled.div`
    position: relative;
    width: 100%;
    background-color: #000;
    padding-top: 30px;
    padding-bottom: 30px;
    
    @media screen and (max-width: 991px) {
        padding-top: 0px;
        padding-bottom: 0px;
    }
`

export const LinksColumn = styled.div`
    flex: 25%;
    flex-wrap: wrap;
    width: 25%;
    padding: 2em 0em;
    margin-right: 2em;
    border-right: 1px solid #6d6c6b;

    &:last-child{
    margin-right: -8em;
    border-right: 0px;
    }

    @media screen and (max-width: 991px) {
        width: 50%;
        height: 140px;
        padding: 0em;
        padding-left: 5px;
        margin-right: 0;
        margin-top: 30px;
        display: inline-block;
        border-right: 1px solid #000;
    }
`

export const Title = styled.h3`
    font-weight: 400;
    font-size: 1.2em;
    color: #e3e3e8;
    margin-bottom: 0.5em;
`

export const SingleLink = styled(Link)`
    font-weight: 400;
    font-size: 1em;
    color: #6d6c6b;
    text-decoration: none;
    display: block;

    &:hover{
    color: #dffe1c;
    }
`

export const SocialsSection = styled.div`
    position: relative;
    width: 100%;
    background-color: #161616;
`

export const Subscribe = styled.div`
    width: 33.33%;
    position: relative;
    margin-left: 220px;

    @media screen and (max-width: 991px) {
        width: 50%;
        margin-left: 210px;
        height: 120px;
    }
`

export const SubForm = styled.input`
    height: 42px;
    border: none;
    margin: 20px 0px;
    margin-right: 0px;
    padding-left: 15px;
    
    @media screen and (max-width: 991px) {
        width: 94%;
        margin: 10px 0px;
    }
`

export const SubButton = styled.button`
    outline: none;
    border: 1px solid white;
    height: 42px;
    margin: 10px;
    padding: 0px 20px;
    background-color: rgba(200,200,200,0);
    color: white;

    &:hover{
    background-color: rgba(37,35,33,0.5);   
    cursor: pointer; 
    }

    @media screen and (max-width: 991px) {
        width: 94%;
        margin: 0;
    }
`

export const SocialIcons = styled.div`
    width: 33.33%;
    position: relative;
    float: right;
    margin-left: 33.33%;
    
    @media screen and (max-width: 991px) {
        width: 50%;        
        margin-left: 0%;
    }
`

export const Icon = styled.div`
    height: 50px;
    padding: 1.6em 0.5em;
    float: right;
    cursor: pointer;
    margin-left: 0.5em;
    transition: all .1s ease-in-out;

    &:hover{
        opacity: 0.5;
    }

    @media screen and (max-width: 991px) {
        padding: 0.5em 1em 0em 0em;
    }
`

export const TermsSection = styled.div`
    position: relative;
    width: 100%;
    background-color: #000;
    padding-top: 1.5em;

    @media screen and (max-width: 991px) {
        outline: 1px solid #000;
    }
`

export const Copyright = styled.div`
    font-size: 1em;
    margin-bottom: 0.5em;
    color: #7c7c7c;
`

export const Terms = styled.div`
    width: 100%;
    display: inline-block;
    margin-bottom: 1.5em;
`

export const TermLinks = styled(Link)`
    font-size: 0.75em;
    margin-right: 1em;
    color: #7c7c7c;
    text-decoration: none;

    &:hover{
    color: #979797;
    }
`

export const LogoTypeMedium = styled.img`
    height: 100%;
    width: 200px;
    display: inline-block;
    padding: 1em 2.25em;
    position: absolute;
    z-index: 999;
    transition: all .1s ease-in-out;
    background-color: #dffe1c;   
`