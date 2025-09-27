import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinLampiranDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinLampiran: number; // PK

  @ApiProperty({ required: true })
  namaFile: string;
}
