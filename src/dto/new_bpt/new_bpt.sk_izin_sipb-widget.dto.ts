import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinSipbDto } from './new_bpt.sk_izin_sipb.dto';

export class NewBptSkIzinSipbWidgetDto extends NewBptSkIzinSipbDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
