import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipppkDto } from './new_bpt.sk_izin_ossipppk.dto';

export class NewBptSkIzinOssipppkWidgetDto extends NewBptSkIzinOssipppkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
