/* eslint-disable class-methods-use-this */
const Joi = require("joi");
const AbstractManager = require("./AbstractManager");

const picturesSchema = Joi.object({
  id: Joi.number(),
  file: Joi.string().max(255),
  describe: Joi.string().max(255).required(),
});

class PictureManager extends AbstractManager {
  static table = "pictures";

  find(id) {
    return this.connection.query(
      `select file, alt, pictogram, categories, picSection from  ${this.table} where id = ? `,
      [id]
    );
  }

  findBySection(id) {
    return this.connection.query(
      `select file, alt, pictogram, categories, picSection from  ${this.table} where picSection = ? `,
      [id]
    );
  }

  findAll() {
    return this.connection.query(`SELECT * FROM ${this.table} `);
  }

  findAllWithFilter(filter) {
    const sqlValues = [];
    let sql = `SELECT id, file, alt, pictogram, categories, picSection FROM ${this.table}`;
    if (filter.categories && !filter.picSection) {
      sql += " WHERE categories= ?";
      sqlValues.push(filter.categories);
    } else if (!filter.categories && filter.picSection) {
      sql += " WHERE picSection = ?";
      sqlValues.push(filter.picSection);
    } else {
      sql += " WHERE categories = ? AND picSection = ? ";
      sqlValues.push(filter.categories, filter.picSection);
    }
    // console.log(sql, sqlValues);
    return this.connection.query(sql, sqlValues);
  }

  get(pictures) {
    return this.connection.query(
      `SELECT file, alt, pictogram, categories, picSection FROM ${this.table} `,
      [
        pictures.file,
        pictures.alt,
        pictures.pictogram,
        pictures.categories,
        pictures.picSection,
      ]
    );
  }

  insert(pictures) {
    return this.connection.query(`INSERT INTO ${PictureManager.table} SET ?`, [
      pictures,
    ]);
  }

  update(pictures) {
    return this.connection.query(`UPDATE ${this.table} SET ? WHERE id=?`, [
      pictures,
      pictures.id,
    ]);
  }

  async validPicturesToCreate(pictures) {
    try {
      await picturesSchema.validateAsync(pictures);
      return true;
    } catch (err) {
      return false;
    }
  }
}

module.exports = PictureManager;
