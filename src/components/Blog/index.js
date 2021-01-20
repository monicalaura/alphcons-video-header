import React from 'react'
import Blog1 from '../../assets/collaboration-tools.svg'
import Blog2 from '../../assets/development.svg'
import Blog3 from '../../assets/ui-design.svg'
import { BlogContainer, BlogContent, BlogDateContainer, BlogDateItems, BlogImgContainer,BlogImage, BlogReadMoreWrap, BlogTop, BlogDescription, BlogTopSubtitle, BlogTopTextWrap, BlogTopTitle, BlogWrapper, BlogReadMoreLink, BlogReadMoreIcon, BlogTitle } from './BlogComponents'

const Blog = () => {
    return (
        <>
         <BlogWrapper id="blog">
             <BlogTitle>From Blog</BlogTitle>
             <BlogContainer>
                 {/* Blog card */}
                <BlogContent>
                    <BlogImgContainer>
                     <BlogImage src={Blog1}></BlogImage>
                    </BlogImgContainer>
                    
                    <BlogTop>
                        <BlogDateContainer>
                            <BlogDateItems>10</BlogDateItems>
                            <BlogDateItems dark>Oct</BlogDateItems>
                        </BlogDateContainer>
                        <BlogTopTextWrap>
                            <BlogTopTitle>Collaboration Tools</BlogTopTitle>
                            <BlogTopSubtitle>Software</BlogTopSubtitle>
                        </BlogTopTextWrap> 
                        </BlogTop>   
                            <BlogDescription>Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem.
                             <BlogReadMoreWrap>
                                <BlogReadMoreLink>
                                    Read more 
                                    <BlogReadMoreIcon></BlogReadMoreIcon>
                                </BlogReadMoreLink>
                             </BlogReadMoreWrap>
                            </BlogDescription>                
                </BlogContent> 
                {/* Blog card */}
                <BlogContent>
                    <BlogImgContainer>
                     <BlogImage src={Blog2}></BlogImage>
                    </BlogImgContainer>
                    
                    <BlogTop>
                        <BlogDateContainer>
                            <BlogDateItems>24</BlogDateItems>
                            <BlogDateItems dark>Sept</BlogDateItems>
                        </BlogDateContainer>
                        <BlogTopTextWrap>
                            <BlogTopTitle>Updates to Drupal </BlogTopTitle>
                            <BlogTopSubtitle>Development</BlogTopSubtitle>
                        </BlogTopTextWrap> 
                        </BlogTop>   
                            <BlogDescription>Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem.
                             <BlogReadMoreWrap>
                                <BlogReadMoreLink>
                                    Read more 
                                    <BlogReadMoreIcon></BlogReadMoreIcon>
                                </BlogReadMoreLink>
                             </BlogReadMoreWrap>
                            </BlogDescription>                
                </BlogContent>
                {/* Blog card */}
                <BlogContent>
                    <BlogImgContainer>
                     <BlogImage src={Blog3}></BlogImage>
                    </BlogImgContainer>
                    
                    <BlogTop>
                        <BlogDateContainer>
                            <BlogDateItems>11</BlogDateItems>
                            <BlogDateItems dark>Aug</BlogDateItems>
                        </BlogDateContainer>
                        <BlogTopTextWrap>
                            <BlogTopTitle>Latest UX Design</BlogTopTitle>
                            <BlogTopSubtitle>UI/UX Design</BlogTopSubtitle>
                        </BlogTopTextWrap> 
                        </BlogTop>   
                            <BlogDescription>Aenean eu magna ut quam rhoncus pretium praesent sit amet lorem.
                             <BlogReadMoreWrap>
                                <BlogReadMoreLink>
                                    Read more 
                                    <BlogReadMoreIcon></BlogReadMoreIcon>
                                </BlogReadMoreLink>
                             </BlogReadMoreWrap>
                            </BlogDescription>                
                </BlogContent>
             </BlogContainer>
         </BlogWrapper>   
        </>
    )
}

export default Blog
