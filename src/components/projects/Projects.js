import React from 'react';
import Project from './Project';
import { projectData } from '../../assets/data';

const Projects = () => {
  return (
    <section id='projects'>
        <div className='flex flex-col items-center justify-center min-h-screen w-full bg-cream text-darkblue my-24'>
          {/* title  */}
          <h2 className='text-4xl font-bold px-10 pb-20'>PROJECTS</h2>
          <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mx-4 flex-wrap'>
            {projectData.map( (project) => {
              return <Project key={project.id} project={project} />
            }  )}
          </div>
        </div>
    </section>
  )
}

export default Projects