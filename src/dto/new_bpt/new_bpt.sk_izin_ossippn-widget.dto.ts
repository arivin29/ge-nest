import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssippnDto } from './new_bpt.sk_izin_ossippn.dto';

export class NewBptSkIzinOssippnWidgetDto extends NewBptSkIzinOssippnDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
