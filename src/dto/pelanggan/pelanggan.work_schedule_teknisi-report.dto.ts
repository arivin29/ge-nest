import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleTeknisiDto } from './pelanggan.work_schedule_teknisi.dto';
import { PelangganScheduleDto } from './pelanggan.schedule.dto';
import { PelangganTeknisiDto } from './pelanggan.teknisi.dto';

export class PelangganWorkScheduleTeknisiReportDto extends PelangganWorkScheduleTeknisiDto {
  @ApiProperty({ type: PelangganScheduleDto })
  schedule: PelangganScheduleDto;

  @ApiProperty({ type: PelangganTeknisiDto })
  teknisi: PelangganTeknisiDto;
}
