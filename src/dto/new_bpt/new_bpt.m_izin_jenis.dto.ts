import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptMIzinJenisDto {
  @ApiProperty({ required: true })
  bidang: string;

  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: true })
  digitalSign: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  files: string;

  @ApiProperty({ required: true })
  hk: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idIzinJenis: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  keterangan: string;

  @ApiProperty({ required: false })
  @IsOptional()
  kode: string;

  @ApiProperty({ required: false })
  @IsOptional()
  log: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noIzin: string;

  @ApiProperty({ required: false })
  @IsOptional()
  noUrut: string;

  @ApiProperty({ required: true })
  online: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  penomoranSk: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  retribusi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: string;

  @ApiProperty({ required: false })
  @IsOptional()
  survey: number;

  @ApiProperty({ required: false })
  @IsOptional()
  tglDaftarIzin: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglEdit: string;

  @ApiProperty({ required: true })
  timTeknis: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  ver: boolean;
}
