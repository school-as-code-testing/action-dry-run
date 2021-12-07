import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

import { parseConfigs } from "../parse-configs/index.js";
import { readme } from "../readme/index.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configsPath = path.join(__dirname, "..", "config");
const configs = await parseConfigs(configsPath);

configs.env.userName = process.argv[2];
configs.env.repoName = process.argv[3];

const README = readme(configs);

fs.writeFile(
  path.join(__dirname, "..", "README.md"),
  README,
  "utf-8",
  (err) => err && console.error(err)
);
