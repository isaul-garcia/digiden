import styled from 'styled-components/macro'

export const Container = styled.div`
    position: relative;
    margin: auto;
    width: 80%;

    @media screen and (max-width: 991px) {
        width: 96%;
    }
`

export const TextContainer = styled(Container)`
    height: 1em;
    margin-top: 1em;

    @media screen and (max-width: 991px) {
        width: 94%;
    }
`

export const MidText = styled.a`
    font-size: 1.25em;
    line-height: 1.25em;
    font-weight: 200;
    position: absolute;
    margin-bottom: 0.5em;
    margin-top: 0.5em;
    color: #111113;
    border-bottom: 5px solid ${({greenIt}) => (greenIt ? '#dffe1c' : '#3f49ff')};
`

export const ArticleContainer = styled(Container)`
    margin-bottom: 2em;
`

export const ArticleTop = styled.div`
    margin-top: 2em;
    width: 80%;
    display: flex;
    flex-wrap: wrap;

    @media screen and (max-width: 991px) {
        width: 99%;
        margin-left: 1%;
    }
`

export const SectionImage = styled.div`
    margin-top: 2em;
    position: relative;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const WriterInfo = styled.div`
    width: 25%;
    flex: 25%;
    display: inline-block;
    padding-right: 3em;

    @media screen and (max-width: 991px) {
        width: 100%;
        flex: 100%;
        margin-bottom: 25px;
        padding-right: 0;
    }
`

export const MainImage = styled.img`
    width: 75%;
    flex: 75%;
    object-fit: cover;

    @media screen and (max-width: 991px) {
        width: 100%;
        flex: 100%;
    }
`

export const Headline = styled.h2`
    font-size: 4.5em;
    line-height: 1em;
    font-weight: 700;
    letter-spacing: -3px;
    display: block;
    margin-bottom: 0.2em;
    margin-top: 0.1em;

    @media screen and (max-width: 991px) {
        font-size: 2.75em;
    }
`

export const Description = styled.a`
    font-size: 1.5em;
    line-height: 1.2em;
    font-weight: 200;
    bottom: 0;
    color: #111113;
    display: block;
`

export const Name = styled.a`
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.2em;
    color: #111113;
    display: block;
`

export const AtName = styled.a`
    font-size: 0.85em;
    line-height: 1em;
    color: #111113;

    @media screen and (max-width: 991px) {
        text-align: right;
    }
`

export const Tags = styled(AtName)`
    color: #949494;
    
    @media screen and (max-width: 991px) {
        text-align: right;
        display: block;
    }
`

export const Date = styled(AtName)`
    display: block;
    margin-bottom: 0.2em;

    @media screen and (max-width: 991px) {
        margin-bottom: 20px;
    }
`

export const WriterAvi = styled.img`
    width: 4em;
    height: 6em;
    object-fit: cover;
    border-radius: 8em;
    margin-bottom: 1em;
    display: block;
`

export const Divider = styled.div`
    width: 100%;
    height: 1em;
    margin-bottom: 1em;
    border-bottom: 1px solid #333333;

    @media screen and (max-width: 991px) {
        border-bottom: 0px solid #333333;
        margin-top: -122px;
    }
`

export const WrittenPart = styled.div`
    float: right;
    margin-left: 25%;
    width: 75%;

    @media screen and (max-width: 991px) {
        margin-left: 0%;
        width: 100%;
    }
`

export const Paragraph = styled.p`
    margin: 1.2em 0em;
    font-size: 1.25em;
    font-weight: 100;
`

export const ImageReference = styled.div`
    max-height: 600px;
`

export const TheImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`

export const CommentSection = styled.div`
    width: 75%;
    margin-left: 25%;
    margin-top: 3em;

    @media screen and (max-width: 991px) {
        margin-left: 0%;
        width: 100%;
    }
`

export const ConversationText = styled(MidText)`
    position: relative;
    border-bottom: 5px solid #dffe1c;
`

export const AllComments = styled.div`
    margin-top: 2em;
`

export const CommentInput = styled.input`
    height: 2em;
    border: 1px solid #c0c0c0;
    margin: 20px 0px;
    margin-right: 0px;
    padding-left: 15px;
    background-color: #e8e7e3;
    border-radius: 0.25em;
    font-family: 'Chivo', sans-serif;
    font-size: 1.2em;
    padding: 0.5em;
    width: 100%;
`

export const SingleComment = styled.div`
    display: inline-block;
    border-top: 1px solid #c0c0c0;
    width: 100%;
    padding: 0.25em 0em;
    background-color: #e9e6e2;
    margin-top: 0.25em;
`

export const CommentArea = styled.div`
    display: inline-block;
    width: 85%;

    @media screen and (max-width: 991px) {
        width: 75%;
    }
`

export const UserAvi = styled(WriterAvi)`
    width: 3em;
    height: 4em;
    display: inline-block;
    margin-right: 1em;
    margin-left: 0.75em;
    margin-bottom: 0em;
    top: 0;
`

export const TimeStamp = styled(Tags)`

`

export const Comment = styled(Name)`
    margin-top: 1em;
`

export const Feedback = styled(AtName)`
    color: #7e7e7e;
`

