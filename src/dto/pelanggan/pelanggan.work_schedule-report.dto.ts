import { ApiProperty } from '@nestjs/swagger';
import { PelangganWorkScheduleDto } from './pelanggan.work_schedule.dto';
import { PelangganContractSiteDto } from './pelanggan.contract_site.dto';
import { PelangganContractSiteServiceDto } from './pelanggan.contract_site_service.dto';

export class PelangganWorkScheduleReportDto extends PelangganWorkScheduleDto {
  @ApiProperty({ type: PelangganContractSiteDto })
  contractSite: PelangganContractSiteDto;

  @ApiProperty({ type: PelangganContractSiteServiceDto })
  contractSiteService: PelangganContractSiteServiceDto;
}
