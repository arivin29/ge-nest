import { ApiProperty } from '@nestjs/swagger';
import { PelangganPenawaranDto } from './pelanggan.penawaran.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganPenawaranReportDto extends PelangganPenawaranDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;
}
