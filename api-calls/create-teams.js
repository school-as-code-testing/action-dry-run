import fetch from "node-fetch";

const BASE_URL = "https://api.github.com/repos";

export const createTeams = async ({
  env = {},
  teachers = [],
  learners = [],
  admins = [],
}) => {
  console.log(env); // repo secrets, name, user account, ...

  console.log(learners);
  console.log(teachers);
  console.log(admins);
};
