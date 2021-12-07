import fetch from "node-fetch";

export const createBoards = async ({ env = {}, boards = [] }) => {
  // if no boards are present in config, create a default board:
  const defaultBoard = {
    name: "study",
    description: "for all snippets, vocabulary and deliverables",
    main: true,
  };

  // if there is no main board, make the first one the main one

  // make sure all the boards exist
};

// const yaml = require("js-yaml");
// const fs = require("fs");
// const fetch = require("node-fetch");

// const REPO_BASE_URL = "https://api.github.com/repos";
// const PROJECT_BASE_URL = "https://api.github.com/projects";
// const headers = {
//   Accept: "application/vnd.github.v3+json",
//   Authorization: `Bearer ${process.env.TOKEN}`,
// };

// try {
//   const doc = yaml.load(fs.readFileSync("./school.yml", "utf-8"));
//   const { homeRepo, projects } = doc;

//   projects.forEach((project) => {
//     const { columns, ...rest } = project;

//     const createProjects = fetch(
//       `${REPO_BASE_URL}/${process.env.GITHUB_ACTOR}/${homeRepo}/projects`,
//       {
//         method: "POST",
//         body: JSON.stringify(rest),
//         headers,
//       }
//     )
//       .then((res) => res.json())
//       .then((json) => {
//         return json.id;
//       });

//     const createColumns = async () => {
//       const projectId = await createProjects;
//       columns.forEach((column) => {
//         console.log(`setting ${column}`);

//         fetch(`${PROJECT_BASE_URL}/${projectId}/columns`, {
//           method: "POST",
//           body: JSON.stringify({ name: column }),
//           headers,
//         })
//           .then((res) => res.json())
//           .then((json) => console.log(json));
//       });
//     };

//     createColumns();
//   });
// } catch (e) {
//   console.log(e);
// }
