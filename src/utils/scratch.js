import { netflix, gym, gsuite, mernstore } from "../assets";

export const projects = [
  {
    id: 1,
    name: "Netflix Clone",
    description: `This project is a miniature version of the international
         movie site Netflix, in which I used libraries to provide movies,
          and I used Firebase for the login and logout processes, and I used JavaScript libraries,
           the most important of which are React and Redux TK`,
    image: netflix,
    // eslint-disable-next-line no-sparse-arrays
    tags: [
      {
        id: 1,
        name: "react",
      },
      { id: 2, name: "redux" },
      ,
      { id: 3, name: "tailwind" },
      { id: 4, name: "firebase" },
    ],
    source_code: "https://github.com/Yasser-Tarek-1/netflix-clone",
    live_demo: "https://netflix-clone-app-1.netlify.app/",
  },
  {
    id: 2,
    name: "Mern Store",
    description: `Mern store is a full stack ecommerce application.
    used React,  RTK Query and Mui for UI,
    in server-side used node.js and express.`,
    image: mernstore,
    // eslint-disable-next-line no-sparse-arrays
    tags: [
      {
        id: 10,
        name: "react",
      },
      { id: 20, name: "redux query" },
      ,
      { id: 30, name: "mui" },
    ],
    source_code: "https://github.com/Yasser-Tarek-1/mern-ecommerce",
    live_demo: "https://mernstore.netlify.app/",
  },
  {
    id: 3,
    name: "Exercises Application",
    description: `A complete integrated website to take you from scratch to mastering the exercises,
       I used rapidapi to fetch data.
      used Redux ToolKit, React Router, Swiper and MUI for UI Design.`,
    image: gym,
    // eslint-disable-next-line no-sparse-arrays
    tags: [
      {
        id: 5,
        name: "react",
      },
      { id: 6, name: "redux" },
      ,
      {
        id: 7,
        name: "mui",
      },
    ],
    source_code: "https://github.com/Yasser-Tarek-1/gym-app",
    live_demo: "https://gym-exercise-app-1.netlify.app/",
  },
  {
    id: 4,
    name: "Google Search App",
    description: `A valid project is based on Google search APIs,A smaller version of the global search engine Google,
      It could have more features, but the APIs don't allow and Only for 100 Request in Day.
      I used Redux-TK to fetch and store the data`,
    image: gsuite,
    // eslint-disable-next-line no-sparse-arrays
    tags: [
      {
        id: 8,
        name: "react",
      },
      {
        id: 9,
        name: "redux",
      },
      ,
      { id: 10, name: "tailwind" },
    ],
    source_code: "https://github.com/Yasser-Tarek-1/google-search",
    live_demo: "https://gsuite-search.netlify.app/",
  },
];
