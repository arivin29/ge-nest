import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinLptksDto } from './new_bpt.sk_izin_lptks.dto';

export class NewBptSkIzinLptksWidgetDto extends NewBptSkIzinLptksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
