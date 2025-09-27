import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirppDto } from './new_bpt.sk_izin_nirpp.dto';

export class NewBptSkIzinNirppWidgetDto extends NewBptSkIzinNirppDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
