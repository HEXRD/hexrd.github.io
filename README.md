# HEXRD Web Page

This repo hosts the HEXRD organization web page. 

## Developing
This web page is developed with React and Javascript using NPM. To run locally, you will need to first install [node and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm). Then you should be able to host a dev version with:

```bash
git clone https://github.com/HEXRD/hexrd.github.io
cd hexrd.github.io
npm i
npm run start
```

This should start hosting on `localhost:3000` and open a browser looking at it. Changes to the files in `./src` should be hot-reloaded automatically and rendered in your browser.


## Deploying
Once you make changes to the site, you can modify the `gh-pages` branch where the static site is hosted by running

```bash
npm run build
npm run deploy
```
