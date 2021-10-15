import React from 'react';
import {
    ArticleGalleryFeed,
    FeedContainer,
    ArticleThumbnailWide,
    ThumbnailTextWrapWide,
    ThumbnailHeading,
    ThumbnailInfo,
    ThumbnailImageWide,
    LoadMore,
    LoadText,
    TextContainer,
    MidText,
    ThumbnailContainer,
    ThumbnailAuthor,
    UserAvi,
    TextArea,
    AtName,
    TimeStamp,
    Comments,
    SomeText,
} from './Featured.elements';

import Image1 from '../../images/dd-gbuds.jpg'
import Image2 from '../../images/dd-spotify.png'
import Image3 from '../../images/dd-mac.png'
import Image4 from '../../images/dd-scooters.png'
import Image5 from '../../images/dd-google.jpg'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'

const Navbox = () => {
    return (
        <>   
        <TextContainer><MidText greenIt={true}>All Posts</MidText></TextContainer>
            <FeedContainer>
                <ArticleGalleryFeed>
                    <ArticleThumbnailWide onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImageWide src={Image1} />
                            <ThumbnailTextWrapWide>
                                <ThumbnailHeading>New Google Buds Announced for pre-sale</ThumbnailHeading>
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
                            </ThumbnailTextWrapWide>
                        </ThumbnailContainer>
                    </ArticleThumbnailWide>

                    <ArticleThumbnailWide onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImageWide src={Image2} />
                            <ThumbnailTextWrapWide>
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
                            </ThumbnailTextWrapWide>
                        </ThumbnailContainer>
                    </ArticleThumbnailWide>
                    
                    <ArticleThumbnailWide onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImageWide src={Image3} />
                            <ThumbnailTextWrapWide>
                                <ThumbnailHeading>The Magic Keyboard with Touch ID is now available separately for $149</ThumbnailHeading>
                                <ThumbnailInfo>A version with a number pad is available for $179.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapWide>
                        </ThumbnailContainer>
                    </ArticleThumbnailWide>
                    
                    <ArticleThumbnailWide onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImageWide src={Image4} />
                            <ThumbnailTextWrapWide>
                                <ThumbnailHeading>Bird tests geofencing system to slow scooters in pedestrian-heavy areas</ThumbnailHeading>
                                <ThumbnailInfo>Community Safety Zones limit the vehicles to speeds no greater than 8 miles per hour.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapWide>
                        </ThumbnailContainer>
                    </ArticleThumbnailWide>
                    
                    <ArticleThumbnailWide onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainer>
                            <ThumbnailImageWide src={Image5} />
                            <ThumbnailTextWrapWide>
                                <ThumbnailHeading>This is the Pixel 6, Google's take on an 'Ultra High End' phone</ThumbnailHeading>
                                <ThumbnailInfo>Google’s new Tensor SoC is the heart of its next phone</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapWide>
                        </ThumbnailContainer>
                    </ArticleThumbnailWide>

                    <LoadMore>
                        <LoadText>Load More Articles</LoadText>
                    </LoadMore>
                </ArticleGalleryFeed>
            </FeedContainer>
        </>
    )
}

export default Navbox;