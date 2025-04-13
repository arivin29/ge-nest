import { ApiProperty } from '@nestjs/swagger';
import { PelangganContractJenisDto } from './pelanggan.contract_jenis.dto';

export class PelangganContractJenisWidgetDto extends PelangganContractJenisDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
