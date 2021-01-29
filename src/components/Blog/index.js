import React from 'react'
import articles from './data';
import { BlogContainer, BlogContent, BlogDateContainer, BlogDateItems, BlogImgContainer,BlogImage, BlogReadMoreWrap, BlogTop, BlogDescription, BlogTopSubtitle, BlogTopTextWrap, BlogTopTitle, BlogWrapper, BlogReadMoreLink, BlogReadMoreIcon, BlogTitle } from './BlogComponents'

const Blog = () => {
    return (
        <>
         <BlogWrapper id="blog">
             <BlogTitle>From Blog</BlogTitle>
             <BlogContainer>
                 {/* Blog card */}
                 {articles.map((article)=> {
                     const {id, img, day, month, title, subtitle,description} = article
                     return <BlogContent key={id}>
                     <BlogImgContainer>
                      <BlogImage src={img}></BlogImage>
                     </BlogImgContainer>
                     
                     <BlogTop>
                         <BlogDateContainer>
                             <BlogDateItems>{day}</BlogDateItems>
                             <BlogDateItems dark>{month}</BlogDateItems>
                         </BlogDateContainer>
                         <BlogTopTextWrap>
                             <BlogTopTitle>{title}</BlogTopTitle>
                             <BlogTopSubtitle>{subtitle}</BlogTopSubtitle>
                         </BlogTopTextWrap> 
                         </BlogTop>   
                             <BlogDescription>{description}
                              <BlogReadMoreWrap>
                                 <BlogReadMoreLink>
                                     Read more 
                                     <BlogReadMoreIcon></BlogReadMoreIcon>
                                 </BlogReadMoreLink>
                              </BlogReadMoreWrap>
                             </BlogDescription>                
                 </BlogContent> 
                 })}
                
               
             </BlogContainer>
         </BlogWrapper>   
        </>
    )
}

export default Blog
