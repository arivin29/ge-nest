import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinSartekDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinSartek: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

  @ApiProperty({ required: true })
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglMasuk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglProses: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglSelesai: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
