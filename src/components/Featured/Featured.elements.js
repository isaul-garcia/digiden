import styled from 'styled-components/macro'
import { Link } from 'react-router-dom'

export const FeaturedContainer = styled.div`
    position: relative;
    margin: auto;
    width: 80%;
    height: 129vh;

    @media screen and (max-width: 1500px) {
        width: 95%;
    }

    @media screen and (max-width: 991px) {
        width: 99%;
        height: 2300px;
    }
`

export const MiddleContainer = styled(FeaturedContainer)`
    height: 46vh;
    
    @media screen and (max-width: 991px) {
        height: 2020px;
    }
`

export const TextContainer = styled(FeaturedContainer)`
    height: 1em;
`

export const RelatedTextContainer = styled(FeaturedContainer)`
    height: 1em;
    width: 100%;
    margin-top: 2em;
`

export const FeedContainer = styled(FeaturedContainer)`
    margin-bottom: 16em;
    
    @media screen and (max-width: 991px) {
        height: 1170px;
    }
`

/* gallery */
/* gallery */
/* gallery */

export const ArticleGallery = styled.div`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    padding: 0.25%;
    border: 1px solid #dcd7cd;
    overflow: hidden; 
    margin-top: 2em;
`

export const ArticleGalleryFeed = styled(ArticleGallery)`
    width: 75%;
    
    @media screen and (max-width: 991px) {
        width: 100%;
    }
`

/* single */

export const ArticleThumbnail = styled(Link)`
    position: relative;
    flex: 49%;
    padding: 0.25%;
    height: 38vh;
    display: flex;
    cursor: pointer;
    transition-duration: 0.25s;
    color: #111113;
    overflow: hidden;
    text-decoration: none;

    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 380px;
        padding: 0.25% 0.25% 2% 0.25%;

        &:last-child{
        padding: 0.25% 0.25% 0.25% 0.25%;
    }
    }
`

export const ArticleThumbnailX = styled.span`
    position: relative;
    flex: 49%;
    padding: 0.25%;
    height: 38vh;
    display: flex;
    cursor: pointer;
    transition-duration: 0.25s;
    color: #111113;
    overflow: hidden;
    text-decoration: none;

    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 380px;
        padding: 0.25% 0.25% 2% 0.25%;

        &:last-child{
        padding: 0.25% 0.25% 0.25% 0.25%;
    }
    }
`

export const ArticleThumbnailSingle = styled(ArticleThumbnail)`
    flex: 100%;
    height: 45vh;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 380px;
    }
`

export const ArticleThumbnailThree = styled(ArticleThumbnail)`
    flex: 33.33%;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 380px;
    }
`

export const ArticleThumbnailWide = styled(ArticleThumbnail)`
    width: 100%;
    flex: 100%;
    height: 25vh;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 250px;
    }
`

export const ArticleThumbnailVertical = styled(ArticleThumbnail)`
    flex-direction: column;
    flex: 20%;
    width: 20%;
    height: 42vh;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        height: 400px;
    }
`
/* thumbnail */
/* thumbnail */
/* thumbnail */

export const ThumbnailContainer = styled.div`
    position: relative;
    flex: 50%;
    display: flex;
    cursor: pointer;
    transition-duration: 0.25s;
    overflow: hidden;
    background-color: #eae6df;

    &:hover{    
        background-color: #d8d2c7;
        opacity: 0.9;
    }

    @media screen and (max-width: 991px) {
        flex: 100%;
        width: 100%;
        border-radius: 8px;
    }
`

export const ThumbnailContainerVertical = styled.div`
    position: relative;
    flex-direction: column;
    display: flex;
    cursor: pointer;
    transition-duration: 0.25s;
    overflow: hidden;
    background-color: #eae6df;
    height: 100%;

    &:hover{    
    background-color: #d8d2c7;
        opacity: 0.9;
    }

    @media screen and (max-width: 991px) {
        flex: 100%;
        width: 100%;
        flex-direction: column;
        border-radius: 8px;
    }
`

export const ThumbnailTextWrap = styled.div`
    flex: 50%;
    width: 50%;
    height: 100%;
    position: relative;
    float: right;
    padding: 12px;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        width: 100%;
    }
`

export const ThumbnailTextWrapVertical = styled(ThumbnailTextWrap)`
    flex: 50%;
    flex-direction: column;
    width: 100%;
`

export const ThumbnailTextWrapWide = styled(ThumbnailTextWrap)`
    flex: 66.66%;
    width: 66.66%;
    
    @media screen and (max-width: 991px) {
        flex: 100%;
        width: 100%;
    }
`

/* thumbnail text */
/* thumbnail text */
/* thumbnail text */

export const ThumbnailHeading = styled.h4`
    font-size: 3em;
    line-height: 1em;
    font-weight: 400;
    letter-spacing: -1px;

    ${({large}) => (large ? `font-size: 4.25em;` : '')}
    ${({small}) => (small ? `font-size: 2.5em;` : '')}
    ${({vertical}) => (vertical ? `font-size: 2em;` : '')}

    @media screen and (max-width: 1500px) {
        font-size: 2.4em;
        text-decoration: none;
        ${({large}) => (large ? `font-size: 4em;` : '')}
        ${({small}) => (small ? `font-size: 1.75em;` : '')}
        ${({vertical}) => (vertical ? `font-size: 1.5em;` : '')}
    }

    @media screen and (max-width: 991px) {
        font-size: 2.25em;
    }
`

export const ThumbnailInfo = styled.a`
    font-size: 1.2em;
    line-height: 1.2em;
    font-weight: 200;
    position: absolute;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    margin-right: 0.5em;
    color: #838383;

    ${({large}) => (large ? `font-size: 1.75em;` : '')}
    ${({small}) => (small ? `font-size: 1em;` : '')}
    ${({hide}) => (hide ? `display:none;` : '')}

    @media screen and (max-width: 1500px) {
        font-size: 0.9em;
        ${({large}) => (large ? `font-size: 1.5em;` : '')}
        ${({small}) => (small ? `font-size: 0.75em;` : '')}
        ${({hide}) => (hide ? `display:none;` : '')}
    }

    @media screen and (max-width: 991px) {
        font-size: 0.8em;
    }
`

export const MidText = styled.a`
    font-size: 1.25em;
    line-height: 1.2em;
    font-weight: 200;
    position: absolute;
    margin-bottom: 0.5em;
    color: #111113;    
    border-bottom: 5px solid ${({greenIt}) => (greenIt ? '#dffe1c' : '#3f49ff')};
`

/* author text */
/* author text */
/* author text */

export const ThumbnailAuthor = styled.div`
    display: inline-block;
    position: absolute;
    width: 100%;
    padding: 0.25em 0em;
    bottom: 10px;
`

export const TextArea = styled.div`
    display: inline-block;
    width: 85%;
`

export const UserAvi = styled.img`
    object-fit: cover;
    border-radius: 8em;
    width: 1.4em;
    height: 2em;
    display: inline-block;
    margin-right: 0.6em;
    margin-left: 0;
    margin-bottom: 0em;
    top: 0;
`

export const Name = styled.a`
    font-size: 1em;
    line-height: 1em;
    margin-bottom: 0.2em;
    color: #111113;
    display: block;

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`

export const AtName = styled.a`
    font-size: 0.85em;
    line-height: 1em;
    color: #111113;

    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`

export const TimeStamp = styled(AtName)`
    color: #a3a3a3;
`

export const Comments = styled(Name)`
    color: #a3a3a3;
    margin-top: 0.4em;
    font-size: 0.85em;
    
    @media screen and (max-width: 1500px) {
        font-size: 0.75em;
    }
`

export const SomeText = styled(AtName)`
    color: #7e7e7e;
`

/*  */

export const ThumbnailImage = styled.img`
    width: 50%;
    flex: 50%;
    object-fit: cover;
    
    @media screen and (max-width: 991px) {
        flex: 50%;
        width: 50%;
        height: 100%;
        border-radius: 8px 8px 0px 0px;
    }
`

export const ThumbnailImageVertical = styled(ThumbnailImage)`
    flex-direction: column;
    height: 50%; 
    width: 100%;

    @media screen and (max-width: 991px) {
        flex: 75%;
        width: 100%;
        height: 100px;
        border-radius: 8px 8px 0px 0px;
    }
`

export const ThumbnailImageWide = styled(ThumbnailImage)`
    flex: 33.33%;
    width: 33.33%;
    
    @media screen and (max-width: 991px) {
        flex: 33.33%;
        width: 33.33%;
        height: 100%;
    }
`

export const LoadMore = styled(ArticleThumbnailWide)`
    height: 8em;
    background-color: #d3cdc0;
    margin: 0.25%;

    &:hover{    
        background-color: #eae6df;
        opacity: 0.9;
    }

    @media screen and (max-width: 991px) {
        border-radius: 8px;
    }
`

export const LoadText = styled(Link)`
    font-size: 1em;
    color: #111113;
    margin: auto;
    text-decoration: none;
`

