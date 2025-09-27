import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIpmzenaDto } from './new_bpt.sk_izin_ipmzena.dto';

export class NewBptSkIzinIpmzenaWidgetDto extends NewBptSkIzinIpmzenaDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
