import { Injectable } from '@nestjs/common';
import { CreateListDto } from './dto/create-list.dto';
import { UpdateListDto } from './dto/update-list.dto';
import {ListModel} from './entities/list.model';
import { InjectModel } from '@nestjs/sequelize';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom } from 'rxjs';
import { ListGatewayInterface } from './gateways/list-gateway-interface';
import { List } from './entities/list.entity';

/*REGRA DE NEGÓCIO:
Criar uma Lista no banco de dados e no CRM externo
*/

@Injectable()
export class ListsService {

  constructor(
    @InjectModel(ListModel)
    private listGateway: ListGatewayInterface,//porta
    //vem do axios 
    private httpService: HttpService,
  ) {};


 //usando o axios alem de criar vou precisar fazer o envio via http para crm externo
  async create(createListDto: CreateListDto) {
    const list = new List(createListDto.name);
    await this.listGateway.create(list);
    //post pq será inserido no crm uasndo o lastValueFrom para trasnforma em uma promisse
    await lastValueFrom(
    this.httpService.post('lists',{
    name: list.name,
    }));
    //regra de néocio cria no banco e depois cria na lista
    return list;
  }

  findAll() {
    return this.listGateway.finalAll();
  }

  async findOne(id: number) {
    const list = await this.listGateway.findById(id);
    if (!list) {
      throw new Error('List not found');
    }
    return list;
  }

  async update(id: number, updateListDto: UpdateListDto) {
    const list = await this.listGateway.findById(id);

    if (!list) {
      throw new Error('List not found');
    }
    await this.listGateway.update(id,updateListDto)
    return list;
  }

  async remove(id: number) {
    const list = await this.listGateway.findById(id);

    if (!list) {
      throw new Error('List not found');
    }

    await this.listGateway.remove;
  }

}
