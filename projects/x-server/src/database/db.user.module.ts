import { Module } from "@nestjs/common";
import { UserAuthFeature } from "./schemas/user_auth.schema";
import { MongooseModule } from "@nestjs/mongoose";
import { database } from "config/database";
import { UserInfoFeature } from "./schemas/user_info.schema";
import { UserPlatformFeature } from "./schemas/user_platform.schema";
import { TableUserService } from "./table.user.service";
import { DbProjectModule } from "./db.project.module";

@Module({
  imports: [
    MongooseModule.forFeature(
      [UserAuthFeature, UserInfoFeature, UserPlatformFeature],
      database.db_user
    ),
    DbProjectModule
  ],
  providers: [TableUserService],
  exports: [TableUserService]
})
export class DbUserModule {}
