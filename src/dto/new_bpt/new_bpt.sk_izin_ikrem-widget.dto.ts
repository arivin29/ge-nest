import { ApiProperty } from '@nestjs/swagger';
import { NewBptSkIzinIkremDto } from './new_bpt.sk_izin_ikrem.dto';

export class NewBptSkIzinIkremWidgetDto extends NewBptSkIzinIkremDto {
  @ApiProperty({ type: 'number', required: false })
  total?: number;
}
