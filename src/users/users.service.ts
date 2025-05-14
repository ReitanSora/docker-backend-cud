import { Injectable } from '@nestjs/common';
import { PrismaClient } from '../../generated/prisma';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

const prisma = new PrismaClient();

@Injectable()
export class UsersService {
  async create(user: CreateUserDto) {
    return await prisma.users.create({
      data: {
        email: user.email,
        name: user.name,
      },
    });
  }

  async update(id: string, car: UpdateUserDto) {
    return await prisma.users.update({
      where: {
        id: parseInt(id),
      },
      data: {
        ...car,
      },
    });
  }

  async remove(id: string) {
    return await prisma.users.delete({
      where: {
        id: parseInt(id),
      },
    });
  }
}
