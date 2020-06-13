const employee = require("./employee");

/**
 * Class representing a Engineer.
  @class
 * @extends employee
 */
class engineer extends employee {
  /**
   * Create a Engineer.
   * @param {string} name - Name of the Engineer
   * @param {number} id - ID of the Engineer
   * @param {string} email - Email of the Engineer
   * @param {number} github - Github username of the Engineer
   */
  constructor(name, id, email, github) {
    if (!github || !github.trim().length) {
      throw new Error("Expected parameter 'github' to be a non-empty string");
    }
    super(name, id, email);
    this.github = github;
  }
}

module.exports = engineer;