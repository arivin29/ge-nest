import { ApiProperty } from '@nestjs/swagger';
import { PelangganClientSiteDto } from './pelanggan.client_site.dto';
import { PelangganClientDto } from './pelanggan.client.dto';
import { PelangganKantorDto } from './pelanggan.kantor.dto';

export class PelangganClientSiteReportDto extends PelangganClientSiteDto {
  @ApiProperty({ type: PelangganClientDto })
  client: PelangganClientDto;

  @ApiProperty({ type: PelangganKantorDto })
  kantor: PelangganKantorDto;
}
