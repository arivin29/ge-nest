import { ApiProperty } from '@nestjs/swagger';
import { PelangganBankAccountDto } from './pelanggan.bank_account.dto';

export class PelangganBankAccountWidgetDto extends PelangganBankAccountDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
