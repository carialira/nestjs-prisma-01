/* eslint-disable @typescript-eslint/no-unused-vars */
import { Body, Controller, Delete, Get, Param, Post, Put} from '@nestjs/common';
import { BookDTO } from './book.dto';
import { BookService } from './book.service';

@Controller('book')
export class BookController {
  constructor(private readonly bookService: BookService) {}

  @Get()
  async findAll(){
    return await this.bookService.findAll();
  }

  @Post()
  async create(@Body() data: BookDTO) {
    return await this.bookService.create(data);
  }

  @Put(":id")
  async update(@Param("id") id: string, @Body() data:BookDTO){
    return await this.bookService.update(id, data);
  }

  @Delete(":id")
  async delete(@Param("id") id: string){
    return await this.bookService.delete(id);
  }

}
