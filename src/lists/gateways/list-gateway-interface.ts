import { List } from '../entities/list.entity';
import { ListModel } from '../entities/list.model';
import { UpdateListDto } from '../dto/update-list.dto';

export interface ListGatewayInterface{
create(list: List): Promise<List>;
finalAll(): Promise<List[]>;
findById(id: number): Promise<List>;
update(id: number, updateListDto: UpdateListDto): Promise<List>;
remove(id: number);
}