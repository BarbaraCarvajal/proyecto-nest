import { Module } from '@nestjs/common';
import { TasksModule } from './tasks/tasks.module';
import { TasksService } from './tasks/service/tasks.service';

@Module({
  imports: [TasksModule],
  controllers: [],
  providers: [TasksService],
})
export class AppModule {}
