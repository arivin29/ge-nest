import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIlkpDto } from './new_bpt.sk_izin_ilkp.dto';

export class NewBptSkIzinIlkpWidgetDto extends NewBptSkIzinIlkpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
