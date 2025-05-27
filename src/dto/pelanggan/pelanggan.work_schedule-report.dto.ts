import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleDto } from './pelanggan.work_schedule.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';

export class PelangganWorkScheduleReportDto extends PelangganWorkScheduleDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;
}
