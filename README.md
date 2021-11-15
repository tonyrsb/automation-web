
![cypress](https://img.shields.io/badge/AT--WEBUI-Cypress-yellow.svg) ![coverage](https://img.shields.io/badge/coverage-100%25-brightgreen.svg)
# automation-web

> Cypress

### Prerequisites:

- Install Node.js and npm

### How to Getting Started:

```sh
$ npm install
```

### This is directory structure

        .
        ├── cypress
        │  ├── fixtures
        │  ├── integration
        │  ├── plugins
        │  ├── reports
        │  └── support
        ├── .env
        └── package.json

### Foldering and Naming Convention

1. Filename using `snake_case` *except for the repo name*
2. Variable name using `camelCase`
3. The file (.js and .json) should be located in a path that matches the endpoint path
4. Variable env name using `[reponame]_URL`
5. Seed Data folder name using `database_name` and env name `[databasename]_DB_HOST`

## Run the test

You can specify the command that you want to run from package.json file.

###### Here are our default commands:

```sh
$ npm run cypress -- -e TAGS=''                     | to run all tests
$ npm run cypress -- -e TAGS='@tagNameScenario'     | to run test with specific tag / specific repo
$ npm run cypress -- -e TAGS='not @skip'            | to exclude @skip tag
$ npm run cypress -- -e TAGS='' --browser chrome    | to run all tests with launch browser
```

# Let's make TRUSTED and IMPACTFUL tests!
