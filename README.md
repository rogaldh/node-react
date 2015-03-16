node-react
===========

Express server suited to render React components for modx-react package.

## Main goal
Allow to render markup based on [React](https://github.com/facebook/react) on server and use React components both on server and client.

## Dependencies
This module can work like standalone server (requires a lot of changes) but needs [modx-react](https://github.com/proxyfabio/modx-react) module to work properly (was created like `modx-react` mate).

## Run
1. Install the server to your public assets dir (similar to the `basic-example`)
2. `npm install`
3. Run `npm run test`. If everything is ok you can run `npm run start`
4. Now `modx-react` is able to output React markup served by `node-react`
