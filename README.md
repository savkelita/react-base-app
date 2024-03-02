# React Base Application

## Intro

TODO

## Cloning and Running the Application in local

Clone the project into *local directory*.

Install all packages:

```bash
yarn install
```

In order to **run the application** type the following command:

```bash
yarn start
```

Or if you want to run it with API:

```bash
APIHOST=jsonplaceholder.typicode.com yarn start
```

The Application Runs on **https://localhost:3000**


If you want to run Application on *different port* or to *change the configuration (proxy etc.)* modify [webpack.dev.js](./webpack/webpack.dev.js)


## Build the Application

```bash
yarn build
```

Output folder is **dist**.

## Note

If you want to build Application for different folder/ path change **process.env.basename** [webpack.prod.js](./webpack/webpack.prod.js).

And run **yarn build**.

## Development

Recommended code editor is **VSCode**. Please install all [recommended extensions](./.vscode/extensions.json).

*TODO Code organization, folders, structure etc.*