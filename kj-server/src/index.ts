import { MikroORM } from "@mikro-orm/core";
import express from "express";
import { __prod__ } from "./consts";
import mikroOrmConf from "./mikro-orm.config";

const main = async () => {
  // Postgres is setup to trust my local connection.
  const orm = await MikroORM.init(mikroOrmConf);
  await orm.getMigrator().up();

  const app = express();

  app.listen(4000, () => {
    console.log("Server started on Port:4000");
  });
};

main();
