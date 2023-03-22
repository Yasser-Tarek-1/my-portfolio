import React from "react";
import Container from "../layout/Container";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillCloudDownloadFill } from "react-icons/bs";

const About = () => {
  return (
    <section id="about" className="w-full pt-16 sm:pt-36 pb-36">
      <Container>
        <div className="flex justify-center flex-col gap-7">
          <p className="uppercase text-sm font-bold tracking-widest text-secondary -mb-7">
            About Me
          </p>
          <h1 className="text-4xl sm:text-5xl text-center font-extrabold sm:leading-[60px] flex">
            I'am <p className="text-gradient">Yasser</p>
          </h1>
          <p className="max-w-[700px] sm:text-xl">
            I'm an experienced software developer with JavaScript experience and
            expertise with frameworks like React. I have experience with RTK for
            global state management. I'm a quick learner, working closely with
            clients to develop efficient, scalable, and easy-to-use solutions to
            real-world problems. Let's work together to turn your ideas into
            reality!
          </p>
          <h1 className="text-2xl text-center font-extrabold sm:leading-[60px] flex -my-3 sm:-my-6">
            My Experience
          </h1>
          <p className="max-w-[700px] sm:text-xl">
            I have a year of website development experience working on freelance
            websites with several clients
          </p>
          <a
            href="#e"
            target="_blank"
            className="underline -mt-2 capitalize flex items-center gap-4 w-fit"
          >
            <BsFillCloudDownloadFill className="text-main text-3xl" /> Show My
            CV
          </a>

          <div className="flex mt-1 gap-4">
            <a
              href="https://www.linkedin.com/in/yasser-tarek-32b257242/"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" bg-main p-3 cursor-pointer rounded-full sm:hover:scale-105 ease-in duration-200">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/Yasser-Tarek-1"
              target="_blank"
              rel="noreferrer"
            >
              <div className=" bg-main p-3 cursor-pointer rounded-full sm:hover:scale-105 ease-in duration-200">
                <FaGithub />
              </div>
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
