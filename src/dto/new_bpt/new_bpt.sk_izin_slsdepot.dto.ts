import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSlsdepotDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSlsdepot: number; // PK

  @ApiProperty({ required: true })
  namaDepot: string;

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;
}
