import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractSiteDto } from './pelanggan.contract_site.dto';
import { PelangganContractDto } from './pelanggan.contract.dto';
import { PelangganClientSiteDto } from './pelanggan.client_site.dto';

export class PelangganContractSiteReportDto extends PelangganContractSiteDto {
  @ApiProperty({ type: PelangganContractDto })
  contract: PelangganContractDto;

  @ApiProperty({ type: PelangganClientSiteDto })
  clientSite: PelangganClientSiteDto;
}
