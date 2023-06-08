import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  private schema: string;
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
    private configService: ConfigService,
  ) {
    this.schema = this.configService.get('DATABASE_SCHEMA');
  }
  async create(user: any) {
    const record = await this.userRepository.insert(user);
    const id = record.identifiers[0].id;
    return await this.userRepository.findOneBy({ id })
  }

  findAll() {
    return `This action returns all user`;
  }

  async findOne(query: any) {
    return await this.userRepository.findOneBy(query)
  }

  update(id: number, updateUserDto: any) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
