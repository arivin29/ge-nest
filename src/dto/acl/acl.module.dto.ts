import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class AclModuleDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  deskripsi: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idModule: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  isAktif: boolean;

  @ApiProperty({ required: false })
  @IsOptional()
  kodeModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaDb: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaModule: string;

  @ApiProperty({ required: false })
  @IsOptional()
  namaTabel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  urutan: number;
}
