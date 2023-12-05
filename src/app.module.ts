import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ListsModule } from './lists/lists.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { List } from './lists/entities/list.entity';

@Module({
  imports: [ListsModule,
  //conenctar com o banco 
  SequelizeModule.forRoot({
  dialect:'sqlite',
  host:":memory",
  autoLoadModels: true,
  models:[List]
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
