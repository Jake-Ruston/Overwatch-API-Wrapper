const ow = require('.');

(async function () {
  const profile = await ow('Calvin#1337', 'us', 'pc');
  console.log(profile);
})();

process.on('unhandledRejection', console.log);
