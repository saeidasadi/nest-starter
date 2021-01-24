import { Module } from '@nestjs/common';
import { ConfigModule } from "../config/config.module";
import { DatabaseModule } from "../database/database.module";
import { ComponentsModule } from "../components/components.module";


@Module({
  imports: [
    ConfigModule,
    DatabaseModule,
    ComponentsModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
}
