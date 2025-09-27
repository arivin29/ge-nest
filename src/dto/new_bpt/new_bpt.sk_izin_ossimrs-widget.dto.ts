import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssimrsDto } from './new_bpt.sk_izin_ossimrs.dto';

export class NewBptSkIzinOssimrsWidgetDto extends NewBptSkIzinOssimrsDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
