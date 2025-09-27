import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinSkDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  daftarUlang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinKodeArsip: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinSk: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  isDeleted: number;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisTtd: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  noSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noUrut: number;

  @ApiProperty({ required: false })
  @IsOptional()
  opt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  size: number;

  @ApiProperty({ required: true })
  statusSk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ttd: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: true })
  ver: boolean;
}
