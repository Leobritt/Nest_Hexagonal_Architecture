import { type } from 'os';
import { Column, Model, Table } from 'sequelize-typescript';

//usar para salvar de fomrma mais tipada
export type ListAttributes = {
name: string;
}


@Table
export class List extends Model<ListAttributes>{
//extends Model do sequelize-typescript
@Column
name: string;

}
