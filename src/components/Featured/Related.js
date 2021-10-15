import React from 'react';
import {
    ArticleGallery,
    RelatedTextContainer,
    ArticleThumbnailVertical,
    ThumbnailTextWrapVertical,
    ThumbnailHeading,
    ThumbnailInfo,
    ThumbnailImageVertical,
    ThumbnailContainerVertical,
    MidText,
    ThumbnailAuthor,
    UserAvi,
    TextArea,
    SomeText,
    AtName,
    TimeStamp,
    Comments
} from './Featured.elements';
import Image2 from '../../images/dd-spotify.png'
import Image3 from '../../images/dd-mac.png'
import Image4 from '../../images/dd-scooters.png'
import Image6 from '../../images/dd-switch.png'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'

const Navbox = () => {
    return (
        <> 
        <RelatedTextContainer><MidText>Related News</MidText></RelatedTextContainer>
            <ArticleGallery>
                <ArticleThumbnailVertical>
                    <ThumbnailContainerVertical>
                        <ThumbnailImageVertical src={Image6} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>Nintendo Switch OLED model will go on sale October 8th for $350</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>Nintendo’s new Switch is official</ThumbnailInfo>
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

                <ArticleThumbnailVertical>
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

                <ArticleThumbnailVertical>
                    <ThumbnailContainerVertical>
                        <ThumbnailImageVertical src={Image3} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>The Magic Keyboard with Touch ID is now available</ThumbnailHeading>
                                <ThumbnailInfo hide={true}>A version with a number pad is available for $179.</ThumbnailInfo>
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

                <ArticleThumbnailVertical>
                    <ThumbnailContainerVertical>
                        <ThumbnailImageVertical src={Image4} />
                            <ThumbnailTextWrapVertical>
                                <ThumbnailHeading vertical={true}>Bird tests system to slow scooters in pedestrian-heavy areas</ThumbnailHeading>
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
            </ArticleGallery>
        </>
    )
}

export default Navbox;