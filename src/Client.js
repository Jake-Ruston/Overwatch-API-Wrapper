/** import modules */
const fetch = require('node-fetch');
const Profile = require('./Profile');

/**
 * Returns information about an Overwatch player
 * @param {string} username The username of the player
 * @param {string} region The region of the player
 * @param {string} platform The platform of the player
 * @returns {Promise<Object>} Object containing information of the player
 */
module.exports = async (username, region, platform = 'pc') => {
  username = username.replace('#', '-');
  region = region.toLowerCase();
  platform = platform.toLowerCase();
  const res = await fetch(`https://owapi.net/api/v3/u/${username}/blob?platform=${platform}`);
  const data = await res.json();
  return new Profile(data[region]);
};
