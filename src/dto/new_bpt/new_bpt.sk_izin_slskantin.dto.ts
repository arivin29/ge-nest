import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSlskantinDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSlskantin: number; // PK

  @ApiProperty({ required: true })
  namaKantin: string;

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;
}
