import React from 'react'
import './Projects.css'
import ProjectData from '../../assets/mywork_data.js'
import arrow_icon from '../../assets/arrow_icon.svg'

const Projects = () => {
  return (
    <div id='Projects' className="projects">
      <div className="project-title">
        <h1>My Projects</h1>
      </div>
      <div className="project-list">
         {ProjectData.map((work,index) => {
            return <img key={index} src={work.w_img}  />
         })}
      </div>
      <div className="showmore">
        <p>Show More</p>
        <img src={arrow_icon} />
      </div>
      <div className="project-footer">
        <p>My <a href="https://github.com/aboses">GitHub</a> has more projects!</p>
      </div>
    </div>
  )
}

export default Projects