import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIkrmDto {
  @ApiProperty({ required: true })
  bekerja: string;

  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIkrm: number; // PK

  @ApiProperty({ required: true })
  noRekom: string;

  @ApiProperty({ required: true })
  noStr: string;
}
