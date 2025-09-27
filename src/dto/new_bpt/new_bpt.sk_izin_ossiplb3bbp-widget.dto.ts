import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiplb3bbpDto } from './new_bpt.sk_izin_ossiplb3bbp.dto';

export class NewBptSkIzinOssiplb3bbpWidgetDto extends NewBptSkIzinOssiplb3bbpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
