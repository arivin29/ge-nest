import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssitakDto } from './new_bpt.sk_izin_ossitak.dto';

export class NewBptSkIzinOssitakWidgetDto extends NewBptSkIzinOssitakDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
