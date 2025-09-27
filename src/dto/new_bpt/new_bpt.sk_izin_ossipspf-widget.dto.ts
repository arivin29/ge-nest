import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssipspfDto } from './new_bpt.sk_izin_ossipspf.dto';

export class NewBptSkIzinOssipspfWidgetDto extends NewBptSkIzinOssipspfDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
