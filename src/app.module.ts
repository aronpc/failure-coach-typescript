import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { FailureCoachModuleModule } from "./failure-coach-module/failure-coach-module.module";

@Module({
  imports: [FailureCoachModuleModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
