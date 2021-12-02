import { Prisma, Todo } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class TodoEntity implements Todo {
  @ApiProperty()
  id: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty({ default: false })
  completed: boolean;
}
