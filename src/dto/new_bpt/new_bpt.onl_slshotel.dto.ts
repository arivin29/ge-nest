import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptOnlSlshotelDto {
  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idOnlSlshotel: number; // PK

  @ApiProperty({ required: true })
  namaHotel: string;

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;
}
