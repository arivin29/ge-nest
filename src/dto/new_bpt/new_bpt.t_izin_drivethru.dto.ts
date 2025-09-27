import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class NewBptTIzinDrivethruDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idIzin: number;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idTIzinDrivethru: number; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idUserKeluar: number;

  @ApiProperty({ required: false })
  @IsOptional()
  idUserMasuk: number;

  @ApiProperty({ required: false })
  @IsOptional()
  status: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  tglKeluar: string;

  @ApiProperty({ required: false })
  @IsOptional()
  tglMasuk: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;
}
