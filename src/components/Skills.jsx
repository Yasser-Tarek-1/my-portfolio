import React from "react";

import {
  html,
  css,
  javascript,
  reactjs,
  mui,
  figma,
  git,
  redux,
  tailwind,
} from "../assets";

const data = [
  {
    id: 1,
    title: "html",
    img: html,
  },
  {
    id: 2,
    title: "css",
    img: css,
  },
  {
    id: 3,
    title: "javascript",
    img: javascript,
  },
  {
    id: 4,
    title: "react",
    img: reactjs,
  },
  {
    id: 5,
    title: "redux",
    img: redux,
  },
  {
    id: 6,
    title: "mui",
    img: mui,
  },
  {
    id: 8,
    title: "tailwindcss",
    img: tailwind,
  },
  {
    id: 9,
    title: "git",
    img: git,
  },
  {
    id: 10,
    title: "figma",
    img: figma,
  },
];

const Tech = () => {
  return (
    <div className="flex items-center justify-center pt-28 flex-wrap gap-5">
      {data.map(({ id, title, img }) => {
        return (
          <div
            key={id}
            className="flex flex-col items-center justify-center  capitalize"
          >
            <img src={img} alt={title} className="w-32" />
            <p>{title}</p>
          </div>
        );
      })}
    </div>
  );
};

export default Tech;
