import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinDkppDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  denda: string;

  @ApiProperty({ required: true })
  file: string;

  @ApiProperty({ required: true })
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinDkpp: number; // PK

  @ApiProperty({ required: true })
  idUser: number;

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
