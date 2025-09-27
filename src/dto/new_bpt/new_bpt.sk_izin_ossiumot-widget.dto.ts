import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiumotDto } from './new_bpt.sk_izin_ossiumot.dto';

export class NewBptSkIzinOssiumotWidgetDto extends NewBptSkIzinOssiumotDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
