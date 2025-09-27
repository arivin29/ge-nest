import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssimrscdDto } from './new_bpt.sk_izin_ossimrscd.dto';

export class NewBptSkIzinOssimrscdWidgetDto extends NewBptSkIzinOssimrscdDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
