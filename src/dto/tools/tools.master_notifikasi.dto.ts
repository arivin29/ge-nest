import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsMasterNotifikasiDto {
  @ApiProperty({ required: false })
  @IsOptional()
  createdAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  cronJob: string;

  @ApiProperty({ required: true })
  fildStatus: string;

  @ApiProperty({ required: true })
  fildTanggal: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  forModuleRouter: string;

  @ApiProperty({ required: false })
  @IsOptional()
  icon: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idDepartemen: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idDivisi: string;

  @ApiProperty({ required: false })
  @IsOptional()
  idKantor: string;

  @ApiProperty({ required: true, description: 'Primary Key' })
  idMasterNotifikasi: string; // PK

  @ApiProperty({ required: false })
  @IsOptional()
  idSection: string;

  @ApiProperty({ required: true })
  masterNotifikasi: string;

  @ApiProperty({ required: true })
  namaTabel: string;

  @ApiProperty({ required: false })
  @IsOptional()
  updatedAt: string;

  @ApiProperty({ required: false })
  @IsOptional()
  validasi: number;
}
