import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirplphpDto } from './new_bpt.sk_izin_nirplphp.dto';

export class NewBptSkIzinNirplphpWidgetDto extends NewBptSkIzinNirplphpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
