import { UpdateListDto } from '../dto/update-list.dto';
import { List } from '../entities/list.entity';
import { ListGatewayInterface } from './list-gateway-interface';

//ADAPTER
export class listGatewaySequalize implements ListGatewayInterface{
  create(list: List): Promise<List> {
    throw new Error('Method not implemented.');
  }
  finalAll(): Promise<List[]> {
    throw new Error('Method not implemented.');
  }
  findById(id: number): Promise<List> {
    throw new Error('Method not implemented.');
  }
  update(id: number, updateListDto: UpdateListDto): Promise<List> {
    throw new Error('Method not implemented.');
  }
  remove(id: number) {
    throw new Error('Method not implemented.');
  }

}