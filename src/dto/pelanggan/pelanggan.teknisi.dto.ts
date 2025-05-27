import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganTeknisiDto {
  @ApiProperty({ required: true })
  idTeknisi: string;

  @ApiProperty({ required: false })
  idPegawai: string;

  @ApiProperty({ required: false })
  idUser: string;

  @ApiProperty({ required: false })
  namaTeknisi: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;

  @ApiProperty({ required: false })
  statusTeknisi: string;
}
