# Nodejs Basic Server 01

This project is a template for a basic server with Nodejs serving HTML files.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installing](#installing)
- [Running](#running)
- [Scaffolding](#scaffolding)
- [Server routes](#server routes)
- [Built With](#built with)

### Prerequisites
Before begining with the project installation, your system must have installed the following:

- NodeJS + NPM

### Installing
After download the project or clone it:

```
cd nodejs-server-basic-01
npm install
```

## Running

For running the server you can use:

```
npm start (with nodemon)
```

or

```
node app.js
```

## Scaffolding
- public: files exposed for the web
  - css: folder for all cascade style sheets
  - fonts: folder for all fonts
  - img: folder for all images
  - js: folder for all JavaScripts
  - video: folder for all videos
- routes: url paths for differents roles
- util: files for server side use
- app.js: main server application
- .env: storage environment variables

## Server Routes
By default the server has the following routes configure:

![Server Routes](https://i.imgur.com/tuwgtx5.png)

## Built With

* [Nodejs](https://nodejs.org/) - A JavaScript runtime built on Chrome's V8 JavaScript engine
* [Express](https://expressjs.com/) - Fast, unopinionated, minimalist web framework for Nodejs
* [dotenv](https://www.npmjs.com/package/dotenv) - A zero-dependency module that loads environment variables
* [nodemon](https://nodemon.io/) - A utility that will monitor for any changes in your source and automatically restart your server
