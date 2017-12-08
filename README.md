<h1 align="center">
  <a href="https://www.npmjs.com/package/overwatch.js">Overwatch.js</a>
</h1>
<p align="center">A simple to use module for interacting with the Overwatch API.</p>

<h2 align="center">Install</h2>

```bash
npm i overwatch.js
```

<h2 align="center">Example Usage</h2>

```js
const ow = require('overwatch.js');

(async function () {
    const profile = await ow('Calvin#1337', 'us', 'pc');
    console.log(profile);
})();
```

<h2 align="center">Documentation</h2>
https://github.com/Jake-Ruston/overwatch.js/wiki/Docmentation
