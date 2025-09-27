import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIujkDto } from './new_bpt.sk_izin_iujk.dto';

export class NewBptSkIzinIujkWidgetDto extends NewBptSkIzinIujkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
