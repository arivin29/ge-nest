import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';

export class PelangganPenawaranReportDto extends PelangganPenawaranDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;

  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;
}
