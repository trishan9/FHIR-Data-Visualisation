import validator from "validator";

import token from "@/lib/token";
import hash from "@/lib/hash";
import { db } from "@/lib/db";

const signup = async (name: string, email: string, password: string) => {
  if (!email || !name || !password) {
    throw Error("All the fields are required");
  }

  if (!validator.isEmail(email)) {
    throw Error("Email address is not valid");
  }

  const userExists = await db.users.findFirst({
    where: {
      Email: email
    }
  })

  if (userExists) {
    throw Error("User with this email address already exists");
  }

  const hashedPassword = await hash.generate(password);

  const patient = await db.users.create({
    data: {
      Email: email as string,
      Name: name as string,
      Password: hashedPassword as string
    }
  })

  return patient;
};

const login = async (email: string, password: string) => {
  if (!email || !password) {
    throw new Error("All the fields are required");
  }

  if (!validator.isEmail(email)) {
    throw new Error("Email address is not valid");
  }

  const userExists = await db.users.findFirst({
    where: {
      Email: email
    }
  })

  if (!userExists) {
    throw Error("User with this email address doesn't exist!");
  }

  const isPasswordCorrect = await hash.compare(password, userExists.Password || "");
  if (!isPasswordCorrect) {
    throw Error("Password is incorrect");
  }

  const accessToken = token.generate({
    payload: { _id: userExists.Id, name: userExists.Name, email: userExists.Email },
    type: "access",
  });

  return {
    token: accessToken,
    _id: userExists.Id,
    name: userExists.Name,
    email: userExists.Email,
  };
};

const getMe = async (id: string) => {
  const userExists = await db.users.findFirst({
    where: {
      Id: id
    }
  })

  if (!userExists) {
    throw new Error("User doesn't exist");
  }

  return {
    name: userExists.Name,
    email: userExists.Email,
  };
};

export default { signup, login, getMe };
