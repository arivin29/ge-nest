import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinNirphtpDto } from './new_bpt.sk_izin_nirphtp.dto';

export class NewBptSkIzinNirphtpWidgetDto extends NewBptSkIzinNirphtpDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
