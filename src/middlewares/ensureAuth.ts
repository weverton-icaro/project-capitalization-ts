import auth from "conf/auth";
import { Request, NextFunction, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/Users/repositories/implementations/UsersRepository";
import { AppError } from "@shared/errors/AppErrors";
import { jwtInvalid, jwtMiss, userNotExists } from "@shared/errors/Messages";

interface ITokenPayload {
  sub: string;
}

export async function ensureAuth(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeader = request.headers.authorization;

  if (!authHeader) {
    throw new AppError(jwtMiss, 401);
  }

  const [, token] = authHeader.split(" ");

  try {
    const decoded = verify(token, auth.jwt.secret);

    const { sub: user_id } = decoded as ITokenPayload;

    const usersRepository = new UsersRepository();

    const user = await usersRepository.findById(user_id);

    if (!user) throw new AppError(userNotExists, 401);

    request.userAuth = {
      id: user_id,
    };

    return next();
  } catch {
    throw new AppError(jwtInvalid, 401);
  }
}
