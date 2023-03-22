import React from "react";
import Container from "../layout/Container";
import Tech from "./Skills";

const Main = () => {
  return (
    <div className="w-full pt-16 sm:pt-24">
      <Container>
        <div className="flex items-center justify-center flex-col gap-7">
          <p className="text-[#aaa6c3] uppercase font-extrabold  sm:text-xl tracking-[3px]">
            Hello, My Name is
          </p>
          <h1 className="text-gradient text-4xl sm:text-5xl text-center font-extrabold sm:leading-[60px]">
            Yasser Tarek <br />
            I'am a Front-End Dev
          </h1>
          <p className="max-w-[600px] sm:text-xl text-center">
            {/* I'm an experienced software developer with JavaScript experience and
            expertise with frameworks like React. I have experience with RTK for
            global state management. I'm a quick learner, working closely with
            clients to develop efficient, scalable, and easy-to-use solutions to
            real-world problems. Let's work together to turn your ideas into
            reality! */}
            I love building great sites and focusing on being compatible with
            everyone screen and provide a good UX/UI
          </p>
          <button className="bg-sky-500 hover:bg-sky-400 transition-all rounded-full py-3 px-5 sm:px-10 text-xl capitalize outline-none border-none">
            Do you want to work with me?
          </button>
        </div>
        <Tech />
      </Container>
    </div>
  );
};

export default Main;
