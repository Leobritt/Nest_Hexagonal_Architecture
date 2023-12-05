import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';

@Injectable()
export class ListsService {

  constructor(
   //instancia que vai tá no bd e tipando com o typeof do TS
   //usando o decorator para injetar a instencia passando como param o tipo do dado
   @InjectModel(List)
   private listModel: typeof List
  ){
  };
  create(createListDto: CreateListDto) {
  return this.listModel.create(createListDto);
  }

  findAll() {
    return this.listModel.findAll();
  }

 async findOne(id: number) {
    const list = await this.listModel.findByPk(id);
    if(!list){
    throw new Error('List not found');
    }
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
  const list = await this.listModel.findByPk(id);

  if(!list){
  throw new Error('List not found');
  }
  await list.update(updateListDto)
    return list;
  }

  async remove(id: number) {
  const list = await this.listModel.findByPk(id);

  if (!list) {
    throw new Error('List not found');
  }

  await list.destroy(); // Use o método destroy na instância específica do modelo
}

}
