/** Class representing a Profile */
class Profile {
  /**
   * Returns data of the player
   * @param {object} data The data of the player
   */
  constructor(data) {
    this.data = data;
  }

  /**
   * Get the heroes stats for the player
   * @returns {object} The heroes
   */
  heroes() {
    return this.data.heroes;
  }

  /**
   * Get the achievements for the player
   * @returns {object} The achievements
   */
  achievements() {
    return this.data.achievements;
  }

  /**
   * Get the stats for the player
   * @param {string} mode The mode of the stats
   * @returns {object} The stats
   */
  stats(mode) {
    return this.data.stats[mode];
  }
}

module.exports = Profile;
