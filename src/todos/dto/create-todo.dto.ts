import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, MinLength } from "class-validator";

export class CreateTodoDto {
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty()
  name: string;

  @ApiProperty({required: false, default: false})
  completed?: boolean = false;
}
