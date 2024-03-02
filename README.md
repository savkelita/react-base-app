# React Base Application

## Intro

Get started React Application which includes:

1. [Microsoft FluentUI 9](https://react.fluentui.dev/?path=/docs/concepts-introduction--page) Components and eco system.
2. [io-ts](https://gcanti.github.io/io-ts/) runtime type system for IO decoding/encoding.
3. [fp-ts](https://gcanti.github.io/fp-ts/) library for typed functional programming in Typescript.
4. [Webpack](https://webpack.js.org/) module bundler.

and much more. Check code and working examples.

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

## INFO Table

The future plan is to replace `io-ts` and `fp-ts` with `Effect`. [Effect](https://effect.website/) is a powerful TypeScript library designed to help developers easily create complex, synchronous, and asynchronous programs.