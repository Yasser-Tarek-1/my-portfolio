import React from "react";
import Container from "../layout/Container";
import Skills from "./Skills";

const Main = () => {
  return (
    <section className="w-full pt-16 sm:pt-24">
      <Container>
        <div className="flex items-center justify-center flex-col gap-7">
          <p className="text-secondary uppercase font-extrabold  sm:text-xl tracking-[3px] -mb-2">
            Hello, My Name is
          </p>
          <h1 className="text-gradient text-4xl sm:text-5xl text-center font-extrabold sm:leading-[60px]">
            Yasser Tarek <br />
            I'am a Front-End Dev.
          </h1>
          <p className="max-w-[600px] sm:text-xl text-center">
            I love building great sites and focusing on being compatible with
            everyone screen and provide a good UX/UI
          </p>
          <button className="bg-main hover:bg-sky-400 transition-all rounded-full py-3 px-5 sm:px-10  tracking-[1px] sm:text-xl capitalize outline-none border-none">
            <a href="#about">Do you want to work with me?</a>
          </button>
        </div>
        <Skills />
      </Container>
    </section>
  );
};

export default Main;
