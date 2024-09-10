# Build Tool Showcase

A small web application that demonstrates the use of various build tools and package managers. This project aims to assess my understanding on build processes, dependency management and basic web development concepts. The main build tool used here is Webpack.

## Setup Instructions

- Clone this repository using git clone
- Navigate into the directory of the project and run `npm install`. This should install all the dependencies for the project.
- To build the project with webpack, use `npm run build` command. This will build the app and create a dist directory with the output
- To run the development server, run `npm start`. This automatically opens the project in the browser and watches for changes.

## Available npm scripts

As stated earlier, this project uses webpack as the build tool, and below are the current scripts

- `watch`: This script watches all files in the dependency tree for changes
- `start`: Creates a development server and automatically reloads after the code has been compiled after every change
- `build`: Runs webpack and bundles the application.
- `test`: Runs tests with Jest

## The Build Process

In the webpack config file, the entry point for the build process is defined to be the index.js file in the src directory. Once the build script is ran, webpack takes all the source code and assets in this src directory, bundles them together into a format that the browser can understand, ultimately HTML, CSS and JS. Assets like images, css, fonts etc are all handled by webpack, which outputs a final bundle and optimizes it for production or development.
