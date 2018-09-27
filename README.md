# Project Name

> Optimizon - Optimization of the back end of an Amazon clone.

## Related Projects

- https://github.com/8-bit-beauty/component-mattminwoolee

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

API Endpoints:

POST: /checkout/
  Creates new record. Expects JSON object containing key-value pairs.

GET: /checkout/:id
  Retrieves record for <id>

PUT: /checkout/:id
  Updates existing record with id <id>. Expects JSON object containing key-value pair(s) of desired update(s).

DELETE: /checkout/:id
  Deletes record with id <id> from database.



## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

