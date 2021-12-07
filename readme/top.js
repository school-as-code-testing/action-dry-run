export const top = ({ env = {} }) =>
  `# ${env.repoName
    .split("-")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ")}

> - [Issues](https://github.com/${env.userName}/${env.repoName}/issues):
>   [\`help-wanted\`](https://github.com/${env.userName}/${
    env.repoName
  }/issues?q=is%3Aopen+label%3Ahelp-wanted),
>   [\`question\`](https://github.com/${env.userName}/${
    env.repoName
  }/issues?q=is%3Aopen+label%3Aquestion)
> - [Pull Requests](https://github.com/${env.userName}/${env.repoName}/pulls)
> - [Discussions](https://github.com/${env.userName}/${
    env.repoName
  }/discussions/)
> - [Deliverables](https://github.com/${env.userName}/${
    env.repoName
  }/projects/1)
>
> <details>
> <summary>Tech Support</summary>
>
> [![Rubber Ducky](./assets/rubber-ducky.png)](https://rubberduckdebugging.com/)
>
>  </details>`;
