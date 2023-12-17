import React from "react";
import Button from "./Button";

const ProjectsSidebar = ({ onStartAddProject, projects, onProjectSelect, selectedProjectId }) => {
  return (
    <aside className="w-[200px] md:w-[300px] px-4 py-10 md:px-8 md:py-16 bg-stone-900 text-stone-50  rounded-r-xl">
      <h2 className="mb-8 font-bold uppercase md:text-xl text-stone-200">
        Your Projects
      </h2>
      <div>
        <Button onClick={onStartAddProject}>+ Add Project</Button>
      </div>
      <ul>
        {
          projects.map((project) => {
          
            let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800";

            if(project.id === selectedProjectId){
              cssClasses += " bg-stone-800 text-stone-200"
            }else{
              cssClasses += " text-stone-400"
            }

            return (
              <li key={project.id}>
                <button 
                onClick={() => onProjectSelect(project.id)}
                className={cssClasses}>
                  {project.title}
                </button>
              </li>
            );
          })
        }
      </ul>
    </aside>
  );
};

export default ProjectsSidebar;
