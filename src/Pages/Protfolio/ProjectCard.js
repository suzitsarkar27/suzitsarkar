import React, { useState } from 'react';

const ProjectCard = ({project}) => {
   
  const {image,category,totalLike,title,live,client}=project;
    return (
      <>
      <div className='box btn_shadow w-full'>
        <div className='img'>
          <img src={image} alt=''  />
        </div>
        <div className='category d_flex'>
          <span>{category}</span>
          <label>
            <i className='far fa-heart'></i> {totalLike}
          </label>
        </div>
        <div className='title'>
          <h2>{title}</h2>
       <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <button className='btn_shadow '>
           <a href={live}> LIVE SIDE</a>
          </button>
          <button className='btn_shadow '>
             <a href={client}>CODE LINK</a>
          </button>
          <button className='btn_shadow '>
             DETALCE
          </button>
       </div>

        </div>
      </div>

    </>
    );
};

export default ProjectCard;