import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AmimsLogUserDto {
  @ApiProperty({ required: true })
  idLogUser: string;

  @ApiProperty({ required: false })
  typeLog: string;

  @ApiProperty({ required: false })
  typeWork: string;

  @ApiProperty({ required: false })
  typeIdKey: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  dateLog: string;

  @ApiProperty({ required: false })
  typeValue: string;

  @ApiProperty({ required: false })
  method: string;

  @ApiProperty({ required: false })
  methodValue: string;
}
