import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkagDto } from './new_bpt.sk_izin_ikag.dto';

export class NewBptSkIzinIkagWidgetDto extends NewBptSkIzinIkagDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
