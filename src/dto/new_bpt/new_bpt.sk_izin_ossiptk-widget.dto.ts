import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiptkDto } from './new_bpt.sk_izin_ossiptk.dto';

export class NewBptSkIzinOssiptkWidgetDto extends NewBptSkIzinOssiptkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
