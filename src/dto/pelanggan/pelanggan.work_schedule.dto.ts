import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganWorkScheduleDto {
  @ApiProperty({ required: true })
  idWorkSchedule: string;

  @ApiProperty({ required: false })
  idContractSite: string;

  @ApiProperty({ required: true })
  idContractSiteService: string;

  @ApiProperty({ required: true })
  tanggalWorkSchedule: string;

  @ApiProperty({ required: false })
  tipeWorkSchedule: string;

  @ApiProperty({ required: false })
  statusWorkSchedule: string;

  @ApiProperty({ required: false })
  keterangan: string;

  @ApiProperty({ required: false })
  createdBy: string;

  @ApiProperty({ required: false })
  updatedBy: string;

  @ApiProperty({ required: false })
  createdAt: string;

  @ApiProperty({ required: false })
  updatedAt: string;
}
