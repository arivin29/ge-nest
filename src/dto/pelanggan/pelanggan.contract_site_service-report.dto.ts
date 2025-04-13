import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractSiteServiceDto } from './pelanggan.contract_site_service.dto';
import { PelangganContractSiteDto } from './pelanggan.contract_site.dto';
import { PelangganServiceDto } from './pelanggan.service.dto';

export class PelangganContractSiteServiceReportDto extends PelangganContractSiteServiceDto {
  @ApiProperty({ type: PelangganContractSiteDto })
  contractSite: PelangganContractSiteDto;

  @ApiProperty({ type: PelangganServiceDto })
  service: PelangganServiceDto;
}
