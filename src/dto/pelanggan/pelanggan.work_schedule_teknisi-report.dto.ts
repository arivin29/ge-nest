import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleTeknisiDto } from './pelanggan.work_schedule_teknisi.dto';
import { PelangganTeknisiDto } from './pelanggan.teknisi.dto';

export class PelangganWorkScheduleTeknisiReportDto extends PelangganWorkScheduleTeknisiDto {
  @ApiProperty({ type: PelangganTeknisiDto })
  teknisi: PelangganTeknisiDto;
}
