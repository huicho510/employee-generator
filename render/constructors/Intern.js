const employee = require("./employee");

/**
 * Class representing a Inter.
 * @class
 * @extends employee
 */
class Intern extends employee {
  /**
   * Create a Intern.
   * @param {string} name - Name of the Intern
   * @param {number} id - ID of the Intern
   * @param {string} email - Email of the Intern
   * @param {string} school - School of the Intern
   */
  constructor(name, id, email, school) {
    if (!school || !school.trim().length) {
      throw new Error("Expected parameter 'school' to be a non-empty string");
    }
    super(name, id, email);
    this.school = school;
  }
}

module.exports = Intern;