import express from "express";
import pino from "pino";
import middleware from "./middlewares/middleware.js";

export const logger = pino();
const app = express();

middleware(app);

const PORT = process.env.PORT || 2011;
app.listen(PORT, () => {
  logger.info(`PORT IS LISTENING ON ${PORT}`);
});

export default logger;
