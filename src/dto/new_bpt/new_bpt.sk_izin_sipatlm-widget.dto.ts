import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipatlmDto } from './new_bpt.sk_izin_sipatlm.dto';

export class NewBptSkIzinSipatlmWidgetDto extends NewBptSkIzinSipatlmDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
