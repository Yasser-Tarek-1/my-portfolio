import React from "react";
import { MdDone } from "react-icons/md";

const ProjectCard = ({
  id,
  name,
  description,
  image,
  tags,
  source_code,
  live_demo,
}) => {
  return (
    <section
      className={`flex items-center justify-between gap-5 ${
        id === 2 ? "md:flex-row-reverse flex-col" : "flex-col md:flex-row"
      }`}
    >
      <div className="shadow-[rgba(0,_0,_0,_0.4)_0px_1px_30px] shadow-main">
        <img
          src={image}
          alt={name}
          className="w-[400px] lg:w-[500px] max-w-full"
        />
      </div>
      <div
        className={`flex items-start flex-col gap-3 ${
          id === 2 ? " md:mr-20" : "md:ml-20"
        }`}
      >
        <h3 className="text-3xl sm:text-4xl sm:text-5x font-bold sm:leading-[60px] capitalize">
          {name}
        </h3>
        <p className="max-w-[700px] sm:text-xl">{description}</p>
        <a
          href={source_code}
          target="_blank"
          className="underline my-2 capitalize flex items-center gap-4 w-fit text-main"
          rel="noreferrer"
        >
          Github Repo
        </a>
        <div className="flex items-center gap-6 max-w-[320px] flex-wrap">
          {tags?.map((tag) => {
            return (
              <div className="flex items-center gap-3" key={tag.id}>
                <MdDone className="bg-main rounded-full" />
                <p className="text-md capitalize">{tag.name}</p>
              </div>
            );
          })}
        </div>
        <a
          href={live_demo}
          target="_blank"
          className="w-fit mt-4 bg-main hover:bg-sky-400 transition-all rounded-full py-2 px-5 text-xl capitalize outline-none border-none"
          rel="noreferrer"
        >
          View Demo
        </a>
      </div>
    </section>
  );
};

export default ProjectCard;
