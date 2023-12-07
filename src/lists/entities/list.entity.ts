//entidade parecida com o model, mas que tenha mais liberdade e dependa menos de tec no caso o sequalize 
export class List{
name: string;
id: string;

constructor(name: string, id?: string){
this.id = id;
this.name = name;

}

}
