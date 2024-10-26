
# SumItBrief
SumItBrief is a web application built with React, Vite, and TypeScript. It provides a concise and efficient way to summarize text content.

## Author
@KapyGenius inspired by JS Mastery

## Features

- **Fast and Responsive**: Built with Vite for lightning-fast development and HMR.
- **Type Safety**: Utilizes TypeScript for type safety and better developer experience.
- **Modern React**: Leverages the latest React features and best practices.

## Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (version 14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)

### Installation

1. Clone the repository:

  ```sh
  git clone https://github.com/kapygenius/sumitbrief.git
  cd sumitbrief
  ```

2. Install dependencies:

  ```sh
  npm install
  # or
  yarn install
  ```

### Running the App

To start the development server:

```sh
npm run dev
# or
yarn dev
```

Open your browser and navigate to `http://localhost:3000` to see the app in action.

### Building for Production

To create a production build:

```sh
npm run build
# or
yarn build
```

The output will be in the `dist` directory.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
