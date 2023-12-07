import { Module } from '@nestjs/common';
import { ListsService } from './lists.service';
import { ListsController } from './lists.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { ListModel } from './entities/list.model';
import { HttpModule } from '@nestjs/axios';

@Module({
  imports: [
  SequelizeModule.forFeature([ListModel]),
  //após colocar o axios colcoar no module a info nesse caso path fake-api do packge.json
  HttpModule.register({
  baseURL: 'http://localhost:8000',
  }),
  ],
  controllers: [ListsController],
  providers: [ListsService],
})
export class ListsModule { }
