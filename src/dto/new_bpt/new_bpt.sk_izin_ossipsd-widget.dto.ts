import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipsdDto } from './new_bpt.sk_izin_ossipsd.dto';

export class NewBptSkIzinOssipsdWidgetDto extends NewBptSkIzinOssipsdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
