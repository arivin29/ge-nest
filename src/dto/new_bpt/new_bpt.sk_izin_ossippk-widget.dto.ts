import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssippkDto } from './new_bpt.sk_izin_ossippk.dto';

export class NewBptSkIzinOssippkWidgetDto extends NewBptSkIzinOssippkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
