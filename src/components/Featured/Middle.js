import React from 'react';
import {
    ArticleGallery,
    MiddleContainer,
    TextContainer,
    ArticleThumbnailVertical,
    ThumbnailTextWrapVertical,
    ThumbnailHeading,
    ThumbnailInfo,
    ThumbnailImageVertical,
    MidText,
    ThumbnailContainerVertical,
    ThumbnailAuthor,
    UserAvi,
    TextArea,
    SomeText,
    AtName,
    TimeStamp,
    Comments
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
        <TextContainer><MidText>Top News</MidText></TextContainer>
            <MiddleContainer>
                <ArticleGallery>
                <ArticleThumbnailVertical onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainerVertical>
                            <ThumbnailImageVertical src={Image5} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>This is the Pixel 6, Google's take on an 'Ultra High End' phone</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>Google’s new Tensor SoC is the heart of its next phone</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapVertical>
                        </ThumbnailContainerVertical>
                    </ArticleThumbnailVertical>

                    <ArticleThumbnailVertical onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainerVertical>
                            <ThumbnailImageVertical src={Image4} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>Bird tests geofencing system to slow scooters in pedestrian-heavy areas</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>Community Safety Zones limit the vehicles to speeds no greater than 8 miles per hour.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapVertical>
                        </ThumbnailContainerVertical>
                    </ArticleThumbnailVertical>

                    <ArticleThumbnailVertical onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainerVertical>
                            <ThumbnailImageVertical src={Image3} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>The Magic Keyboard with Touch ID is now available separately for $149</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapVertical>
                        </ThumbnailContainerVertical>
                    </ArticleThumbnailVertical>

                    <ArticleThumbnailVertical onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainerVertical>
                            <ThumbnailImageVertical src={Image2} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>Spotify is testing whether free users will pay a dollar to skip tracks</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>The cheaper monthly tier also lets you choose songs on albums and playlists for playback.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user2} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Tom Deward</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapVertical>
                        </ThumbnailContainerVertical>
                    </ArticleThumbnailVertical>

                    <ArticleThumbnailVertical onClick={() => {window.scrollTo({top: 0, behavior: "smooth"});}} to="/article">
                        <ThumbnailContainerVertical>
                            <ThumbnailImageVertical src={Image1} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>New Google Buds Announced for pre-sale.</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>Presented in green and gray, the new buds are tinier that the previous models.</ThumbnailInfo>
                                <ThumbnailAuthor>
                                    <UserAvi src={user1} />
                                    <TextArea>                                        
                                        <SomeText>By </SomeText>
                                        <AtName>Maya Torres</AtName>
                                        <TimeStamp>, 5 hours ago</TimeStamp>
                                        <Comments>Comments 49</Comments>
                                    </TextArea>
                                </ThumbnailAuthor>
                            </ThumbnailTextWrapVertical>
                        </ThumbnailContainerVertical>
                    </ArticleThumbnailVertical>
                </ArticleGallery>
            </MiddleContainer>
        </>
    )
}

export default Navbox;