import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirpphpDto } from './new_bpt.sk_izin_nirpphp.dto';

export class NewBptSkIzinNirpphpWidgetDto extends NewBptSkIzinNirpphpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
