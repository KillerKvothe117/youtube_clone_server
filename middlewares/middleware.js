import express from "express";
import database from "../config/db.config.js";

const middleware = (app) => {
  database();
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));
};

export default middleware;
