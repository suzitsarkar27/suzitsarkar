import React, { useEffect, useState } from 'react';
import ProjectCard from './ProjectCard';
import './Portfolio.css'

const Protfolio = () => {
    const [projects,setProjects]=useState([]);
    useEffect(()=>{
        fetch('infro.json')
        .then(res=>res.json())
        .then(data=>setProjects(data))
    },[])
    return (
        <>
        <section className='Portfolio top' id='portfolio'>
          <div className='container'>
            <div className='heading text-center '>
              <h4>VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK</h4>
              <h1>My Portfolio</h1>
            </div>
  
            <div className='content grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
               {
                projects.map(project=><ProjectCard key={project.id} project={project}></ProjectCard>)
               }
            </div>
          </div>
        </section>
      </>
    );
};

export default Protfolio;