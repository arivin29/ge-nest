import { ApiProperty } from '@nestjs/swagger';
import { IsOptional } from 'class-validator';

export class PelangganWorkScheduleTeknisiDto {
  @ApiProperty({ required: true })
  idScheduleTeknisi: string;

  @ApiProperty({ required: true })
  idSchedule: string;

  @ApiProperty({ required: true })
  idTeknisi: string;

  @ApiProperty({ required: true })
  namaTeknisi: string;

  @ApiProperty({ required: false })
  peran: string;

  @ApiProperty({ required: false })
  catatan: string;

  @ApiProperty({ required: false })
  createdAt: string;
}
