import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleBapDto } from './pelanggan.work_schedule_bap.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';

export class PelangganWorkScheduleBapReportDto extends PelangganWorkScheduleBapDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;
}
