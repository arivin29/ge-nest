import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinOssiolkDto } from './new_bpt.sk_izin_ossiolk.dto';

export class NewBptSkIzinOssiolkWidgetDto extends NewBptSkIzinOssiolkDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
