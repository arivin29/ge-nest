import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiplb3Dto } from './new_bpt.sk_izin_ossiplb3.dto';

export class NewBptSkIzinOssiplb3WidgetDto extends NewBptSkIzinOssiplb3Dto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
