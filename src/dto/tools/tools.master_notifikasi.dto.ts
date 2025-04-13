import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class ToolsMasterNotifikasiDto {
  @ApiProperty({ required: true })
  idMasterNotifikasi: string;

  @ApiProperty({ required: true })
  masterNotifikasi: string;

  @ApiProperty({ required: true })
  forModule: string;

  @ApiProperty({ required: true })
  forModuleRouter: string;

  @ApiProperty({ required: true })
  namaTabel: string;

  @ApiProperty({ required: true })
  fildTanggal: string;

  @ApiProperty({ required: true })
  fildStatus: string;

  @ApiProperty({ required: false })
  icon: string;

  @ApiProperty({ required: false })
  idKantor: string;

  @ApiProperty({ required: false })
  idDepartemen: string;

  @ApiProperty({ required: false })
  idDivisi: string;

  @ApiProperty({ required: false })
  idSection: string;

  @ApiProperty({ required: false })
  cronJob: string;

  @ApiProperty({ required: false })
  validasi: number;

  @ApiProperty({ required: false })
  createdAt: any;

  @ApiProperty({ required: false })
  updatedAt: any;
}
