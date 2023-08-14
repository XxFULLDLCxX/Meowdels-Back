import { db } from '../database/database.connection.js';

// C - CREATE, R - READ, U - UPDATE, D - DELETE;

export const createModel = (name, picture, description, userId) => db.query(
  `INSERT INTO "models" ("name", "picture", "description", "userId")
       VALUES ($1, $2, $3, $4);`, [name, picture, description, userId]);

export const readModelsByUserId = (userId) => db.query(`SELECT * FROM "models" WHERE "userId" = $1;`, [userId]);
export const readModelsAvailables = () => db.query(`SELECT * FROM "models" WHERE "available" = 'true';`);

export const readModelDetailsById = (id) => db.query(
  `SELECT "models".*, json_build_object(
    'name', "users"."name", 
    'email', "users"."email", 
    'phone', "users"."phone", 
    'createdAt', "users"."createdAt") AS "tutor" FROM "models" 
   JOIN "users" ON "models"."userId" = "users"."id" 
   WHERE "models"."id" = $1;`, [id]);

export const updateModelAvailabilityById = (userId, id, available) => db.query(
  `UPDATE "models" SET "available" = $3 WHERE "id" = $2 AND "userId" = $1 ; `, [userId, id, available]);

export const updateModelViews = () => db.query(`UPDATE "models" SET "views" = "views" + 1;`);
