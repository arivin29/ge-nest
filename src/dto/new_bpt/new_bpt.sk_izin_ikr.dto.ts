import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIkrDto {
  @ApiProperty({ required: true })
  bekerja: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIkr: number; // PK

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  noStr: string;

  @ApiProperty({ required: true })
  sarana: string;
}
