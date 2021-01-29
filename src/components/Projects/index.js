import React, { useState, useEffect } from "react";
import items from './data';
import { FilterItem, 
        FilterLink, 
        FilterList, 
        ProjectsWrapper,
        PortfolioTitle,
        ProjectsContainer,
        ProjectCard,
        ProjectItem,
        ProjectImage,
        ImgText,
        ImgTextIcon,
        ImgTextTitle
               } from "./ProjectsComponents";

//PORTFOLIO filtered gallery

const Projects = () => {
//filter state
 const [filter, setFilter] = useState("all");
//projects state
 const [projects, setProjects] = useState([]);

 //projects data
  useEffect(() => {
    setProjects(projects);
  }, []);

  //handle filter state 
  useEffect(() => {
    setProjects([]);
    /* variable for the selected filter that
     looks for each array item which contains the specific filter category */
    const filtered = items.map(proj => ({
        ...proj, //spread the props of each project in the 'items' array
        filtered: proj.category.includes(filter)
      }));
      setProjects(filtered);
    }, [filter]);
    
  return (
        <>
            <ProjectsWrapper id="projects">
              <PortfolioTitle>Our Projects</PortfolioTitle>
              {/* Filter navigation */}
              <FilterList>
                  <FilterItem>
                      <FilterLink href="/#projects"     
                                  active={filter === "all"} 
                                  onClick={() => setFilter("all")}>
                                      All</FilterLink>
                  </FilterItem>
                  <FilterItem>
                      <FilterLink href="/#projects" 
                                  active={filter === "development"} 
                                  onClick={() => setFilter("development")}>
                                    Web development</FilterLink>
                  </FilterItem>
                  <FilterItem>
                      <FilterLink href="#projects" 
                                  active={filter === "seo"} 
                                  onClick={() => setFilter("seo")}>
                                    SEO</FilterLink>
                  </FilterItem>
                  <FilterItem>
                      <FilterLink href="#projects" 
                                  active={filter === "design"} 
                                  onClick={() => setFilter("design")}>
                                    UI/UX Design</FilterLink>
                  </FilterItem>                
                  <FilterItem>
                      <FilterLink href="#projects" 
                                  active={filter === "marketing"} 
                                  onClick={() => setFilter("marketing")}>
                                    E-marketing</FilterLink>
                  </FilterItem>
            </FilterList>
                  
                  {/* Projects items */}
                  <ProjectsContainer>
                  {projects.map(item => item.filtered === true ? (
                    <ProjectCard key={item.name}>
                      <ProjectItem>
                          <ProjectImage src={item.image}></ProjectImage>
                          <ImgText>
                            <ImgTextTitle>{item.name}</ImgTextTitle>
                            <ImgTextIcon href="#"></ImgTextIcon>
                          </ImgText>
                      </ProjectItem>     
                    </ProjectCard>
                  ) : '')}
                      
                               
                        
                            
                  </ProjectsContainer>
          </ProjectsWrapper> 
        </>
    )
}

export default Projects
