import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinLpksDto } from './new_bpt.sk_izin_lpks.dto';

export class NewBptSkIzinLpksWidgetDto extends NewBptSkIzinLpksDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
