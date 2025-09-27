import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSlsdepotDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSlsdepot: number; // PK

  @ApiProperty({ required: true })
  namaDepot: string;

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;
}
