import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipsmpDto } from './new_bpt.sk_izin_ossipsmp.dto';

export class NewBptSkIzinOssipsmpWidgetDto extends NewBptSkIzinOssipsmpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
