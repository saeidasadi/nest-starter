import { Module } from '@nestjs/common';
import { ConfigModule } from "../config/config.module";
import { DatabaseModule } from "../database/database.module";
import { ComponentsModule } from "../components/components.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";

@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ComponentsModule,
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '../../', 'public'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  //
}
