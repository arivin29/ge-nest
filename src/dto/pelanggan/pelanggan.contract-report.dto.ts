import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractDto } from './pelanggan.contract.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganContractReportDto extends PelangganContractDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;
}
