/**
 * Class representing a Employee
 * @class
 */
class employee {
   /**
    * Create a Employee.
     @param {string} name 
     @param {number} id 
     @param {string} email 
    */
   constructor(name, id, email) {
     if (!name || !name.trim().length) {
       throw new Error("Expected parameter 'name' to be a non-empty string");
     }
     if (typeof id !== "number" || isNaN(id) || id < 0) {
       throw new Error("Expected parameter 'id' to be a non-negative number");
     }
     if (!email || !email.trim().length) {
       throw new Error("Expected parameter 'name' to be a non-empty string");
     }
     this.name = name;
     this.id = id;
     this.email = email;
   }
 }
 
 module.exports = employee;