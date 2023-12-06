import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import { List } from './entities/list.entity';
import { InjectModel } from '@nestjs/sequelize';
import { error } from 'console';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class ListsService {

  //instancia que vai tá no bd e tipando com o typeof do TS  
  //usando o decorator para injetar a instencia passando como param o tipo do dado
  constructor(
    @InjectModel(List)
    private listModel: typeof List,
    //vem do axios 
    private httpService: HttpService,
  ) {};
  async create(createListDto: CreateListDto) {
    //usando o axios alem de criar vou precisar fazer o envio via http para crm externo
    const list = await this.listModel.create(createListDto);
    //post pq será inserido no crm uasndo o lastValueFrom para trasnforma em uma promisse
    await lastValueFrom(
    this.httpService.post('lists',{
    name: list.name,
    }));
    //regra de néocio cria no banco e depois cria na lista
    return list;
  }

  findAll() {
    return this.listModel.findAll();
  }

  async findOne(id: number) {
    const list = await this.listModel.findByPk(id);
    if (!list) {
      throw new Error('List not found');
    }
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const list = await this.listModel.findByPk(id);

    if (!list) {
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
