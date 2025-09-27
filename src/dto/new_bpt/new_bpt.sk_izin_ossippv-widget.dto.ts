import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssippvDto } from './new_bpt.sk_izin_ossippv.dto';

export class NewBptSkIzinOssippvWidgetDto extends NewBptSkIzinOssippvDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
