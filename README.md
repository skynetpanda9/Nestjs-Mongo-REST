# Description

[Nest](https://github.com/nestjs/nest) framework TypeScript CRUD (Mongo + REST) repository. Made to keep up employee data for AirOxa IS.

## Installation

rm -rf dist dir. (if present) (use when no lock file is present in project dir.)

```zsh
npm run install:prebuild
```

or

```zsh
yarn run install:prebuild
```

## Prebuild

rimraf dist (only use if package-lock.json is present in project dir.)

```zsh
npm run prebuild
```

## Clean Install

if lock file is available

```zsh
npm ci

#or

yarn ci
```

## Running the app

```zsh
# simple run (no watch mode)
$ npm start

# development
$ npm run start:dev

# production
$ npm run start:prod
```

## More Scripts

To get scripts for more options, please refer package.json.

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## License

Nest is [MIT licensed](LICENSE).

## Base Project created by

Akash Pandya [GitHub](https://github.com/skynetpanda9)
