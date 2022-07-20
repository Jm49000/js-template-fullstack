/* eslint-disable class-methods-use-this */
const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

const payments = ["1x", "3x", "12x"];

// eslint-disable-next-line no-unused-vars
const schemaForCreation = Joi.object({
  lastname: Joi.string()
    .pattern(/^[a-z ,.'-]+$/i)
    .required(),
  firstname: Joi.string()
    .pattern(/^[a-z ,.'-]+$/i)
    .required(),
  email: Joi.string()
    .email({
      minDomainSegments: 2,
      //   tlds: { allow: ["com", "net", "fr", "gmail"] },
      // Allowing .com .net and .fr
    })
    .required(),
  paymentMethod: Joi.string().valid(...payments),
});

class ProjectManager extends AbstractManager {
  static table = "project";

  insert(project) {
    return this.connection.query(
      `insert into ${ProjectManager.table} (lastname, firstname, email, paymentMethod, date) VALUES (?, ?, ?, ?, ?)`,
      [
        project.lastname,
        project.firstname,
        project.email,
        project.paymentMethod,
        project.date,
      ]
    );
  }

  findAll() {
    return this.connection.query(
      `SELECT id, lastname, firstname, email, paymentMethod, checkboxStatus, archived, date FROM ${this.table}`
    );
  }

  find(id) {
    return this.connection.query(`SELECT * FROM ${this.table} WHERE id = ?`, [
      id,
    ]);
  }

  update(project) {
    return this.connection.query(
      `UPDATE ${this.table} SET checkboxStatus = ? WHERE id = ? `,
      [project.checkboxStatus, project.id]
    );
  }

  delete(id) {
    return this.connection.query(`delete from ${this.table} where id = ?`, [
      id,
    ]);
  }

  async validProjectToCreate(project, creation = true) {
    try {
      if (creation) {
        await schemaForCreation.validateAsync(project);
      }
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = ProjectManager;
