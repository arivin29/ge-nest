import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIprthDto } from './new_bpt.sk_izin_iprth.dto';

export class NewBptSkIzinIprthWidgetDto extends NewBptSkIzinIprthDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
