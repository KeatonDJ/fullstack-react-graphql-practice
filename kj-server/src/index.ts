import { MikroORM } from "@mikro-orm/core";
import { __prod__ } from "./consts";
import { Recipe } from "./entities/Recipie";
import mikroOrmConf from "./mikro-orm.config";

const main = async () => {
  // Postgres is setup to trust my local connection.
  const orm = await MikroORM.init(mikroOrmConf);
  await orm.getMigrator().up();

  const recipe = orm.em.create(Recipe, {
    name: "first",
  });
  await orm.em.persistAndFlush(recipe);

  const recipes = await orm.em.find(Recipe, {});

  console.log(recipes);

  // Not usable as we are using class-based ORM properties
  //await orm.em.nativeInsert(Recipe, {name: 'first'});
};

main();
