import React from 'react';
import {useHistory} from 'react-router-dom';
import {
    ArticleGallery,
    FeaturedContainer,
    ArticleThumbnail,
    ArticleThumbnailX,
    ArticleThumbnailSingle,
    ArticleThumbnailThree,
    ThumbnailTextWrap,
    ThumbnailHeading,
    ThumbnailInfo,
    ThumbnailImage,
    ThumbnailContainer,
    ThumbnailAuthor,
    UserAvi,
    TextArea,
    SomeText,
    AtName,
    TimeStamp,
    Comments,
} from './Featured.elements';

import Image1 from '../../images/dd-gbuds.jpg'
import Image2 from '../../images/dd-spotify.png'
import Image3 from '../../images/dd-mac.jpg'
import Image4 from '../../images/dd-scooters.png'
import Image5 from '../../images/dd-google.jpg'
import Image6 from '../../images/dd-switch.png'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'

const Navbox = () => {
    let history = useHistory()
    return (
        <>   
            <FeaturedContainer>
                <ArticleGallery>
                    <ArticleThumbnailX onClick={()=>history.push('/article')}>
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image1} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading>New Google Buds Announced for pre-sale.</ThumbnailHeading>
                                <ThumbnailInfo>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnailX>
                    
                    <ArticleThumbnail onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image2} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading>Spotify is testing whether free users will pay a dollar to skip tracks</ThumbnailHeading>
                                <ThumbnailInfo>The cheaper monthly tier also lets you choose songs on albums and playlists for playback.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnail>
                    
                    <ArticleThumbnailSingle onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image3} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading large={true}>The Magic Keyboard with Touch ID is now available separately for $149</ThumbnailHeading>
                                <ThumbnailInfo large={true}>A version with a number pad is available for $179.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnailSingle>

                    <ArticleThumbnailThree onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image4} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading small={true}>Bird tests system to slow scooters in pedestrian-heavy areas</ThumbnailHeading>
                                <ThumbnailInfo small={true}>Community Safety Zones limit the vehicles to speeds no greater than 8 miles per hour.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnailThree>

                    <ArticleThumbnailThree onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image5} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading small={true}>This is the Pixel 6, Google's take on an 'Ultra High End' phone</ThumbnailHeading>
                                <ThumbnailInfo small={true}>Google’s new Tensor SoC is the heart of its next phone.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnailThree>

                    <ArticleThumbnailThree onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImage src={Image6} />
                            <ThumbnailTextWrap>
                                <ThumbnailHeading small={true}>Nintendo Switch OLED model will go on sale October 8th for $350</ThumbnailHeading>
                                <ThumbnailInfo small={true}>Nintendo’s new Switch is official.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrap>
                        </ThumbnailContainer>
                    </ArticleThumbnailThree>
                </ArticleGallery>
            </FeaturedContainer>
        </>
    )
}

export default Navbox;