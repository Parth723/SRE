import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateStudentDto } from './dto/create-student.dto';
import { UpdateStudentDto } from './dto/update-student.dto';
import { Student } from './entities/student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class StudentsService {
  constructor(
    @InjectRepository(Student)
    private readonly studentsRepository: Repository<Student>,
  ) { }

  async create(createStudentDto: CreateStudentDto): Promise<Student> {
    const student = this.studentsRepository.create(createStudentDto)
    return this.studentsRepository.save(student);
  }

  async findAll(): Promise<Student[]> {
    return this.studentsRepository.find();
  }

  async findOne(id: number): Promise<Student> {
    const student = await this.studentsRepository.findOneBy({id})
    if (!student){
      throw new NotFoundException(`Student with the provided ID: ${id} not found`)
    }
    return student
  }

  async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
    await this.studentsRepository.update(id, updateStudentDto)
    return this.findOne(id)
  }

  async remove(id: number): Promise<void> {
    const result = await this.studentsRepository.delete(id)
    if (result.affected === 0){
      throw new NotFoundException(`Student with ID: ${id} not found`)
    }
  }
}
