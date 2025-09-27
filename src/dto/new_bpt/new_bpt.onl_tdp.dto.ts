import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlTdpDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true })
  idKbli: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlTdp: number; // PK

  @ApiProperty({ required: true })
  status: string;
}
