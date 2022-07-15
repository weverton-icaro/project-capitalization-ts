/* eslint-disable @typescript-eslint/no-unused-vars */
import "reflect-metadata";

import "express-async-errors";

import "./shared/container";

import cors from "cors";
import express, { Application, NextFunction, Request, Response } from "express";
import { router } from "routes";
import { AppError } from "shared/errors/AppErrors";
import { createConnection } from "typeorm";

createConnection();

export class App {
  app: Application;

  constructor(private port?: number | string) {
    this.app = express();
    this.settings();
    this.routes();
    this.errors();
  }

  settings() {
    this.app.set("port", this.port || process.env.PORT || 3001);
    this.app.use(express.json);
    this.app.use(cors());
  }

  routes() {
    this.app.use(router);
  }

  errors() {
    this.app.use(
      (
        err: Error,
        request: Request,
        response: Response,
        next: NextFunction
      ) => {
        if (err instanceof AppError) {
          return response.status(err.statusCode).json({ message: err.message });
        }

        return response.status(500).json({
          status: "error",
          message: `Error interno no servidor - ${err.message}`,
        });
      }
    );
  }

  async listen() {
    await this.app.listen(this.app.get("port"));

    console.log("Server is running on port", this.app.get("port"));
  }
}
