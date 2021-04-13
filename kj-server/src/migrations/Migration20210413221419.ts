import { Migration } from '@mikro-orm/migrations';

export class Migration20210413221419 extends Migration {

  async up(): Promise<void> {
    this.addSql('create table "recipe" ("_id" serial primary key, "created_at" timestamptz(0) not null, "updated_at" timestamptz(0) not null, "name" text not null);');
  }

}
