import React from 'react';
import {
    TextContainer,
    MidText,
    ArticleContainer,
    ArticleTop,
    WriterInfo,
    Headline,
    Description,
    Name,
    MainImage,
    WriterAvi,
    AtName,
    SectionImage,
    Divider,
    Tags,
    Date,
    WrittenPart,
    Paragraph,
    ImageReference,
    TheImage,
    CommentSection,
    ConversationText,
    AllComments,
    SingleComment,
    TimeStamp,
    Comment,
    Feedback,
    CommentArea,
    UserAvi,
    CommentInput
} from './Article.elements';
import { Related } from '../../components'
import Image1 from '../../images/dd-gbuds.jpg'
import Image2 from '../../images/all-gbuds.jpg'
import user1 from '../../images/user1.jpg'
import user2 from '../../images/user2.jpg'
import user3 from '../../images/user3.jpg'
import user4 from '../../images/user4.jpg'


const Navbox = () => {
    return (
        <> 
            <TextContainer><MidText>Google</MidText></TextContainer>
            <ArticleContainer>            
                <ArticleTop>
                <Headline>New Google Buds Announced for pre-sale</Headline>
                    <Description>Presented in green and gray, the new buds are tinier that the previous models.</Description>

                    <SectionImage>
                        <WriterInfo>
                            <WriterAvi src={user1} />
                            <Name>Maya Torres</Name>
                            <AtName>@MayaT</AtName>
                            <Divider />
                            <Date>Jul 01 2021</Date>
                            <Tags>Audio </Tags>
                            <Tags>Google </Tags>
                            <Tags>New Release </Tags>
                            <Tags>Earbuds </Tags>
                        </WriterInfo>
                        
                        <MainImage src={Image1} />
                    </SectionImage>

                    <WrittenPart>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor.
                        </Paragraph>
                        <ImageReference>
                            <TheImage src={Image2} />
                            <Tags>All of Pixel Buds' Colors Available at launch. | image: Google</Tags>
                        </ImageReference>
                        <Paragraph>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam. In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis quis ligula lacinia aliquet. Mauris ipsum. 
                        </Paragraph>
                        <Paragraph>
                        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nam nec ante. Sed lacinia, urna non tincidunt mattis, tortor neque adipiscing diam, a cursus ipsum ante quis turpis. Nulla facilisi. Ut fringilla. Suspendisse potenti. Nunc feugiat mi a tellus consequat imperdiet. Vestibulum sapien. Proin quam. Etiam ultrices.
                        </Paragraph>
                    </WrittenPart>

                    <CommentSection>
                        <ConversationText>Conversation</ConversationText>
                        <AllComments>
                            <CommentInput placeholder="What do you think?"></CommentInput>

                            <SingleComment>
                                <UserAvi src={user3} />
                                <CommentArea>
                                    <AtName>Victor M. </AtName>
                                    <TimeStamp>5 hours ago</TimeStamp>
                                    <Comment>They look like beans.</Comment>
                                    <Feedback>Up Down</Feedback>
                                </CommentArea>
                            </SingleComment>

                            <SingleComment>
                                <UserAvi src={user4} />
                                <CommentArea>
                                    <AtName>Jay V. </AtName>
                                    <TimeStamp>5 hours ago</TimeStamp>
                                    <Comment>I'm hoping they're cheaper than the Air Pods. Then I might just buy them.</Comment>
                                    <Feedback>Up Down</Feedback>
                                </CommentArea>
                            </SingleComment>

                            <SingleComment>
                                <UserAvi src={user2} />
                                <CommentArea>
                                    <AtName>Tom Deward </AtName>
                                    <TimeStamp>5 hours ago</TimeStamp>
                                    <Comment>It's looking good for these earbuds, the sound quality should be nice and confy. I will definitely grab these as soon as they're out. I feel like they might just be cheaper that the Apple ones, making them that much a better sale.</Comment>
                                    <Feedback>Up Down</Feedback>
                                </CommentArea>
                            </SingleComment>
                        </AllComments>
                    </CommentSection>
                    
                    <Related />

                </ArticleTop>
            </ArticleContainer>
        </>
    )
}

export default Navbox;