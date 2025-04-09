import { ApiProperty } from '@nestjs/swagger';
import { ContractDto } from './contract.dto';

export class ContractWidgetReportDto extends ContractDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;

  // Tambahkan field custom hasil SELECT + GROUP BY jika diperlukan
  // Contoh:
  // @ApiProperty({ type: 'string' })
  // status?: string;
}
