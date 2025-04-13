import { ApiProperty } from '@nestjs/swagger';
import { PelangganCompanyConfigDto } from './pelanggan.company_config.dto';

export class PelangganCompanyConfigWidgetDto extends PelangganCompanyConfigDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
