import { Test, TestingModule } from '@nestjs/testing';
import { ListsService } from './lists.service';
import {ListModel} from './entities/list.model';

//mock teste dados fake para fazer caso de teste 
//a função create vai ser executada e ele retornará uma promessa com um new list
const mockList = {
  create: jest.fn().mockReturnValue(Promise.resolve(new ListModel({name: 'my list Test'}))),
};

const mockHttpService = {
post: jest.fn(),
};

describe('ListsService', () => {
  let service: ListsService;

  beforeEach(() => {
  //usando o as any 
  service = new ListsService(mockList as any, mockHttpService as any);
  });

  //criação do teste
  it("deve criar um lista", async () =>{
  const list = await service.create({name: 'my list Test'});
  console.log(list);
  });

  //  const module: TestingModule = await Test.createTestingModule({
  //    providers: [ListsService],
  //  }).compile();

  //  service = module.get<ListsService>(ListsService);
  //});

  //it('should be defined', () => {
  //  expect(service).toBeDefined();
  //});
});
