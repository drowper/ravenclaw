## RAVENCLAW

REST API

## Stack

* [NestJS](https://github.com/nestjs/nest)
* [TypeScript](https://github.com/nestjs/nest)
* [TypeORM](https://typeorm.io/)
* [SQLite](https://www.sqlite.org/)
* [Jest](https://jestjs.io/)

## Installation

Clone repository

```bash
# Using SSL method.
$ git clone git@github.com:drowper/ravenclaw.git

# Using HTTPS method.
$ git clone https://github.com/drowper/ravenclaw.git
```

## Running

Make shure you have [Docker](https://docs.docker.com/engine/install/) and [Docker Compose](https://docs.docker.com/compose/install/) installed.

```bash
# Start application containers.
$ docker-compose up -d
```

After Docker launch the application containers you need to install application dependencies with [Yarn](https://classic.yarnpkg.com/en/docs/usage).

```bash
# Enter into containner.
$ docker exec -it ravenclaw bash

# Install application dependencies.
$ yarn install
```

Run application.

```bash
http://localhost:3000/
```

## Test

```bash
# Run unit tests.
$ yarn test

# Run e2e tests.
$ yarn test:e2e

# Run test coverage.
$ yarn test:cov
