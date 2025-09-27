import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptAntrianDto {
  @ApiProperty({ required: true, description: 'Primary Key' })
  idAntrian: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idIzinJenis: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idSesi: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idTipe: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  idUser: number;

  @ApiProperty({ required: false })
  @IsOptional()
  jenisLayanan: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  nama: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nik: string;

  @ApiProperty({ required: false })
  @IsOptional()
  nomorTelp: string;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tanggal: string;

  @ApiProperty({ required: false })
  @IsOptional()
  token: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tokenTime: string;
}
