import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIokDto } from './new_bpt.sk_izin_iok.dto';

export class NewBptSkIzinIokWidgetDto extends NewBptSkIzinIokDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
