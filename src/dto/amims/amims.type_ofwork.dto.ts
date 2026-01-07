import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsTypeOfworkDto {
  @ApiProperty({ required: true })
  idTypeOfwork: string;

  @ApiProperty({ required: false })
  typeOfwork: string;

  @ApiProperty({ required: false })
  childnameTypeOfwork: string;

  @ApiProperty({ required: false })
  isDeleted: number;

  @ApiProperty({ required: false })
  code: string;
}
