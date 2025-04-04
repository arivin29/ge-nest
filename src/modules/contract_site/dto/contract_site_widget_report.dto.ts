import { ApiProperty } from '@nestjs/swagger';
import { ContractSiteDto } from './contract_site.dto';

export class ContractSiteWidgetReportDto extends ContractSiteDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;

  // Tambahkan field custom hasil SELECT + GROUP BY jika diperlukan
  // Contoh:
  // @ApiProperty({ type: 'string' })
  // status?: string;
}
