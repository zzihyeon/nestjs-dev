import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("api/test/user")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  findAll(): string {
    return `find all user`;
  }
  @Get(":id")
  find(@Param('id') id: string): string {
    console.log(id)
    return `find user by ${id}`;
  }
  @Put()
  updateAccount(): string {
    return `update user account`;
  }
  @Post()
  create(): string {
    return `create user`;
  }
  @Delete(":id")
  delete(@Param('id') id: string): string {
    console.log(id)
    return `delete user by ${id}`;
  }
}
