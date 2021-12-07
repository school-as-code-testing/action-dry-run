# Docs

There's no doc comments in the code for now, so here's run-down of the big ideas:

## Parsing Configs

All of the `/config/*.yml` files are read in and parsed as a config object, each file name will become a key and that file's content (parsed to JSON) becomes the value. something like this:

```js
{
  learners: [ ... ],
  boards: [ ... ],
  // ...
}
```

All of the scripts are composed of functions, and this config object is the first parameter for all the top-level functions. They will be passed everything and can destructure the configurations as necessary.

### `.env` config property

There is an extra property that will be added to the parsed config called `.env`. By default it is a reference to `process.env` but can be set explicitly by passing a different object to the `parseConfigs` function.

This will be used in the actions to pass repository secrets and details such as the user name and repo name that are needed for rendering README links.

## Persisting Configs

This generated config object can be modified during an action run (adding milestone numbers to each material, adding board numbers to boards, ...). These changes can be persisted to `/config/*.yml` files for later. If a new field is added in the main config object, this will also be persisted as a new `/config/*.yml` file.

The `.env` property of the config object will not be persisted.

## Action Scripts

All of the work done by actions is written as pure Node scripts, the action itself will only be an interface layer. The actions will just execute the scripts, passing in secrets when necessary.

### Setup Repo

This script makes all the API calls to configure the repository:

- create teams & grant access
- set up labels and milestones
- create project boards
- ...

Importantly, this script will also update & persist the configs with info specific to this repo such as milestone & project board numbers. So it should be run before ...

### Render README

This one renders the repo README with all the people, materials, and issue/board/PR links the learners will need.
