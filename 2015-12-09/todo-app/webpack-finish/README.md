# TODO app ( powered by webpack )

Here is the same app but instead of using __SystemJS__ we are using __Webpack__.

We don't need any server, because page serving is handled by webpack-dev-server.

Production build is provided + uglification just to showcase that `provide` works as expected.

## How to run

### Dev

`npm start` and open your browser on provided port, live reload is enabled by default


### Prod

`npm run dist` , then hop to `dist` and open index.html in the browser via some local server.

