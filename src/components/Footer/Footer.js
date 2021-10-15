import React from 'react';
import {
    LinksSection,
    SectionContainer,
    LinksColumn,
    Title,
    SingleLink,
    SocialsSection,
    SocialIcons,
    Icon,
    Subscribe,
    SubForm,
    SubButton,
    TermsSection,
    Terms,
    Copyright,
    TermLinks,
    LogoTypeMedium,
    } from './Footer.elements';
    
import { IconContext } from 'react-icons/lib';
import { FaYoutube } from 'react-icons/fa';
import {  RiTwitterFill } from 'react-icons/ri';

import Digiden from '../../images/digiden-type.svg';

const Navbox = () => {
    return (
        <>
            <IconContext.Provider value={{ size: 30, color: 'white', cursor: 'pointer' }}>
                <LinksSection>
                    <SectionContainer>
                        <LinksColumn>
                            <Title>About</Title>
                            <SingleLink>About digiden</SingleLink>
                            <SingleLink>About our Ads</SingleLink>
                            <SingleLink>FAQ</SingleLink>
                            <SingleLink>RSS Feed</SingleLink>
                        </LinksColumn>
                        <LinksColumn>
                            <Title>Sections</Title>
                            <SingleLink>Reviews</SingleLink>
                            <SingleLink>Tech</SingleLink>
                            <SingleLink>Gaming</SingleLink>
                            <SingleLink>Entertainment</SingleLink>
                            <SingleLink>Buyers Guide</SingleLink>
                            <SingleLink>Videos</SingleLink>
                            <SingleLink>Podcasts</SingleLink>
                        </LinksColumn>
                        <LinksColumn>
                            <Title>Contribute</Title>
                            <SingleLink>Comment Guidelines</SingleLink>
                            <SingleLink>Support</SingleLink>
                            <SingleLink>Tip Us</SingleLink>
                        </LinksColumn>
                        <LinksColumn>
                            <Title>International</Title>
                            <SingleLink>es.digiden.com</SingleLink>
                            <SingleLink>jp.digiden.com</SingleLink>
                            <SingleLink>cn.digiden.com</SingleLink>
                        </LinksColumn>
                    </SectionContainer>
                </LinksSection>

                <SocialsSection>
                    <SectionContainer>
                        <LogoTypeMedium src={Digiden} />
                        <Subscribe>
                            <SubForm placeholder="Join our email list?"/>
                            <SubButton>Submit</SubButton>
                        </Subscribe>
                        <SocialIcons>
                            <Icon><FaYoutube /></Icon>
                            <Icon><RiTwitterFill /></Icon>
                        </SocialIcons>
                    </SectionContainer>
                </SocialsSection>

                <TermsSection>
                    <SectionContainer>
                        <Terms>
                        <Copyright>© 2021 Digiden Co.</Copyright>
                            <TermLinks>About Digiden Co.</TermLinks>
                            <TermLinks>Permissions</TermLinks>
                            <TermLinks>Suggestions</TermLinks>
                            <TermLinks>Privacy Policy</TermLinks>
                            <TermLinks>Terms of Service</TermLinks>
                            <TermLinks>Trademarks</TermLinks>
                        </Terms>
                    </SectionContainer>
                </TermsSection>
            </IconContext.Provider>
        </>
    )
}

export default Navbox;