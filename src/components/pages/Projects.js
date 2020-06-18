import React, { useState } from "react";
import Card from '../card/Card';
import projects from '../../assets/projects';
import MunchiMaps from '../../assets/images/munchimaps(cropped).png';

const Projects = () => {

  console.log(MunchiMaps)

  let [projectState, setProjectState] = useState(0);

  if (projectState >= 3) projectState = 0;
  if (projectState <= -1) projectState = 2;

  return (
    <div className="flex items-center justify-center mt-10">
      <div className="flex flex-col w-2/3 mr-24">
        <h1 className="text-4xl font-bold text-custom-orange underline mb-6">Some of my work</h1>
        <Card 
          title={projects[projectState].project}
          link={projects[projectState].link}
          image={projects[projectState].img}
          description={projects[projectState].description}
        />
      </div>
      <div className="flex flex-col h-128 justify-between">
        <button className="w-48 h-12 border border-custom-aqua text-custom-aqua rounded-br-full rounded-tr-full mt-24 focus:outline-none focus:shadow-outline"
          onClick={() => setProjectState(projectState += 1)}
        >Next</button>
        <button className="w-48 h-12 border border-custom-aqua text-custom-aqua rounded-bl-full rounded-tl-full mt-24 focus:outline-none focus:shadow-outline"
          onClick={() => setProjectState(projectState -= 1)}
        >Last</button>
      </div>
    </div>
  );
}

export default Projects;