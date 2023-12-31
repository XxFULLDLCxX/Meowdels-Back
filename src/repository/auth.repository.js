import { db } from '../database/database.connection.js';

// C - CREATE, R - READ, U - UPDATE, D - DELETE;

export const createUser = (name, email, password, phone, CPF) => db.query(
  `INSERT INTO users ("name", "email", "password", "phone", "CPF")
       VALUES ($1, $2, $3, $4, $5);`, [name, email, password, phone, CPF]);

export const readUserByEmail = (email) => db.query(
  `SELECT * FROM users WHERE email = $1;`, [email]);

export const createSession = (userId) => db.query(
  `INSERT INTO session ("userId") VALUES ($1);`, [userId]);

export const readSessionByUserId = (userId) => db.query(
  `SELECT * FROM session WHERE "userId" = $1;`, [userId]);

export const readSessionByToken = (token) => db.query(
  `SELECT * FROM session WHERE "token" = $1;`, [token]);

export const deleteSession = (userId) => db.query(
  `DELETE FROM session WHERE "userId" = $1;`, [userId]);
