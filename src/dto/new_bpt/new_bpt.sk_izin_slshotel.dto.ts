import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinSlshotelDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinSlshotel: number; // PK

  @ApiProperty({ required: true })
  namaHotel: string;

  @ApiProperty({ required: true })
  namaPenanggungjawab: string;

  @ApiProperty({ required: true })
  namaPerusahaan: string;
}
