import { Test, TestingModule } from '@nestjs/testing';
import { StudentsController } from './students.controller';
import { StudentsService } from './students.service';

const mockStudentsService = {
  findAll: jest.fn().mockResolvedValue([{ id: 1, name: 'John Doe' }]),
  findOne: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe' }),
  create: jest.fn().mockResolvedValue({ id: 1, name: 'John Doe' }),
  remove: jest.fn().mockResolvedValue({ affected: 1 })
};

describe('StudentsController', () => {
  let controller: StudentsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [StudentsController],
      providers: [{ provide: StudentsService, useValue: mockStudentsService }],
    }).compile();

    controller = module.get<StudentsController>(StudentsController);
  });

  it('should return all students', async () => {
    expect(await controller.findAll()).toEqual([{ id: 1, name: 'John Doe' }]);
  });

  it('should return a student by ID', async () => {
    expect(await controller.findOne('1')).toEqual({ id: 1, name: 'John Doe' });
  });

  it('should create a student', async () => {
    expect(
      await controller.create({
        firstName: 'John',
        lastName: 'Doe',
        class: '10th',
        division: 'A',
        age: 15,
      })
    ).toEqual({ id: 1, name: 'John Doe' });
  });
  

  it('should delete a student', async () => {
    expect(await controller.remove('1')).toEqual({ affected: 1 });
  });
});
