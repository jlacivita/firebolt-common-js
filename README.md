# Firebolt Common JS Sample
This sample shows how to import the latest Firebolt Core SDK from npmjs.com and transpile it to CommonJS for use with an ES5-scripted app.

To test it out, simply run:

```
npm run build
```

This will generate a local, commonjs version of Firebolt and store it in the `/lib/` directory.
It will then run webpack on the simple app located in `src/index.js` which uses the Firebolt Lifecycle module.

The app will be output to `build/index.html`.

Firebolt is officially distributed as a W3C standard ES6 module here:

https://www.npmjs.com/@firebolt-js/sdk

Due to the varying number of transpiling and packing tools for Web apps, Firebolt does not come with a supported configuration for transpiling/packing. **This is an unsupported example!**