import React from "react";
import Container from "../layout/Container";
import ProjectCard from "./ProjectCard";

import { projects } from "../utils/scratch";

const Projects = () => {
  return (
    <section className="w-full pt-16 sm:pt-36 pb-36">
      <Container>
        <div className="border-t">
          <h1 className="text-4xl sm:text-5xl font-extrabold sm:leading-[60px] flex justify-center mt-10">
            My Projects
          </h1>
          <div className="mt-32 flex flex-col gap-40">
            {projects?.map((project) => {
              return <ProjectCard key={project.id} {...project} />;
            })}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
