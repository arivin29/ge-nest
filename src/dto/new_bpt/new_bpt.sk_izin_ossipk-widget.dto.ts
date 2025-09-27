import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipkDto } from './new_bpt.sk_izin_ossipk.dto';

export class NewBptSkIzinOssipkWidgetDto extends NewBptSkIzinOssipkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
