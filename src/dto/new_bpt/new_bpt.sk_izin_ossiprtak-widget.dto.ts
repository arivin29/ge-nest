import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiprtakDto } from './new_bpt.sk_izin_ossiprtak.dto';

export class NewBptSkIzinOssiprtakWidgetDto extends NewBptSkIzinOssiprtakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
