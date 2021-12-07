import { readme } from "./index.js";

import fs from "fs";

const config = {
  userName: "user-name",
  repoName: "repository",
  projects: {
    deliverables: 1,
  },
};

const materials = {
  description: "learn some javascript",
  path: [
    {
      name: "Workflows",
      chapters: 3,
      url: "https://github.com/HackYourFutureBelgium/workflows",
    },
    {
      name: "Welcome to JS",
      chapters: 3,
      url: "https://github.com/HackYourFutureBelgium/welcome-to-js",
    },
    {
      name: "Debugging",
      chapters: 5,
      url: "https://github.com/HackYourFutureBelgium/debugging",
    },
    {
      name: "Behavior, Strategy, Implementation",
      chapters: 3,
      url: "https://github.com/HackYourFutureBelgium/behavior-strategy-implementation",
    },
    {
      name: "Create a Material",
      chapters: 1,
      url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    },
  ],
};

const learners = [
  {
    name: "Adam",
    userName: "lpmi-13",
  },
  {
    name: "Evan",
    userName: "colevandersWands",
  },
];

const README = readme(config, materials, learners);

fs.writeFile(
  "./README.test.md",
  README,
  "utf-8",
  (err) => err && console.error(err)
);
