import mongo from "@prisma/orm-mongo/runtime";
import type { Contract } from "../../prisma/contract.d";
import contractJson from "../../prisma/contract.json" with { type: "json" };

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not defined");
}

export const db = mongo<Contract>({
  contractJson,
  url: databaseUrl,
});