import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssputpDto } from './new_bpt.sk_izin_ossputp.dto';

export class NewBptSkIzinOssputpWidgetDto extends NewBptSkIzinOssputpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
