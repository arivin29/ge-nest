import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptSkIzinIbdDto {
  @ApiProperty({ required: true })
  idIzinSk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idSkIzinIbd: number; // PK

  @ApiProperty({ required: true })
  jenisDaging: string;

  @ApiProperty({ required: true })
  jenisProduk: string;

  @ApiProperty({ required: true })
  jumlahPenjualan: string;
}
