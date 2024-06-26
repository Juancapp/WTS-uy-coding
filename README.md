# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

## Deployment

This application has been deployed on Vercel. You can access it [here](https://wts-uy-coding.vercel.app/).

## Installation

Before you can run this project, you need to install the dependencies. Make sure you have Node.js and npm installed on your machine, then run the following command in the root directory of the project:

```bash
npm install
```

This will install all the necessary dependencies as defined in the `package.json` file.

## Running the Server

To start the development server, run the following command:

```bash
npm start
```

This will start the development server on `localhost:5173` (or the port you've configured) and automatically open it in your default web browser.

## Building the Project

To build the project for production, run the following command:

```bash
npm run build
```

This will create an optimized build of your project in the `dist` directory.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
};
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
